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
      fill="#EF673A"
      d="M7.897 6.002 4.259.17C4.19.06 4.097 0 4 0s-.19.061-.26.17L.104 6.003a.792.792 0 0 0-.096.302.962.962 0 0 0 .02.339.603.603 0 0 0 .134.26C.22 6.967.29 7 .363 7h7.274a.277.277 0 0 0 .202-.097.603.603 0 0 0 .135-.26.962.962 0 0 0 .02-.339.792.792 0 0 0-.097-.302Z"
    />
  </svg>
)
export default SvgComponent
