package com.devbuild.service.pdf;

import com.devbuild.entity.JuryMember;
import com.devbuild.entity.Soutenance;
import com.devbuild.enums.SoutenanceResult;
import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.awt.Color;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;
import java.util.UUID;

@Service
@Slf4j
public class PdfService {

    private static final Font TITLE_FONT = new Font(Font.HELVETICA, 18, Font.BOLD, Color.DARK_GRAY);
    private static final Font SUBTITLE_FONT = new Font(Font.HELVETICA, 14, Font.BOLD, Color.DARK_GRAY);
    private static final Font HEADER_FONT = new Font(Font.HELVETICA, 12, Font.BOLD);
    private static final Font NORMAL_FONT = new Font(Font.HELVETICA, 11, Font.NORMAL);
    private static final Font SMALL_FONT = new Font(Font.HELVETICA, 9, Font.ITALIC, Color.GRAY);
    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd MMMM yyyy", Locale.FRENCH);
    private static final DateTimeFormatter DATETIME_FORMATTER = DateTimeFormatter.ofPattern("dd MMMM yyyy 'à' HH'h'mm", Locale.FRENCH);

    /**
     * Génère l'attestation d'inscription au doctorat
     */
    public String generateAttestation(String thesisTitle, String doctorantEmail) {
        try {
            File file = createOutputFile("attestation");
            Document document = new Document(PageSize.A4, 50, 50, 50, 50);
            PdfWriter.getInstance(document, new FileOutputStream(file));
            document.open();

            // En-tête institutionnel
            addInstitutionHeader(document);
            document.add(new Paragraph("\n"));

            // Titre du document
            Paragraph title = new Paragraph("ATTESTATION D'INSCRIPTION", TITLE_FONT);
            title.setAlignment(Element.ALIGN_CENTER);
            document.add(title);
            document.add(new Paragraph("\n\n"));

            // Corps du document
            Paragraph body = new Paragraph();
            body.setFont(NORMAL_FONT);
            body.setAlignment(Element.ALIGN_JUSTIFIED);
            body.add("Le Directeur de l'École Doctorale atteste que :\n\n");

            // Informations du doctorant
            PdfPTable infoTable = new PdfPTable(2);
            infoTable.setWidthPercentage(90);
            infoTable.setWidths(new float[]{1, 3});
            addTableRow(infoTable, "Doctorant(e) :", nullSafe(doctorantEmail));
            addTableRow(infoTable, "Sujet de thèse :", nullSafe(thesisTitle));
            addTableRow(infoTable, "Date d'effet :", LocalDate.now().format(DATE_FORMATTER));
            document.add(body);
            document.add(infoTable);
            document.add(new Paragraph("\n"));

            // Texte de certification
            Paragraph cert = new Paragraph(
                "est régulièrement inscrit(e) au programme de doctorat de notre établissement " +
                "pour l'année universitaire en cours.\n\n" +
                "Cette attestation est délivrée pour servir et valoir ce que de droit.",
                NORMAL_FONT
            );
            cert.setAlignment(Element.ALIGN_JUSTIFIED);
            document.add(cert);
            document.add(new Paragraph("\n\n\n"));

            // Signature
            addSignatureBlock(document, "Le Directeur de l'École Doctorale");

            document.close();
            log.info("Attestation générée: {}", file.getAbsolutePath());
            return file.toURI().toString();
        } catch (IOException | DocumentException e) {
            log.error("Erreur génération attestation", e);
            return null;
        }
    }

