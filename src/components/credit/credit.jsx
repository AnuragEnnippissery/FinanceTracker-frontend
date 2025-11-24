import { Link } from "react-router-dom";
import "./credit.css";
import { useGetSummary } from "../../utils/transactionData";

function Credit() {
    const id = localStorage.getItem("id");
    const summary = useGetSummary(id);

    console.log("summary data", summary);

    // ⛔ IMPORTANT: Prevent reduce crash
    if (!summary) return <div>Loading...</div>;

    const categories = [
        "dairy",
        "vegetable",
        "grocery",
        "medicine",
        "shopping",
        "bills"
    ];

    // Now safe to reduce because summary is NOT null
    const summaryMap = summary.reduce((acc, item) => {
        acc[item._id] = item.totalAmount;
        return acc;
    }, {});

    return (
        <>
            <h3>Welcome to your financial dashboard</h3>

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
        </>
    );
}

export default Credit;
