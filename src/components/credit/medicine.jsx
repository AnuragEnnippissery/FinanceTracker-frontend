import { useState, useEffect } from "react";
import { useGetSubCategory } from "../../utils/transactionData";
import './dairy.css'

function Medicine() {
    const id = localStorage.getItem("id");
    const subCategory = "medicine";
    const categoryData = useGetSubCategory(id, subCategory);

    if (!categoryData) return <div>Loading...</div>;

    return (
        <>
            <div className="dairy-container">
                <h2 className="title">Medicine Transaction</h2>

                <table className="modern-table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Mode</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {categoryData.map((elem, index) => (
                            <tr key={index}>
                                <td  data-label="Description">{elem.description}</td>
                                <td  data-label="Amount">{elem.amount}</td>
                                <td  data-label="Mode">{elem.mode}</td>
                                <td data-label="Date">
                                    {new Date(elem.date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default Medicine;
