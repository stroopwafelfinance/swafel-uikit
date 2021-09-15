import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
<path data-name="layer2"
  d="M59 60h-2V20h-8v40h-6V30h-8v30h-6V40h-8v20h-6V50H7v10H5a2 2 0 0 0 0 4h54a2 2 0 0 0 0-4z"
  fill="#EC9333"></path>
  <path data-name="layer1" d="M8 44a2 2 0 0 0 1.2-.4L53.6 8.5l-.5 5.3a2 2 0 0 0 1.8 2.2h.2a2 2 0 0 0 2-1.8l1.1-11.8L46.4 0a2 2 0 1 0-.8 4l5.8 1.2L6.8 40.4A2 2 0 0 0 8 44z"
  fill="#EC9333"></path>  </Svg>
  );
};

export default Icon;
