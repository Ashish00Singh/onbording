import React from 'react'
import { Input } from '@/components/ui/input'




interface InputCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;


}
export default function Inputcustom({ label, ...props }: InputCustomProps) {
  return (
    <div>
      <p className='pb-2 ps-1'> {label} </p>
      <Input {...props} />
    </div>
  )
}
