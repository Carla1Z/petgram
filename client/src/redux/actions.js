import axios from "axios";
import { PRUEBA } from "./type.js";

export const prueba = () => {
  return {
    type: PRUEBA,
    payload: "prueba",
  };
};
