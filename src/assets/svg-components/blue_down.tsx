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
      fill="#0066C3"
      d="M7.897.998 4.259 6.83C4.19 6.94 4.097 7 4 7s-.19-.061-.26-.17L.104.997A.792.792 0 0 1 .007.696a.962.962 0 0 1 .02-.339.603.603 0 0 1 .134-.26A.277.277 0 0 1 .363 0h7.274c.072 0 .143.033.202.097.06.063.107.154.135.26a.962.962 0 0 1 .02.339.792.792 0 0 1-.097.302Z"
    />
  </svg>
)
export default SvgComponent
