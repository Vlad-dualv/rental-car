import axios from "axios";
import { fetchError, fetchInProgress, fetchSuccess } from "./slice";

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const fetchCars = () => async (dispatch) => {
  try {
    dispatch(fetchInProgress());
    const response = await axios.get("/cars");
    dispatch(fetchSuccess());
  } catch (error) {
    alert(error);
    dispatch(fetchError(error.message));
  }
};
