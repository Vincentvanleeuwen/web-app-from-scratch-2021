// Fetch the database URLs
export const fetchData = (endPoints, options) => {
  const allEndpoints = endPoints.map(endPoint => fetch(endPoint, options));
  return Promise.all(allEndpoints);
};
