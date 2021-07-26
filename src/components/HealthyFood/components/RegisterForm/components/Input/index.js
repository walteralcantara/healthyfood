import React, { ChangeEvent } from 'react'
import { InputContainer } from './styled'

export default function Input({
  type,
  label,
  error,
  onChange,
  onBlur,
  value,
  maxLength
}) {
  return (
    <InputContainer error={error}>
      <input
        type={type}
        onChange={onChange}
        value={value}
        required

        onBlur={label === 'CEP *' ? onBlur : null}
        maxLength={label === 'CEP *' ? maxLength : null}
        min={type === 'date' ? '1900-01-01' : null}
        max={type === 'date' ? '2021-12-31' : null}
      />
      <span>{label}</span>
    </InputContainer>
  )
}
