const tours = [
  {
    name: "winter",
    label: "Zakopane in Winter",
  },
  {
    name: "thermal",
    label: "Thermal Baths in Zakopane",
  },
  {
    name: "lake",
    label: "Morskie Oko",
  },
  {
    name: "karpacz",
    label: "Mountain Hiking in Karpacz",
  },
];

module.exports = (router) => {
  router.get("/tours", (req, res, next) => {
    res.send(tours);
  });
};
