import { useState,useEffect } from "react";
//code to fetch transaction summary for different user
export function useGetSummary(id) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        const res = await fetch(`http://localhost:3000/api/payment/user/summary/${id}`);
        const json = await res.json();
        console.log("api data",json)
        setItem(json);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }

    if (id) fetchItem();
  }, [id]);

  return item;
}

