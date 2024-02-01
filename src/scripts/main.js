import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { harvestInventory } from "./inventory.js";
import { harvestPlants } from "./harvester.js";

plantSeeds(createPlan());
harvestInventory(harvestPlants());

const growHTMLElement = document.querySelector(".growth");
growHTMLElement.innerHTML += inventory;
