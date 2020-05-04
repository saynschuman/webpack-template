import { Record } from "immutable";

export const GET_CURRENT_WEATHER = "GET_CURRENT_WEATHER";

const ReducerRecord = Record({
  loading: false,
  loaded: false,
  currentWeather: null,
});

export default (state = new ReducerRecord(), action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER + "_START":
      return state.set("loaded", false).set("loading", true);
    case GET_CURRENT_WEATHER + "_SUCCESS":
      return state
        .set("loading", false)
        .set("loaded", true)
        .set("currentWeather", action.payload);
    case GET_CURRENT_WEATHER + "_ERROR":
      return state.set("loading", false).set("loaded", false);
    default:
      return state;
  }
};