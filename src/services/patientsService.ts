import patientsData from "../../data/patients";
import { Patients, SensitivePatientData, NewPatientEntry } from "../types";
import { v1 as uuid } from "uuid";

const patients: Patients[] = patientsData;

const getPatients = (): Patients[] => {
  return patients;
};

const getSensitivePatientData = (): SensitivePatientData[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const findById = (id: string): Patients | undefined => {
  const entry = patients.find((d) => d.id === id);
  return entry;
};

const addPatient = (entry: NewPatientEntry): Patients => {
  const newPatient = {
    id: uuid().toString(),
    ...entry,
  };

  patientsData.push(newPatient);
  return newPatient;
};

export default { getPatients, getSensitivePatientData, findById, addPatient };
