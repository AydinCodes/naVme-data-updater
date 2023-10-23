// function calculateBoundingBox(centerLat: number, centerLng: number, radiusKm: number) {
//     const earthRadiusKm = 6371; // Earth's radius in kilometers
//     const radianFactor = Math.PI / 180; // Conversion factor from degrees to radians
  
//     const latRadian = centerLat * radianFactor;
  
//     // Calculate the latitude and longitude deltas
//     const latDelta = (radiusKm / earthRadiusKm) / Math.cos(latRadian);
//     const lngDelta = (radiusKm / earthRadiusKm);
  
//     // Calculate the bounding box coordinates
//     const north = centerLat + latDelta;
//     const south = centerLat - latDelta;
//     const east = centerLng + lngDelta;
//     const west = centerLng - lngDelta;
  
//     return {
//       north,
//       south,
//       east,
//       west,
//     };
//   }
  
//   // Example usage:
//   const centerLat = -33.8679; // Center latitude
//   const centerLng = 151.2093; // Center longitude
//   const radiusKm = 100; // Radius in kilometers
  
//   const boundingBox = calculateBoundingBox(centerLat, centerLng, radiusKm);
//   console.log(boundingBox);
  
//   // The 'boundingBox' object will contain the north, south, east, and west coordinates of the bounding box.
  


const countries = {
    "Australia": "au",
    "United States": "usa"
}

console.log(countries["Australia"])