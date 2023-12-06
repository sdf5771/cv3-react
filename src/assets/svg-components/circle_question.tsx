import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#747474"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"
    />
    <path fill="#747474" d="M8 11.75a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
    <path
      stroke="#747474"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 9v-.5a1.75 1.75 0 1 0-1.75-1.75"
    />
  </svg>
)
export default SvgComponent
