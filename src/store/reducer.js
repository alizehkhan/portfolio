import {
  SET_SELECTED_FILTER,
  SET_HIKING_GEAR,
  INCREMENT_OPENED_INDEX,
  DECREMENT_OPENED_INDEX,
  SET_OPENED_INDEX,
} from "./constants";

const initialState = {
  gearById: {},
  favouriteGearIds: [],
  selectedFilter: undefined,
  fetched: false,
  openedIndex: "",
};

const reducer = (state = initialState, action) => {
  switch (action?.type) {
    case SET_HIKING_GEAR:
      const normalisedData = action.payload.records.reduce(
        (accumulator, gear) => {
          accumulator[gear.id] = { ...gear.fields, id: gear.id };
          return accumulator;
        },
        {}
      );
      return {
        ...state,
        gearById: normalisedData,
        fetched: true,
      };
    case SET_SELECTED_FILTER:
      return { ...state, selectedFilter: action.payload };
    case SET_OPENED_INDEX:
      return { ...state, openedIndex: action.payload };
    case INCREMENT_OPENED_INDEX:
      return { ...state, openedIndex: state.openedIndex + 1 };
    case DECREMENT_OPENED_INDEX:
      return { ...state, openedIndex: state.openedIndex - 1 };
    default:
      return state;
  }
};

export default reducer;
