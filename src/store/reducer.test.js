import { SET_SELECTED_FILTER, SET_HIKING_GEAR } from "./constants";
import reducer from "./reducer";

it("should return state when no parameters are passed", () => {
  const initialState = {
    gearById: {},
    selectedFilter: "",
    fetched: false,
    openedIndex: "",
  };

  expect(reducer()).toEqual(initialState);
});

it("should set the selected filter", () => {
  const action = {
    type: SET_SELECTED_FILTER,
    payload: "Sleep",
  };
  const output = {
    gearById: {},
    selectedFilter: "Sleep",
    fetched: false,
    openedIndex: "",
  };

  expect(reducer(undefined, action)).toEqual(output);
});

it("should set hiking gear", () => {
  const hikingGear = {
    records: [
      {
        id: 4,
        fields: {
          Name: "Sleeping bag",
          Brand: "Nike",
        },
      },
    ],
  };
  const action = {
    type: SET_HIKING_GEAR,
    payload: hikingGear,
  };
  const output = {
    gearById: {
      4: {
        Name: "Sleeping bag",
        Brand: "Nike",
        id: 4,
      },
    },
    selectedFilter: "",
    fetched: true,
    openedIndex: "",
  };

  expect(reducer(undefined, action)).toEqual(output);
});
