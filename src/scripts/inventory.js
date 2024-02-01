import { harvestPlants } from "./harvester.js";

export const harvestInventory = () => {
  const inventory = harvestPlants(usePlants());
  let htmlString = `<article class="growth">`;
  for (const type of inventory) {
    htmlString += `<h3>${type.type}</h3>`;
  }

  htmlString += `</article>`;

  console.log(htmlString);
};
