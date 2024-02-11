export default function calculateCenter(points) {
  let totalLat = 0;
  let totalLong = 0;

  for (let i = 0; i < points.length; i++) {
    totalLat += points[i][0];
    totalLong += points[i][1];
  }

  const centerLat = totalLat / points.length;
  const centerLong = totalLong / points.length;

  return [centerLat, centerLong];
}
