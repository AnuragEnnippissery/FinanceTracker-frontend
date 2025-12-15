import { useState } from "react";
//import { Toastify } from "toastify";
import { toast } from "react-toastify";

function InsertTransaction() {
  const [category, setCategory] = useState("");
  const [sub_category, setSubCategory] = useState("");
  const [owner, setOwner] = useState(localStorage.getItem("id") || "");
  const [mode, setMode] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");


  async function HandleClick(e) {
    e.preventDefault(); // Prevent page refresh
    //toast.configure()

    console.log("clicked");

    try {
      const res = await fetch("https://financetracker-15bx.onrender.com/api/payment/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          owner,
          category,
          sub_category,
          mode,
          description,
          amount: Number(amount),
          ...(date && { date }) ,
        }),
      });

      const data = await res.json();
      console.log("Server Response:", data);
      //alert("Transaction added successfully!");
      //toast("Transaction added successfully")
      toast.success("transaction added")
      setCategory("");
      setSubCategory("");
      setMode("");
      setDescription("");
      setAmount("");

    } catch (err) {
      console.error("Error adding transaction:", err);
      //toast("error in adding ")
      toast.error("transaction failed")
    }
  }

  return (
    <div>
      <h1>Add Transaction</h1>

      <form style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Add</h2>

        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ margin: "10px", padding: "8px" }}
        />

        <br />

        <input
          type="text"
          placeholder="subcategory"
          value={sub_category}
          onChange={(e) => setSubCategory(e.target.value)}
          style={{ margin: "10px", padding: "8px" }}
        />

        <br />

        <input
          type="text"
          placeholder="mode"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          style={{ margin: "10px", padding: "8px" }}
        />

        <br />

        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ margin: "10px", padding: "8px" }}
        />

        <br />

        <input
          type="number"
          placeholder="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ margin: "10px", padding: "8px" }}
        />

        <br />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ margin: "10px", padding: "8px" }}
        />
        <br />


        <button onClick={HandleClick} style={{ margin: "10px", padding: "8px" }}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default InsertTransaction;
