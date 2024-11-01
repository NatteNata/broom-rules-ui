import { type Ref, type SVGProps, forwardRef, memo } from 'react'
const SvgClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'm13.41 12 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l4.29-4.3 4.29 4.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgClose)
const Memo = memo(ForwardRef)

export default Memo