    /**
     * Génère l'autorisation de soutenance
     */
    public String generateAuthorization(String thesisTitle, String doctorantEmail, String existingUrl) {
        if (existingUrl != null && !existingUrl.isBlank()) {
            return existingUrl;
        }
        try {
            File file = createOutputFile("autorisation");
            Document document = new Document(PageSize.A4, 50, 50, 50, 50);
            PdfWriter.getInstance(document, new FileOutputStream(file));
            document.open();

            // En-tête institutionnel
            addInstitutionHeader(document);
            document.add(new Paragraph("\n"));

            // Titre du document
            Paragraph title = new Paragraph("AUTORISATION DE SOUTENANCE DE THÈSE", TITLE_FONT);
            title.setAlignment(Element.ALIGN_CENTER);
            document.add(title);
            document.add(new Paragraph("\n\n"));

            // Numéro de référence
            Paragraph ref = new Paragraph("Réf: AUTH-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase(), SMALL_FONT);
            ref.setAlignment(Element.ALIGN_RIGHT);
            document.add(ref);
            document.add(new Paragraph("\n"));

            // Corps
            Paragraph intro = new Paragraph(
                "Vu la demande de soutenance déposée par le(la) doctorant(e),\n" +
                "Vu l'avis favorable du directeur de thèse,\n" +
                "Vu les rapports favorables des rapporteurs,\n" +
                "Vu la validation du jury de soutenance,\n\n" +
                "Le Directeur de l'École Doctorale autorise :",
                NORMAL_FONT
            );
            intro.setAlignment(Element.ALIGN_JUSTIFIED);
            document.add(intro);
            document.add(new Paragraph("\n"));

            // Informations
            PdfPTable infoTable = new PdfPTable(2);
            infoTable.setWidthPercentage(90);
            infoTable.setWidths(new float[]{1, 3});
            addTableRow(infoTable, "Doctorant(e) :", nullSafe(doctorantEmail));
            addTableRow(infoTable, "Sujet de thèse :", nullSafe(thesisTitle));
            addTableRow(infoTable, "Date d'autorisation :", LocalDate.now().format(DATE_FORMATTER));
            document.add(infoTable);
            document.add(new Paragraph("\n"));

            // Texte d'autorisation
            Paragraph auth = new Paragraph(
                "à soutenir sa thèse de doctorat devant le jury désigné à cet effet.\n\n" +
                "Cette autorisation est valable pour une durée de six (6) mois à compter de sa date d'émission.",
                NORMAL_FONT
            );
            auth.setAlignment(Element.ALIGN_JUSTIFIED);
            document.add(auth);
            document.add(new Paragraph("\n\n\n"));

            // Signature
            addSignatureBlock(document, "Le Directeur de l'École Doctorale");

            document.close();
            log.info("Autorisation générée: {}", file.getAbsolutePath());
            return file.toURI().toString();
        } catch (IOException | DocumentException e) {
            log.error("Erreur génération autorisation", e);
            return null;
        }
    }

    /**
     * Génère le procès-verbal de soutenance (pré-rempli)
     */
    public String generateProcesVerbal(String thesisTitle, String doctorantEmail, LocalDateTime scheduledDateTime, String location) {
        try {
            File file = createOutputFile("proces-verbal");
            Document document = new Document(PageSize.A4, 50, 50, 50, 50);
            PdfWriter.getInstance(document, new FileOutputStream(file));
            document.open();

            // En-tête institutionnel
            addInstitutionHeader(document);
            document.add(new Paragraph("\n"));

            // Titre du document
            Paragraph title = new Paragraph("PROCÈS-VERBAL DE SOUTENANCE DE THÈSE", TITLE_FONT);
            title.setAlignment(Element.ALIGN_CENTER);
            document.add(title);
            Paragraph subtitle = new Paragraph("(Document pré-rempli - À compléter après la soutenance)", SMALL_FONT);
            subtitle.setAlignment(Element.ALIGN_CENTER);
            document.add(subtitle);
            document.add(new Paragraph("\n\n"));

            // Informations de la soutenance
            PdfPTable infoTable = new PdfPTable(2);
            infoTable.setWidthPercentage(100);
            infoTable.setWidths(new float[]{1, 2});
            addTableRow(infoTable, "Doctorant(e) :", nullSafe(doctorantEmail));
            addTableRow(infoTable, "Sujet de thèse :", nullSafe(thesisTitle));
            addTableRow(infoTable, "Date et heure :", scheduledDateTime != null ? scheduledDateTime.format(DATETIME_FORMATTER) : "____________________");
            addTableRow(infoTable, "Lieu :", nullSafe(location).isEmpty() ? "____________________" : location);
            document.add(infoTable);
            document.add(new Paragraph("\n"));

            // Section Jury (à remplir)
            document.add(new Paragraph("COMPOSITION DU JURY", SUBTITLE_FONT));
            document.add(new Paragraph("\n"));
            
            PdfPTable juryTable = new PdfPTable(4);
            juryTable.setWidthPercentage(100);
            juryTable.setWidths(new float[]{2, 2, 1.5f, 1});
            addJuryHeader(juryTable);
            // Lignes vides pour le jury
            for (int i = 0; i < 6; i++) {
                addEmptyJuryRow(juryTable);
            }
            document.add(juryTable);
            document.add(new Paragraph("\n"));

            // Déroulement de la soutenance
            document.add(new Paragraph("DÉROULEMENT DE LA SOUTENANCE", SUBTITLE_FONT));
            document.add(new Paragraph("\n"));
            
            Paragraph deroulement = new Paragraph(
                "Heure de début : _______________     Heure de fin : _______________\n\n" +
                "Le(la) candidat(e) a présenté ses travaux de recherche devant le jury. " +
                "Après délibération à huis clos, le jury a décidé :\n",
                NORMAL_FONT
            );
            document.add(deroulement);
            document.add(new Paragraph("\n"));

            // Cases à cocher pour le résultat
            addCheckboxLine(document, "D'admettre le(la) candidat(e) au grade de Docteur");
            addCheckboxLine(document, "D'admettre avec mention Très Honorable");
            addCheckboxLine(document, "D'admettre avec mention Très Honorable avec Félicitations du Jury");
            addCheckboxLine(document, "D'ajourner la soutenance");
            document.add(new Paragraph("\n"));

            // Observations
            document.add(new Paragraph("OBSERVATIONS DU JURY", SUBTITLE_FONT));
            document.add(new Paragraph("_____________________________________________________________________________", NORMAL_FONT));
            document.add(new Paragraph("_____________________________________________________________________________", NORMAL_FONT));
            document.add(new Paragraph("_____________________________________________________________________________", NORMAL_FONT));
            document.add(new Paragraph("\n\n"));

            // Signatures du jury
            document.add(new Paragraph("SIGNATURES DES MEMBRES DU JURY", SUBTITLE_FONT));
            document.add(new Paragraph("\n"));
            
            PdfPTable sigTable = new PdfPTable(3);
            sigTable.setWidthPercentage(100);
            for (int i = 0; i < 6; i++) {
                PdfPCell cell = new PdfPCell(new Phrase("\n\n\n_____________________\nNom et signature", SMALL_FONT));
                cell.setBorder(Rectangle.NO_BORDER);
                cell.setHorizontalAlignment(Element.ALIGN_CENTER);
                cell.setPadding(10);
                sigTable.addCell(cell);
            }
            document.add(sigTable);

            document.close();
            log.info("Procès-verbal généré: {}", file.getAbsolutePath());
            return file.toURI().toString();
        } catch (IOException | DocumentException e) {
            log.error("Erreur génération procès-verbal", e);
            return null;
        }
    }

    /**
     * Génère le procès-verbal de soutenance complet avec toutes les informations de la soutenance
     */
    public String generateProcesVerbalComplete(Soutenance soutenance) {
        try {
            File file = createOutputFile("proces-verbal-complet");
            Document document = new Document(PageSize.A4, 50, 50, 50, 50);
            PdfWriter.getInstance(document, new FileOutputStream(file));
            document.open();

            // En-tête institutionnel
            addInstitutionHeader(document);
            document.add(new Paragraph("\n"));

            // Titre du document
            Paragraph title = new Paragraph("PROCÈS-VERBAL DE SOUTENANCE DE THÈSE", TITLE_FONT);
            title.setAlignment(Element.ALIGN_CENTER);
            document.add(title);
            document.add(new Paragraph("\n\n"));

            // Informations de la soutenance
            PdfPTable infoTable = new PdfPTable(2);
            infoTable.setWidthPercentage(100);
            infoTable.setWidths(new float[]{1, 2});
            addTableRow(infoTable, "Doctorant(e) :", nullSafe(soutenance.getDoctorantEmail()));
            addTableRow(infoTable, "Sujet de thèse :", nullSafe(soutenance.getThesisTitle()));
            addTableRow(infoTable, "Date et heure :", soutenance.getScheduledDateTime() != null ? 
                soutenance.getScheduledDateTime().format(DATETIME_FORMATTER) : "Non définie");
            addTableRow(infoTable, "Lieu :", nullSafe(soutenance.getLocation()));
            document.add(infoTable);
            document.add(new Paragraph("\n"));

            // Composition du jury
            List<JuryMember> juryMembers = soutenance.getJuryMembers();
            if (juryMembers != null && !juryMembers.isEmpty()) {
                document.add(new Paragraph("COMPOSITION DU JURY", SUBTITLE_FONT));
                document.add(new Paragraph("\n"));
                
                PdfPTable juryTable = new PdfPTable(4);
                juryTable.setWidthPercentage(100);
                juryTable.setWidths(new float[]{2, 2, 1.5f, 1});
                addJuryHeader(juryTable);
                
                for (JuryMember member : juryMembers) {
                    addCell(juryTable, nullSafe(member.getFullName()), NORMAL_FONT);
                    addCell(juryTable, nullSafe(member.getInstitution()), NORMAL_FONT);
                    addCell(juryTable, member.getRole() != null ? member.getRole().name() : "", NORMAL_FONT);
                    addCell(juryTable, member.isExternal() ? "Externe" : "Interne", NORMAL_FONT);
                }
                document.add(juryTable);
                document.add(new Paragraph("\n"));
            }

            // Rapporteurs
            document.add(new Paragraph("AVIS DES RAPPORTEURS", SUBTITLE_FONT));
            document.add(new Paragraph("\n"));
            PdfPTable rapTable = new PdfPTable(2);
            rapTable.setWidthPercentage(100);
            addTableRow(rapTable, "Rapporteur 1 :", 
                (soutenance.getRapporteur1Favorable() != null ? 
                    (soutenance.getRapporteur1Favorable() ? "Favorable" : "Défavorable") : "En attente"));
            addTableRow(rapTable, "Rapporteur 2 :", 
                (soutenance.getRapporteur2Favorable() != null ? 
                    (soutenance.getRapporteur2Favorable() ? "Favorable" : "Défavorable") : "En attente"));
            document.add(rapTable);
            document.add(new Paragraph("\n"));

            // Résultat
            document.add(new Paragraph("DÉCISION DU JURY", SUBTITLE_FONT));
            document.add(new Paragraph("\n"));
            
            SoutenanceResult result = soutenance.getResult();
            String resultText = result != null ? formatResult(result) : "En attente de délibération";
            Paragraph resultPara = new Paragraph("Décision : " + resultText, HEADER_FONT);
            document.add(resultPara);
            
            if (soutenance.getResultDate() != null) {
                document.add(new Paragraph("Date de décision : " + soutenance.getResultDate().format(DATE_FORMATTER), NORMAL_FONT));
            }
            if (soutenance.getResultComments() != null && !soutenance.getResultComments().isBlank()) {
                document.add(new Paragraph("\nObservations : " + soutenance.getResultComments(), NORMAL_FONT));
            }
            document.add(new Paragraph("\n\n"));

            // Signatures
            document.add(new Paragraph("SIGNATURES", SUBTITLE_FONT));
            document.add(new Paragraph("\n"));
            
            PdfPTable sigTable = new PdfPTable(2);
            sigTable.setWidthPercentage(100);
            
            PdfPCell cell1 = new PdfPCell(new Phrase("\n\n\n_____________________\nLe Président du Jury", NORMAL_FONT));
            cell1.setBorder(Rectangle.NO_BORDER);
            cell1.setHorizontalAlignment(Element.ALIGN_CENTER);
            sigTable.addCell(cell1);
            
            PdfPCell cell2 = new PdfPCell(new Phrase("\n\n\n_____________________\nLe Directeur de l'École Doctorale", NORMAL_FONT));
            cell2.setBorder(Rectangle.NO_BORDER);
            cell2.setHorizontalAlignment(Element.ALIGN_CENTER);
            sigTable.addCell(cell2);
            
            document.add(sigTable);

            document.close();
            log.info("Procès-verbal complet généré: {}", file.getAbsolutePath());
            return file.toURI().toString();
        } catch (IOException | DocumentException e) {
            log.error("Erreur génération procès-verbal complet", e);
            return null;
        }
    }

    // === Méthodes utilitaires ===

    private File createOutputFile(String prefix) throws IOException {
        File dir = new File(System.getProperty("java.io.tmpdir"), "soutenances");
        if (!dir.exists()) {
            dir.mkdirs();
        }
        return new File(dir, prefix + "-" + UUID.randomUUID() + ".pdf");
    }

    private void addInstitutionHeader(Document document) throws DocumentException {
        Paragraph header = new Paragraph();
        header.setAlignment(Element.ALIGN_CENTER);
        header.add(new Chunk("UNIVERSITÉ / ÉCOLE DOCTORALE\n", HEADER_FONT));
        header.add(new Chunk("Faculté des Sciences et Technologies\n", NORMAL_FONT));
        header.add(new Chunk("Formation Doctorale", SMALL_FONT));
        document.add(header);
        
        // Ligne de séparation
        Paragraph line = new Paragraph("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", SMALL_FONT);
        line.setAlignment(Element.ALIGN_CENTER);
        document.add(line);
    }

    private void addSignatureBlock(Document document, String role) throws DocumentException {
        PdfPTable sigTable = new PdfPTable(2);
        sigTable.setWidthPercentage(100);
        
        PdfPCell dateCell = new PdfPCell(new Phrase("Fait le " + LocalDate.now().format(DATE_FORMATTER), NORMAL_FONT));
        dateCell.setBorder(Rectangle.NO_BORDER);
        sigTable.addCell(dateCell);
        
        PdfPCell sigCell = new PdfPCell(new Phrase("\n\n\n_____________________\n" + role, NORMAL_FONT));
        sigCell.setBorder(Rectangle.NO_BORDER);
        sigCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
        sigTable.addCell(sigCell);
        
        document.add(sigTable);
    }

    private void addTableRow(PdfPTable table, String label, String value) {
        PdfPCell labelCell = new PdfPCell(new Phrase(label, HEADER_FONT));
        labelCell.setBorder(Rectangle.NO_BORDER);
        labelCell.setPadding(5);
        table.addCell(labelCell);
        
        PdfPCell valueCell = new PdfPCell(new Phrase(value, NORMAL_FONT));
        valueCell.setBorder(Rectangle.NO_BORDER);
        valueCell.setPadding(5);
        table.addCell(valueCell);
    }

    private void addJuryHeader(PdfPTable table) {
        String[] headers = {"Nom et Prénom", "Institution", "Rôle", "Statut"};
        for (String header : headers) {
            PdfPCell cell = new PdfPCell(new Phrase(header, HEADER_FONT));
            cell.setBackgroundColor(new Color(230, 230, 230));
            cell.setPadding(8);
            table.addCell(cell);
        }
    }

    private void addEmptyJuryRow(PdfPTable table) {
        for (int i = 0; i < 4; i++) {
            PdfPCell cell = new PdfPCell(new Phrase("\n", NORMAL_FONT));
            cell.setPadding(10);
            table.addCell(cell);
        }
    }

    private void addCell(PdfPTable table, String text, Font font) {
        PdfPCell cell = new PdfPCell(new Phrase(text, font));
        cell.setPadding(5);
        table.addCell(cell);
    }

    private void addCheckboxLine(Document document, String text) throws DocumentException {
        Paragraph p = new Paragraph("☐  " + text, NORMAL_FONT);
        p.setIndentationLeft(20);
        document.add(p);
    }

    private String formatResult(SoutenanceResult result) {
        return switch (result) {
            case TRES_HONORABLE_AVEC_FELICITATIONS -> "Admis(e) avec mention Très Honorable et Félicitations du Jury";
            case TRES_HONORABLE -> "Admis(e) avec mention Très Honorable";
            case HONORABLE -> "Admis(e) avec mention Honorable";
            case AJOURNE -> "Soutenance ajournée";
        };
    }

    private String nullSafe(String v) {
        return v == null ? "" : v;
    }
}
