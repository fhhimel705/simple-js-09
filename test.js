let racers = [
  { id: 1, breed: "dragon", origin: "eurOpe" },
  { id: 2, breed: "army", origin: "asia" },
  { id: 3, breed: "checker", origin: "Europe" },
  { id: 4, breed: "homer", origin: "asia" },
  { id: 5, breed: "mili", origin: "europE" },
];

function originEurope(racers, search) {
  let europeRacer = [];
  for (let racer of racers) {
    if (racer.origin.toLowerCase().includes(search.toLowerCase())) {
      europeRacer.push(racer);
    }
  }
  return europeRacer;
}
console.log(originEurope(racers, "EUroPe"));
