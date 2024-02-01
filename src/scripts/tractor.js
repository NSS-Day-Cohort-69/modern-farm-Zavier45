import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

export const plantSeeds = (yearlyPlan) => {
  for (const array of yearlyPlan) {
    for (const string of array) {
      if (string.includes("Asparagus")) {
        addPlant(createAsparagus());
      } else if (string.includes("Potato")) {
        addPlant(createPotato());
      } else if (string.includes("Soybean")) {
        addPlant(createSoybean());
      } else if (string.includes("Corn")) {
        addPlant(createCorn());
      } else if (string.includes("Sunflower")) {
        addPlant(createSunflower());
      } else {
        addPlant(createWheat());
      }
    }
  }
};

//what should be passed in for the 'yearlyPlan' parameter?
//iterate 3 arrays within 1 array
//each should contain 6 objects of vegetables
//randomly?
//export seeds to field.js to be pushed to fields[]
// in main.js, import and invoke plantSeeds, import fields[]
//log out fields[]
