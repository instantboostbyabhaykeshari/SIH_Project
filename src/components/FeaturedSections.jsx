import React, { useEffect } from "react";
import { Chart as chartjs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./CSS/FeaturedSections.css";

const reports = [
  { title: "Annual Report 2023", date: "January 5, 2023" },
  { title: "Q1 Report 2023", date: "April 10, 2023" },
  { title: "Mid-Year Report 2023", date: "July 20, 2023" },
  { title: "Q3 Report 2023", date: "October 15, 2023" },
];

const FeaturedSections = () => {
  return (
    <section className="featured-sections">
      <div className="recent-reports">
        <h3 style={{ paddingBottom: "15px" }}>Recent Reports</h3>
        <div className="reports-grid">
          {reports.map((report, index) => (
            <div key={index} className="report-card">
              <h4>{report.title}</h4>
              <p>{report.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="performance-summary">
        <Bar
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              {
                label: "Performance (%)",
                data: [60, 86, 75, 95],
                backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
                borderColor: ["#0056b3", "#1e7e34", "#d39e00", "#c82333"],
                borderWidth: 1,
              },
            ],
          }}
          option={{
            responsive: true, // Make the chart responsive
            maintainAspectRatio: false, // Allows chart to resize dynamically
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
              },
            },
          }}
        //   style={{ width: '100%', height: '500px' }} // Adjust the height as needed
        />
      </div>
    </section>
  );
};

export default FeaturedSections;
