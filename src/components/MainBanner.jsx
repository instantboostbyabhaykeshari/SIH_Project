import React, { useState, useEffect } from "react";
import "./CSS/MainBanner.css";

const MainBanner = () => {
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  const handleDashboardClick = () => {
    setIsDashboardVisible(true);
  };

  const closeDashboard = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsDashboardVisible(false);
      setIsExiting(false);
    }, 200); // Match the duration of the exit animation
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleOkButtonClick = () => {
    if (isChecked) {
      window.open("https://www.example.com", "_blank"); // Opens new page
    }
  };

  useEffect(() => {
    if (isDashboardVisible) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Enable scroll
    }

    return () => {
      document.body.style.overflow = ""; // Clean up scroll lock when the component unmounts
    };
  }, [isDashboardVisible]);

  const generatePDF = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Annual Report 2024", 20, 20);
    doc.text("Summary of Activities", 20, 40);

    // Add dynamic content (e.g., charts, tables, etc.)
    doc.text("Performance Summary: 85%", 20, 60);
    doc.text("Reports Submitted: 22", 20, 80);

    doc.save("Annual_Report_2024.pdf");
  };

  const generateHTML = () => {
    const reportWindow = window.open("", "_blank");
    reportWindow.document.write(
      "<html><head><title>Annual Report 2024</title></head><body>"
    );
    reportWindow.document.write("<h1>Annual Report 2024</h1>");
    reportWindow.document.write("<p>Summary of Activities</p>");

    // Add dynamic content (e.g., charts, tables, etc.)
    reportWindow.document.write("<p>Performance Summary: 85%</p>");
    reportWindow.document.write("<p>Reports Submitted: 22</p>");

    reportWindow.document.write("</body></html>");
    reportWindow.document.close();
  };

  return (
    <main className="main-banner">
      <h2>Welcome to the Annual Report Portal</h2>
      <div className="quick-links">
        <button
        className="button"
          onClick={handleDashboardClick}
          style={{ position: "relative", cursor: "pointer" }}
        >
          Data entry
        </button>
        {/* Conditionally render the hover box */}
        {isDashboardVisible && (
          <>
            <div className="overlay"></div> {/* Background overlay */}
            <div className={`hover-box ${isExiting ? 'exit' : ''}`}>
              <button className="close-btn" onClick={closeDashboard}>
                &times;
              </button>
              <h2>Terms and Condition</h2>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tenetur numquam quisquam beatae nesciunt amet placeat.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsam eum accusamus nemo exercitationem.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure incidunt rem praesentium vero odio ullam pariatur sit laborum aspernatur veniam?</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut totam ipsum sequi distinctio ab non aut ullam aliquam rerum laboriosam.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti recusandae iste corrupti aspernatur sit omnis maxime error tempor.</li>
                
              </ul>
              <div className="checkBox-button">
                <input type="checkbox" id="agree" name="agree" onChange={handleCheckboxChange}/>
                <label htmlFor="agree" style={{fontWeight: "bold"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quo dolores omnis doloremque velit perspiciatis facilis sunt dicta</label>
              </div>
                <button
                   className="okButton"
                   onClick={handleOkButtonClick}
                   disabled={!isChecked} // Disable the button if checkbox isn't checked
                >OK</button>
            </div>
          </>
        )}

        <button
        className="button" onClick={generatePDF}>Generate PDF Report</button>
        <button
        className="button" onClick={generateHTML}>Generate HTML Report</button>
      </div>
    </main>
  );
};

export default MainBanner;
