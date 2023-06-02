import { getFilterdHikingGear } from "./utils";

describe("getFilterdHikingGear", () => {
  test("should return an array of hiking gear filtered by category", () => {
    const gearById = {
      4: {
        Name: "Sleeping mat",
        Brand: "REI",
        id: 4,
        Category: "Sleep",
      },
      5: {
        Name: "Sleeping bag",
        Brand: "The North Face",
        id: 5,
        Category: "On the trail",
      },
      6: {
        Name: "Map",
        Brand: "Nike",
        id: 6,
        Category: "Sleep",
      },
    };
    const output = [
      {
        Name: "Sleeping mat",
        Brand: "REI",
        id: 4,
        Category: "Sleep",
      },
      {
        Name: "Map",
        Brand: "Nike",
        id: 6,
        Category: "Sleep",
      },
    ];

    expect(getFilterdHikingGear(gearById, "Sleep")).toEqual(output);
  });

  test("should return array of all gear if no selectedFilter is passed", () => {
    const gearById = {
      4: {
        Name: "Sleeping mat",
        Brand: "REI",
        id: 4,
        Category: "Sleep",
      },
      5: {
        Name: "Sleeping bag",
        Brand: "The North Face",
        id: 5,
        Category: "On the trail",
      },
      6: {
        Name: "Map",
        Brand: "Nike",
        id: 6,
        Category: "Sleep",
      },
    };
    const output = [
      {
        Name: "Sleeping mat",
        Brand: "REI",
        id: 4,
        Category: "Sleep",
      },
      {
        Name: "Sleeping bag",
        Brand: "The North Face",
        id: 5,
        Category: "On the trail",
      },
      {
        Name: "Map",
        Brand: "Nike",
        id: 6,
        Category: "Sleep",
      },
    ];

    expect(getFilterdHikingGear(gearById, undefined)).toEqual(output);
  });
});
