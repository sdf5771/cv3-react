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
      stroke="#202020"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 19.25a8.25 8.25 0 1 0 0-16.5 8.25 8.25 0 0 0 0 16.5Z"
    />
    <path
      fill="#202020"
      d="M11 16.156a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375Z"
    />
    <path
      stroke="#202020"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 12.375v-.688a2.406 2.406 0 1 0-2.406-2.406"
    />
  </svg>
)
export default SvgComponent
