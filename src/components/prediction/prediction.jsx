import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { getSubCategoryPredictions } from "../../utils/predictionData";
import "./prediction.css"; // IMPORTANT

const COLORS = ["#FF6B6B", "#4ECDC4", "#A29BFE", "#FDCB6E", "#00B894", "#E17055"];

function PredictionPage() {
  const [data, setData] = useState(null);
  const id = localStorage.getItem("id");

  useEffect(() => {
    async function fetchPrediction() {
      const res = await getSubCategoryPredictions(id);
      setData(res);
    }
    fetchPrediction();
  }, [id]);

  if (!data) return <div className="loading">Loading predictions...</div>;

  return (
    <div className="prediction-page">
      <h2 className="page-title">Weekly Expense Prediction</h2>

      {/* Table Section */}
      <div className="card">
        <h3 className="card-title">Prediction Summary</h3>

        <table className="prediction-table">
          <thead>
            <tr>
              <th>Subcategory</th>
              <th>Total Spent</th>
              <th>Weekly Average</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td className="capitalize">{item.sub_category}</td>
                <td>₹{item.totalSpent}</td>
                <td>₹{item.averageWeekly.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart Section */}
      <div className="card">
        <h3 className="card-title">Weekly Average Chart</h3>

        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sub_category" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="averageWeekly" isAnimationActive={true}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default PredictionPage;
