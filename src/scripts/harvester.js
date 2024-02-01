export const harvestPlants = (plants) => {
  const sellablePlants = [];
  for (const plant of plants) {
    let sellable = plant.output;
    if (plant.type === "Corn") {
      sellable = plant.output * 0.5;
    }
    for (let i = 0; i < sellable; i++) {
      sellablePlants.push(plant);
    }
  }

  return sellablePlants;
};
