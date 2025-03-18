import React from 'react'

interface FieldTagProps {
  text: string
}

const FieldTag: React.FC<FieldTagProps> = ({ text }) => {
  return (
    <span className="bg-gray-100 px-3 py-2 rounded-3xl text-center text-sm font-semibold">
      {text}
    </span>
  )
}

export default FieldTag
