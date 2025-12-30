import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { AccountResponse, NotificationResponse } from '../../core/models';
import { interval, Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-notifications',
  imports: [CommonModule],
  template: `
    <div class="panel">
      <div class="flex" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <h2 style="margin: 0;">📬 Mes Notifications</h2>
          <p class="muted">Suivez l'avancement de vos demandes et téléchargez vos documents.</p>
        </div>
        <div class="flex" style="gap: 8px;">
          <button type="button" (click)="refresh()" [disabled]="loading">
            🔄 Rafraîchir
          </button>
          <button type="button" (click)="markAllRead()" [disabled]="loading || unreadCount === 0" 
                  style="background: #5d9c6d;">
            ✓ Tout marquer lu
          </button>
          <span *ngIf="unreadCount > 0" class="badge" style="background: #e0a546; color: #2c1e07;">
            {{ unreadCount }} non lue(s)
          </span>
        </div>
      </div>
    </div>

    <!-- Notifications List -->
    <div class="panel" *ngIf="notifications.length > 0">
      <div class="notification-list">
        <div *ngFor="let notif of notifications" 
             class="notification-item" 
             [class.unread]="notif.status !== 'READ'"
             (click)="markAsRead(notif)">
          
          <div class="notification-header">
            <span class="notification-icon">{{ getIcon(notif.type) }}</span>
            <span class="notification-type">{{ formatType(notif.type) }}</span>
            <span class="notification-date">{{ formatDate(notif.createdAt) }}</span>
            <span *ngIf="notif.status !== 'READ'" class="unread-dot"></span>
          </div>
          
          <div class="notification-subject" *ngIf="notif.subject">
            <strong>{{ notif.subject }}</strong>
          </div>
          
          <div class="notification-content" *ngIf="notif.content">
            {{ notif.content }}
          </div>

          <!-- Documents associés -->
          <div class="notification-documents" *ngIf="hasDocuments(notif)">
            <div class="documents-header">📄 Documents disponibles:</div>
            <div class="document-buttons">
              <button *ngIf="getMetadata(notif, 'attestationUrl')" 
                      (click)="downloadDocument($event, notif, 'attestation')"
                      class="doc-btn attestation">
                📜 Attestation d'inscription
              </button>
              <button *ngIf="getMetadata(notif, 'authorizationDocumentUrl')" 
                      (click)="downloadDocument($event, notif, 'autorisation')"
                      class="doc-btn autorisation">
                ✅ Autorisation de soutenance
              </button>
              <button *ngIf="getMetadata(notif, 'procesVerbalUrl')" 
                      (click)="downloadDocument($event, notif, 'proces-verbal')"
                      class="doc-btn pv">
                📋 Procès-verbal
              </button>
            </div>
          </div>

          <!-- Metadata preview -->
          <div class="notification-meta" *ngIf="notif.metadata?.thesisTitle">
            <span class="meta-label">Thèse:</span> {{ notif.metadata.thesisTitle }}
          </div>
          <div class="notification-meta" *ngIf="notif.metadata?.status">
            <span class="meta-label">Statut:</span> 
            <span class="badge" [style.background]="getStatusColor(notif.metadata.status)">
              {{ notif.metadata.status }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="panel" *ngIf="notifications.length === 0 && !loading">
      <div style="text-align: center; padding: 40px;">
        <div style="font-size: 48px;">📭</div>
        <p class="muted">Aucune notification pour l'instant.</p>
        <p class="muted">Vous recevrez des notifications lors des mises à jour de vos soutenances.</p>
      </div>
    </div>

    <div class="panel" *ngIf="loading">
      <p style="text-align: center;">Chargement...</p>
    </div>
  `,
  styles: [`
    .notification-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .notification-item {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .notification-item:hover {
      border-color: var(--primary);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .notification-item.unread {
      border-left: 4px solid #5d9c6d;
      background: linear-gradient(90deg, rgba(93,156,109,0.05) 0%, transparent 100%);
    }

    .notification-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }

    .notification-icon {
      font-size: 20px;
    }

    .notification-type {
      font-size: 12px;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .notification-date {
      margin-left: auto;
      font-size: 12px;
      color: var(--muted);
    }

    .unread-dot {
      width: 8px;
      height: 8px;
      background: #5d9c6d;
      border-radius: 50%;
    }

    .notification-subject {
      font-size: 16px;
      margin-bottom: 6px;
    }

    .notification-content {
      color: var(--text);
      font-size: 14px;
      line-height: 1.5;
    }

    .notification-documents {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px dashed var(--border);
    }

    .documents-header {
      font-size: 13px;
      color: var(--muted);
      margin-bottom: 8px;
    }

    .document-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .doc-btn {
      padding: 8px 12px;
      font-size: 13px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .doc-btn.attestation {
      background: #3c5d8b;
      color: #e7ecf7;
    }

    .doc-btn.autorisation {
      background: #5d9c6d;
      color: #0e1a11;
    }

    .doc-btn.pv {
      background: #8b6b3c;
      color: #f7f0e7;
    }

    .doc-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    }

    .notification-meta {
      margin-top: 8px;
      font-size: 13px;
    }

    .meta-label {
      color: var(--muted);
    }
  `]
})
export class NotificationsComponent implements OnInit, OnDestroy {
  me: AccountResponse | null = null;
  notifications: NotificationResponse[] = [];
  loading = false;
  private refreshSub?: Subscription;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadMe();
    // Auto-refresh every 30 seconds
    this.refreshSub = interval(30000).subscribe(() => this.refresh());
  }

  ngOnDestroy(): void {
    this.refreshSub?.unsubscribe();
  }

  get unreadCount(): number {
    return this.notifications.filter(n => n.status !== 'READ').length;
  }

  loadMe() {
    this.loading = true;
    this.api.me().subscribe({
      next: me => {
        this.me = me;
        this.refresh();
      },
      error: () => {
        this.me = null;
        this.loading = false;
      }
    });
  }

  refresh() {
    if (!this.me) return;
    this.loading = true;
    this.api.getNotificationsForAccount(this.me.id).subscribe({
      next: list => {
        this.notifications = list.sort((a, b) => 
          new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
        );
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  markAsRead(notif: NotificationResponse) {
    if (notif.status === 'READ') return;
    this.api.markNotificationAsRead(notif.id).subscribe({
      next: updated => {
        const idx = this.notifications.findIndex(n => n.id === notif.id);
        if (idx >= 0) {
          this.notifications[idx] = { ...this.notifications[idx], status: 'READ' };
        }
      }
    });
  }

  markAllRead() {
    if (!this.me) return;
    this.api.markAllNotificationsAsRead(this.me.id).subscribe({
      next: () => {
        this.notifications = this.notifications.map(n => ({ ...n, status: 'READ' as const }));
      }
    });
  }

  hasDocuments(notif: NotificationResponse): boolean {
    if (!notif.metadata) return false;
    return !!(notif.metadata['attestationUrl'] || 
              notif.metadata['authorizationDocumentUrl'] || 
              notif.metadata['procesVerbalUrl']);
  }

  getMetadata(notif: NotificationResponse, key: string): string | null {
    return notif.metadata?.[key] || null;
  }

  downloadDocument(event: Event, notif: NotificationResponse, type: string) {
    event.stopPropagation();
    const soutenanceId = notif.metadata?.['soutenanceId'];
    if (!soutenanceId) return;

    let download$;
    let filename = '';

    switch (type) {
      case 'attestation':
        download$ = this.api.generateAttestation(soutenanceId);
        filename = `attestation-${soutenanceId}.pdf`;
        break;
      case 'autorisation':
        download$ = this.api.generateAutorisation(soutenanceId);
        filename = `autorisation-${soutenanceId}.pdf`;
        break;
      case 'proces-verbal':
        download$ = this.api.generateProcesVerbal(soutenanceId);
        filename = `proces-verbal-${soutenanceId}.pdf`;
        break;
      default:
        return;
    }

    download$.subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Download failed:', err);
        alert('Erreur lors du téléchargement du document');
      }
    });
  }

  getIcon(type: string): string {
    const icons: Record<string, string> = {
      'SOUTENANCE_SUBMITTED': '📝',
      'SOUTENANCE_UNDER_REVIEW': '🔍',
      'SOUTENANCE_APPROVED': '✅',
      'SOUTENANCE_REJECTED': '❌',
      'SOUTENANCE_AUTHORIZED': '🎫',
      'SOUTENANCE_SCHEDULED': '📅',
      'SOUTENANCE_JURY_VALIDATED': '👥',
      'SOUTENANCE_DEFENDED': '🎓',
      'SOUTENANCE_DIRECTOR_APPROVED': '👨‍🏫',
      'SOUTENANCE_DIRECTOR_REJECTED': '🚫',
      'SOUTENANCE_RAPPORTEUR_REPORT_SUBMITTED': '📊',
      'SOUTENANCE_RESULT_SET': '🏆',
      'DURATION_LIMIT_APPROACHING': '⚠️',
      'GENERIC': '📢'
    };
    return icons[type] || '📌';
  }

  formatType(type: string): string {
    const labels: Record<string, string> = {
      'SOUTENANCE_SUBMITTED': 'Soutenance soumise',
      'SOUTENANCE_UNDER_REVIEW': 'En cours d\'examen',
      'SOUTENANCE_APPROVED': 'Soutenance approuvée',
      'SOUTENANCE_REJECTED': 'Soutenance rejetée',
      'SOUTENANCE_AUTHORIZED': 'Soutenance autorisée',
      'SOUTENANCE_SCHEDULED': 'Soutenance planifiée',
      'SOUTENANCE_JURY_VALIDATED': 'Jury validé',
      'SOUTENANCE_DEFENDED': 'Soutenance soutenue',
      'SOUTENANCE_DIRECTOR_APPROVED': 'Approuvée par directeur',
      'SOUTENANCE_DIRECTOR_REJECTED': 'Rejetée par directeur',
      'SOUTENANCE_RAPPORTEUR_REPORT_SUBMITTED': 'Rapport rapporteur',
      'SOUTENANCE_RESULT_SET': 'Résultat défini',
      'DURATION_LIMIT_APPROACHING': 'Alerte durée',
      'GENERIC': 'Notification'
    };
    return labels[type] || type;
  }

  formatDate(dateStr?: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      if (hours === 0) {
        const minutes = Math.floor(diff / (1000 * 60));
        return minutes <= 1 ? 'À l\'instant' : `Il y a ${minutes} min`;
      }
      return `Il y a ${hours}h`;
    } else if (days === 1) {
      return 'Hier';
    } else if (days < 7) {
      return `Il y a ${days} jours`;
    }
    return date.toLocaleDateString('fr-FR');
  }

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      'SUBMITTED': '#3c5d8b',
      'UNDER_REVIEW': '#8b6b3c',
      'APPROVED': '#5d9c6d',
      'REJECTED': '#b95858',
      'SCHEDULED': '#6b8b3c',
      'DEFENDED': '#5d9c6d',
      'CLOSED': '#666'
    };
    return colors[status] || '#666';
  }
}
