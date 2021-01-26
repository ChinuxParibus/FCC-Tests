function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const orbitalPeriod = distance => Math.round(2 * Math.PI * (Math.sqrt((earthRadius + distance) ** 3 / GM)))

  const results = arr.map((body) => ({name: body.name, orbitalPeriod: orbitalPeriod(body.avgAlt)}))

  return results
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
