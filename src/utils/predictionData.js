export async function getSubCategoryPredictions(id) {
  const res = await fetch(`https://financetracker-15bx.onrender.com/api/weekly/${id}`);
  const data = await res.json();
  return data;
}
