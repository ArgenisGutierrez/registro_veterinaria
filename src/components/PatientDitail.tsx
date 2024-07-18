import { Patient } from "../types"
import { toast } from "react-toastify"
import { PatientDetailItem } from "./PatientDitailItem"
import { usePatientStore } from "../store/store"

type PatientDetailProps = {
  patient: Patient
}

export function PatientDetail({ patient }: PatientDetailProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient)
  const getPatientById = usePatientStore((state) => state.getPatientById)
  const handleDelete = () => {
    deletePatient(patient.id)
    toast.error('Paciente eliminado con exito')
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" value={patient.id} />
      <PatientDetailItem label="Nombre" value={patient.name} />
      <PatientDetailItem label="Propietario" value={patient.caretaker} />
      <PatientDetailItem label="Email" value={patient.email} />
      <PatientDetailItem label="Fecha" value={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" value={patient.symptoms} />
      <div className="flex justify-between gap-1 mt-10 flex-col lg:flex-row">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
          onClick={() => getPatientById(patient.id)}>
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
          onClick={() => handleDelete()}>
          Eliminar
        </button>
      </div>
    </div>
  )
}
