import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import {
  HamburgerIcon,
  HamburgerCloseIcon,
  LogoIcon as LogoWithText,
} from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const StyledImage = styled.img`
  height: 100%;
`;

const StyledFlex = styled(Flex)`
  display: flex;
  align-items: center;
`;

const StyledImage2 = styled.img`
  height: 32px;
  width: 32px;
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <StyledImage
        className="desktop-icon"
        src={`/images/logoWithText.png`}
        width={156}
      />
      <StyledImage2 className="mobile-icon" src={`/images/swafel.png`} />
    </>
  );

  return (
    <StyledFlex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="0px">
        {" "}
        &nbsp;
        {isPushed ? (
          <HamburgerCloseIcon width="36px" color="text" />
        ) : (
          <HamburgerIcon width="36px" color="text" />
        )}
      </MenuButton>{" "}
      &nbsp;&nbsp;&nbsp;
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </StyledFlex>
  );
};

export default React.memo(
  Logo,
  (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark
);
