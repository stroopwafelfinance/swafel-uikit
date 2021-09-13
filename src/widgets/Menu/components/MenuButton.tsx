import styled from "styled-components";
import Button from "../../../components/Button/Button";
import {BrowserView, MobileView} from 'react-device-detect';


const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0px 8px;
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
