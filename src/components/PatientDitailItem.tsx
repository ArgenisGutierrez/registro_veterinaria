type detailItemProps = {
  label: string
  value: string
}

export function PatientDetailItem({ label, value }: detailItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">{label}: {''}
      <span className="font-normal normal-case">{value}</span>
    </p>
  )
}
