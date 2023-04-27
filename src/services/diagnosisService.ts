import diagnoses from "../../data/entries";
import { Diagnoses } from "../types";

const getDiagnoses = (): Diagnoses[] => {
  return diagnoses;
};

export default {
  getDiagnoses,
};
