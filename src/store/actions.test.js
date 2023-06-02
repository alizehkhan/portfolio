import { setSelectedFilter, setHikingGear, setOpenedIndex } from "./actions";
import {
  SET_SELECTED_FILTER,
  SET_HIKING_GEAR,
  SET_OPENED_INDEX,
} from "./constants";

describe("setSelectedFilter", () => {
  it("should return the action for setting selected filter", () => {
    const output = {
      type: SET_SELECTED_FILTER,
      payload: "On the trail",
    };
    expect(setSelectedFilter("On the trail")).toEqual(output);
  });
});

describe("setOpenedIndex", () => {
  it("should return the action for setting opened index", () => {
    const output = {
      type: SET_OPENED_INDEX,
      payload: 1,
    };
    expect(setOpenedIndex(1)).toEqual(output);
  });
});

describe("setHikingGear", () => {
  it("should return the action for setting hiking gear", () => {
    const input = {
      id: 1,
      name: "Backpack",
      price: 35,
    };
    const output = {
      type: SET_HIKING_GEAR,
      payload: input,
    };
    expect(setHikingGear(input)).toEqual(output);
  });
});
