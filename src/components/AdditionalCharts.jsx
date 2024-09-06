import React from "react";
import { Pie, Line } from "react-chartjs-2";
// import { useNavigate } from "react-router-dom"; // Corrected import
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./CSS/AdditionalCharts.css";

// Register necessary components
ChartJS.register(
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const AdditionalCharts = () => {
  // Data for Completion Status Pie Chart
  const completionData = {
    labels: ["Completed", "Pending", "In Progress"],
    datasets: [
      {
        data: [39, 66, 47],
        backgroundColor: ["#28a745", "#ffc107", "#007bff"],
      },
    ],
  };

  // Data for Submission Trends Line Chart
  const submissionData = {
    labels: ["January", "April", "July", "October"],
    datasets: [
      {
        label: "Submissions",
        data: [65, 73, 30, 22],
        borderColor: "#007bff",
        fill: false,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <section className="additional-charts">
      <div className="completion-status">
        <h3 style={{ margin: "10px" }}>Completion Status</h3>
        <div className="Data-Interpretation">
          <div
            className="pie-chart"
            style={{ width: "300px", height: "300px" }}
          >
            <Pie data={completionData} options={pieOptions} />
          </div>
          <div className="pieChart-description">
            <h1 style={{margin: "10px 0" }}>Student Data</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore nobis, pariatur laudantium iste ad mollitia. Incidunt
              animi esse voluptatibus harum similique fugit facilis unde
              dolorem, doloribus rerum eius necessitatibus nulla exercitationem
              nobis recusandae, eveniet velit voluptatum nam porro ab nostrum
              corporis, vel minus? Nostrum, blanditiis voluptate! Saepe ut hic
              qui facilis consequuntur eligendi maiores architecto, beatae
              explicabo dolores repellat, esse numquam inventore perferendis
              quos amet quasi officia quo sapiente aliquid consequatur
              laudantium sunt? Laudantium eveniet, error ex doloribus deserunt
              esse quidem dicta illum iste maxime modi mollitia. Amet, nemo quae
              ullam culpa quia aliquid dolorum? Tenetur qui similique fugit vel.
            </p>
          </div>
        </div>
      </div>
      <div className="submission-trends">
        <h3 style={{ margin: "10px" }}>Submission Trends</h3>
        <div>
          <div className="Student-graph">
            <div style={{ width: "400px", height: "400px" }}>
              <Line data={submissionData} options={lineOptions} />
            </div>
            <div className="Student-Submission">
              <h2 style={{ margin: "10px 0" }}>Student-Submission</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                adipisci delectus itaque explicabo id quasi voluptates
                aspernatur ullam maiores blanditiis hic, voluptatibus dolorem
                facilis beatae expedita voluptas reprehenderit tempore sint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalCharts;
