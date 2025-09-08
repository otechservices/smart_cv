import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  exportCvAsPdf(cvData: any) {
    const doc = new jsPDF('p', 'pt', 'a4'); // Using points for better control
    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    const margin = 40;
    let yPosition = margin;

    const checkPageBreak = (spaceNeeded: number) => {
      if (yPosition + spaceNeeded > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
    };

    // --- Header ---
    if (cvData.personalInfo) {
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text(cvData.personalInfo.name || '', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 25;

      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(80, 80, 80);
      doc.text(cvData.personalInfo.jobTitle || '', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 20;

      doc.setFontSize(10);
      const contactInfo = [
        cvData.personalInfo.email,
        cvData.personalInfo.phone,
        cvData.personalInfo.address
      ].filter(Boolean).join('  •  ');
      doc.text(contactInfo, pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 20;
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 20;
    }

    // --- Section Title Helper ---
    const renderSectionTitle = (title: string) => {
      checkPageBreak(30);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(title.toUpperCase(), margin, yPosition);
      yPosition += 8;
      doc.setDrawColor(50, 50, 50);
      doc.line(margin, yPosition, margin + 40, yPosition);
      yPosition += 15;
    };

    // --- Professional Summary ---
    if (cvData.professionalSummary) {
      renderSectionTitle('Professional Summary');
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      const summaryLines = doc.splitTextToSize(cvData.professionalSummary, pageWidth - margin * 2);
      doc.text(summaryLines, margin, yPosition);
      yPosition += summaryLines.length * 12 + 10;
    }

    // --- Work Experience ---
    if (cvData.experiences && cvData.experiences.length > 0) {
      renderSectionTitle('Work Experience');
      cvData.experiences.forEach((exp: any) => {
        checkPageBreak(40);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(exp.position || '', margin, yPosition);
        doc.setFont('helvetica', 'normal');
        const dateText = `${exp.startDate || ''} - ${exp.endDate || ''}`;
        doc.text(dateText, pageWidth - margin, yPosition, { align: 'right' });
        yPosition += 14;

        doc.setFontSize(11);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(100);
        doc.text(exp.company || '', margin, yPosition);
        yPosition += 16;

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(50);
        const descLines = doc.splitTextToSize(exp.description || '', pageWidth - margin * 2 - 10);
        doc.text(descLines, margin + 10, yPosition);
        yPosition += descLines.length * 12 + 10;
      });
    }

    // --- Education ---
    if (cvData.educations && cvData.educations.length > 0) {
      renderSectionTitle('Education');
      cvData.educations.forEach((edu: any) => {
        checkPageBreak(30);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(edu.degree || '', margin, yPosition);
        yPosition += 14;

        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100);
        doc.text(`${edu.institution || ''} | ${edu.endDate || ''}`, margin, yPosition);
        yPosition += 20;
      });
    }

    // --- Skills & Languages ---
    const halfWidth = (pageWidth / 2) - margin;
    const skillsX = margin;
    const languagesX = margin + halfWidth + 20;
    let skillsY = yPosition;
    let languagesY = yPosition;

    checkPageBreak(40);
    if (cvData.skills && cvData.skills.length > 0) {
      renderSectionTitle('Skills');
      skillsY = yPosition; // Reset Y after title render
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      cvData.skills.forEach((skill: any) => {
        checkPageBreak(12);
        doc.text(`• ${skill.name}`, skillsX, skillsY);
        skillsY += 12;
      });
    }

    // Position languages next to skills
    yPosition = languagesY; // Reset yPosition for the second column
    if (cvData.languages && cvData.languages.length > 0) {
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text('LANGUAGES', languagesX, yPosition);
        yPosition += 8;
        doc.setDrawColor(50, 50, 50);
        doc.line(languagesX, yPosition, languagesX + 40, yPosition);
        yPosition += 15;
        languagesY = yPosition;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      cvData.languages.forEach((lang: any) => {
        checkPageBreak(12);
        doc.text(`${lang.name} (${lang.proficiency})`, languagesX, languagesY);
        languagesY += 12;
      });
    }

    doc.save(`${cvData.personalInfo.name || 'CV'}_${new Date().toISOString().slice(0,10)}.pdf`);
  }
}
