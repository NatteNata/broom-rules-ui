import { TornadoIcon } from 'lucide-react'

export const Logo = () => {
  return (
    <div className={'flex justify-items-start'}>
      <LogoIcon />
      <LogoName />
    </div>
  )
}

const LogoIcon = () => {
  return <TornadoIcon className={'stroke-white size-10'} />
}

const LogoName = () => {
  return <span className={'text-white text-3xl font-bold'}>tornata</span>
}
