import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M3 10h18l-7.492 9.094v4.906l-3.016-2v-2.906l-7.492-9.094zm9.251 1h-.502v.533c-.978.134-1.501.744-1.501 1.425 0 1.219 1.432 1.405 1.9 1.622.638.284.52.875-.058 1.005-.501.113-1.14-.084-1.621-.27l-.229.822c.45.231.988.355 1.509.364v.499h.502v-.527c.833-.116 1.51-.573 1.509-1.432 0-1.072-1.122-1.371-1.983-1.773-.522-.27-.456-.914.292-.958.416-.025.843.098 1.229.233l.181-.824c-.455-.138-.864-.201-1.228-.21v-.509zm-9.25-2h3.376c-.016-3.659 1.685-2.068 1.685-4.979 0-1.124-.737-1.734-1.686-1.734-1.402 0-2.377 1.333-1.05 3.826.436.819-.465 1.013-1.432 1.236-.839.192-.894.6-.894 1.306l.001.345zm17.105-1.651c-.968-.223-1.868-.417-1.432-1.236 1.327-2.493.352-3.826-1.05-3.826-.948 0-1.686.61-1.686 1.734 0 2.911 1.701 1.32 1.685 4.979h3.375l.002-.345c0-.706-.055-1.114-.894-1.306zm-3.608 1.651h-8.997l-.001-.465c0-.938.075-1.48 1.191-1.737 1.263-.29 2.508-.549 1.909-1.647-1.775-3.255-.506-5.101 1.399-5.101 1.868 0 3.17 1.777 1.4 5.101-.582 1.092.619 1.351 1.908 1.647 1.118.257 1.192.8 1.192 1.74l-.001.462z"/>

    </Svg>
  );
};

export default Icon;