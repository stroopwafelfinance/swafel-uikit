import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M18.892 6.005c-.698 6.474-4.58 10.865-6.892 12.945-2.312-2.08-6.193-6.47-6.892-12.945 2.111-1.236 4.71-2.005 6.892-2.005s4.781.769 6.892 2.005zm4.108-2.005c0 8.578-5.071 16.1-11 20-5.929-3.9-11-11.422-11-20 2.828-2.329 7.162-4 11-4 3.847 0 8.172 1.671 11 4zm-2.023.971c-2.544-1.8-6.035-2.971-8.977-2.971s-6.433 1.171-8.977 2.971c.356 7.492 4.783 13.384 8.977 16.578 4.194-3.194 8.621-9.086 8.977-16.578z"/>
    </Svg>
  );
};

export default Icon;