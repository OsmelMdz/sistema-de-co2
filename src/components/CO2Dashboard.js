import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './CO2Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CO2Dashboard() {
    const [co2Data, setCo2Data] = useState([]);
    const [timestamps, setTimestamps] = useState([]);
    const [latestCO2, setLatestCO2] = useState(null);

    const formatTime = (timestamp) => {
        const [datePart, timePartWithPeriod] = timestamp.split(", ");
        const [day, month, year] = datePart.split("/");
        const [timePart, period] = timePartWithPeriod.split(" ");
        let [hours, minutes] = timePart.split(":");
        if (period.toLowerCase() === "p.m." && hours !== "12") {
            hours = parseInt(hours) + 12;
        } else if (period.toLowerCase() === "a.m." && hours === "12") {
            hours = "00";
        }
        const isoDate = `20${year}-${month}-${day}T${hours}:${minutes}:00`;
        const date = new Date(isoDate);
        if (isNaN(date)) {
            console.error("Fecha no válida:", timestamp);
            return "Invalid Date";
        }
        return date.toLocaleTimeString('es-MX', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://co2-api.vercel.app/api/co2");
                const { co2, timestamp } = response.data;

                console.log("Nuevo dato recibido:", { timestamp, co2 });

                setLatestCO2(co2);
                setCo2Data((prevData) => {
                    const newData = [...prevData, co2];
                    if (newData.length > 10) newData.shift();
                    return newData;
                });

                setTimestamps((prevTimestamps) => {
                    const newTimestamps = [...prevTimestamps, formatTime(timestamp)];
                    if (newTimestamps.length > 10) newTimestamps.shift();
                    return newTimestamps;
                });
            } catch (error) {
                console.error("Error fetching CO2 data:", error);
            }
        };

        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const data = {
        labels: timestamps,
        datasets: [
            {
                label: "Niveles de CO2 (ppm)",
                data: co2Data,
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,0.2)",
            },
        ],
    };

    return (
        <div className="dashboard">
            <h2>Medición en Tiempo Real</h2>
            <h1>{latestCO2 ? `${latestCO2} ppm` : "Cargando..."}</h1>
            <div className="chart-container">
                <Line data={data} options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: { ticks: { color: "#555" }, title: { display: true, text: 'Tiempo' } },
                        y: { ticks: { color: "#555" }, title: { display: true, text: 'CO2 (ppm)' } },
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: (context) => `${context.parsed.y} ppm`
                            }
                        }
                    }
                }} />
            </div>
        </div>
    );
}

export default CO2Dashboard;
