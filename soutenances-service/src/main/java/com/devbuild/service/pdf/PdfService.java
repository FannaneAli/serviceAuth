package com.devbuild.service.pdf;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class PdfService {

    public String generateAttestation(String thesisTitle, String doctorantEmail) {
        return generateSimple("attestation", "Attestation d'inscription", thesisTitle, doctorantEmail, null, null);
    }

    public String generateAuthorization(String thesisTitle, String doctorantEmail, String authorizationDocumentUrl) {
        return generateSimple("autorisation", "Autorisation de soutenance", thesisTitle, doctorantEmail, authorizationDocumentUrl, null);
    }

    public String generateProcesVerbal(String thesisTitle, String doctorantEmail, LocalDateTime scheduledDateTime, String location) {
        return generateSimple("proces-verbal", "Procès-verbal de soutenance (pré-rempli)", thesisTitle, doctorantEmail, null, formatSlot(scheduledDateTime, location));
    }

    private String generateSimple(String prefix, String title, String thesisTitle, String email, String extra, String slot) {
        try {
            File dir = new File(System.getProperty("java.io.tmpdir"), "soutenances");
            if (!dir.exists()) {
                dir.mkdirs();
            }
            File out = new File(dir, prefix + "-" + UUID.randomUUID() + ".pdf");
            Document document = new Document();
            PdfWriter.getInstance(document, new FileOutputStream(out));
            document.open();
            document.add(new Paragraph(title));
            document.add(new Paragraph("Thèse: " + nullSafe(thesisTitle)));
            document.add(new Paragraph("Doctorant: " + nullSafe(email)));
            if (slot != null) {
                document.add(new Paragraph("Créneau: " + slot));
            }
            if (extra != null) {
                document.add(new Paragraph("Document: " + extra));
            }
            document.close();
            return out.toURI().toString();
        } catch (IOException | DocumentException e) {
            return null;
        }
    }

    private String nullSafe(String v) {
        return v == null ? "" : v;
    }

    private String formatSlot(LocalDateTime dt, String location) {
        if (dt == null) return null;
        return dt.toString() + (location != null ? (" @ " + location) : "");
    }
}
