const fields = [];
export const addPlant = (seedObject) => {
  if (Array.isArray(seedObject)) {
    for (const seed of seedObject) {
      fields.push(seed);
    }
  } else {
    fields.push(seedObject);
  }
};

export const usePlants = () => {
  return fields.map((field) => ({ ...field }));
};
