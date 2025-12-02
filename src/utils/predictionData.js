export async function getSubCategoryPredictions(id) {
  const res = await fetch(`http://localhost:3000/api/weekly/${id}`);
  const data = await res.json();
  return data;
}
