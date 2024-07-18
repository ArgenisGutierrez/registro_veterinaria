import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { draftPatient, Patient } from "../types";
import { v4 as uuidv4 } from 'uuid';

type PatientState = {
  patients: Patient[]
  activeId: Patient['id']
  addPatient: (data: draftPatient) => void
  deletePatient: (id: string) => void
  getPatientById: (id: Patient['id']) => void
  updatePatient: (data: draftPatient) => void
}

const createPatient = (data: draftPatient): Patient => {
  return {
    ...data,
    id: uuidv4()
  }
}

export const usePatientStore = create<PatientState>()(
  devtools(
    persist((set) => ({
      patients: [],
      activeId: '',
      addPatient: (data) => {
        const newPatient = createPatient(data)
        set((state) => ({
          patients: [...state.patients, newPatient]
        }))
      },
      deletePatient: (id) => {
        set((state) => ({
          patients: state.patients.filter(patient => patient.id !== id)
        }))
      },
      getPatientById: (id) => {
        set(() => ({
          activeId: id
        }))
      },
      updatePatient: (data) => {
        set((state) => ({
          patients: state.patients.map(patient => patient.id === state.activeId ? { id: state.activeId, ...data } : patient),
          activeId: ''
        }))
      }
    }), {
      name: 'patient-storage'
      // storage: createJSONStorage(()=>sessionStorage)
    })
  ))
