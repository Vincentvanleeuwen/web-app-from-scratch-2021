// Fetch the database URLs
export async function fetchData(endPoint, options) {
  console.log('endPoint =', endPoint);
  const response = await fetch(endPoint, options);
  return await response.json()
}
