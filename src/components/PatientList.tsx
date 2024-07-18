import { usePatientStore } from "../store/store"
import { PatientDetail } from "./PatientDitail"
export function PatientList() {
  const patients = usePatientStore((state) => state.patients)
  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Lista de Pacientes</h2>
          <p className="text-xl  mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600">Pacientes y Citas</span>
          </p>
          {patients.map(patient => ((
            <PatientDetail
              key={patient.id}
              patient={patient}
            />
          )))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-xl  mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600">y apareceran en esta lista</span>
          </p>
        </>
      )}
    </div>
  )
}
