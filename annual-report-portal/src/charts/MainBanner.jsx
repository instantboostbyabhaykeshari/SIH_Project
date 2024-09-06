import React from 'react';
import './CSS/MainBanner.css';

const MainBanner = () => {
    const generatePDF = () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.text("Annual Report 2024", 20, 20);
        doc.text("Summary of Activities", 20, 40);

        // Add dynamic content (e.g., charts, tables, etc.)
        doc.text("Performance Summary: 85%", 20, 60);
        doc.text("Reports Submitted: 22", 20, 80);

        doc.save("Annual_Report_2024.pdf");
    }

    const generateHTML = () => {
        const reportWindow = window.open('', '_blank');
        reportWindow.document.write('<html><head><title>Annual Report 2024</title></head><body>');
        reportWindow.document.write('<h1>Annual Report 2024</h1>');
        reportWindow.document.write('<p>Summary of Activities</p>');

        // Add dynamic content (e.g., charts, tables, etc.)
        reportWindow.document.write('<p>Performance Summary: 85%</p>');
        reportWindow.document.write('<p>Reports Submitted: 22</p>');

        reportWindow.document.write('</body></html>');
        reportWindow.document.close();
    }

    return (
        <main className="main-banner">
            <h2>Welcome to the Annual Report Portal</h2>
            <div className="quick-links">
                <button onClick={() => window.location.href = '/create-report.html'}>Create New Report</button>
                <button onClick={generatePDF}>Generate PDF Report</button>
                <button onClick={generateHTML}>Generate HTML Report</button>
            </div>
        </main>
    );
};

export default MainBanner;
