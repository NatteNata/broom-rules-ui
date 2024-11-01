import { useGenerateId } from '../../utils/useGenerateId'

type CommonProps = {
  id?: string
  label?: string
  name?: string
  type: string
}

const Input = ({ id, label, name, type }: CommonProps) => {
  const ID = useGenerateId(id)

  return (
    <div>
      <label htmlFor={'ID'}>{label}</label>
      <input id={ID} name={name} type={type}></input>
    </div>
  )
}

export default Input
