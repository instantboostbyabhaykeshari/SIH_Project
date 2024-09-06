import React, { useEffect } from 'react';
// import Chart from 'chart.js/auto';

const AdditionalCharts = () => {
    useEffect(() => {
        // Initialize completion status pie chart
        const completionCtx = document.getElementById('completionPieChart').getContext('2d');
        new Chart(completionCtx, {
            type: 'pie',
            data: {
                labels: ['Completed', 'Pending', 'In Progress'],
                datasets: [{
                    data: [60, 25, 15],
                    backgroundColor: ['#28a745', '#ffc107', '#007bff']
                }]
            }
        });

        // Initialize submission trends line chart
        const submissionCtx = document.getElementById('submissionLineChart').getContext('2d');
        new Chart(submissionCtx, {
            type: 'line',
            data: {
                labels: ['January', 'April', 'July', 'October'],
                datasets: [{
                    label: 'Submissions',
                    data: [15, 25, 30, 22],
                    borderColor: '#007bff',
                    fill: false
                }]
            }
        });
    }, []);

    return (
        <section className="additional-charts">
            <div className="completion-status">
                <h3>Completion Status</h3>
                <canvas id="completionPieChart"></canvas>
            </div>
            <div className="submission-trends">
                <h3>Submission Trends</h3>
                <canvas id="submissionLineChart"></canvas>
            </div>
        </section>
    );
};

export default AdditionalCharts;
