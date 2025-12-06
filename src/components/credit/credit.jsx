import { Link } from "react-router-dom";
import "./credit.css";
import { useGetSummary } from "../../utils/transactionData";

// Chart JS
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function Credit() {
    const id = localStorage.getItem("id");

    const summary = useGetSummary(id);
    const username =localStorage.getItem("username");

    if (!summary) return <div>Loading...</div>;

    const categories = [
        "dairy",
        "vegetable",
        "grocery",
        "medicine",
        "shopping",
        "bills"
    ];

    // Create map: category -> amount
    const summaryMap = summary.reduce((acc, item) => {
        acc[item._id] = item.totalAmount;
        return acc;
    }, {});

    // 1️⃣ Total spent
    const totalAmountSpent = summary.reduce((sum, item) => sum + item.totalAmount, 0);

    //capitilize function
    const capitalize = (str) =>
        str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

    // 2️⃣ Bar chart data (dynamic)
   const barData = {
    labels: categories.map(
        (c) => c.charAt(0).toUpperCase() + c.slice(1)
    ),
    datasets: [
        {
            label: "Amount Spent (₹)",
            data: categories.map((cat) => summaryMap[cat] || 0),

            // 🎨 Multiple colors (one per bar)
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",   // dairy
                "rgba(54, 162, 235, 0.6)",   // vegetable
                "rgba(255, 206, 86, 0.6)",   // grocery
                "rgba(75, 192, 192, 0.6)",   // medicine
                "rgba(153, 102, 255, 0.6)",  // shopping
                "rgba(255, 159, 64, 0.6)"    // bills
            ],

            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
            ],

            borderWidth: 1
        },
    ],
};


    return (
        <>
            <h3 className="title">Welcome to your financial dashboard  {capitalize(username)} !!</h3>

            {/* TOTAL AMOUNT */}
            <h4 className="title"> Total Amount Spent: ₹ {totalAmountSpent}</h4>

            {/* CATEGORY CARDS */}
            <div className="dashboard">
                {categories.map((cat) => (
                    <Link key={cat} to={`/credit/${cat}`}>
                        <div className="title">
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </div>
                        <div className="amount">₹{summaryMap[cat] || 0}</div>
                    </Link>
                ))}
            </div>

            {/* BAR GRAPH */}
            <div style={{ width: "80%", margin: "50px auto" }}>
                <h3>Analytic Bar Graph</h3>
                <Bar data={barData} />
            </div>
        </>
    );
}

export default Credit;
