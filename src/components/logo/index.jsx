import React from "react";
import styled, { css } from "styled-components";

import TftLogo from "../../assets/logo/logotftech.png";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 12em;
  height: 12em;

  ${({ inline }) =>
    inline &&
    css`
      width: 50px;
      height: 50px;
      margin-right: 6px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
    `};
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "18px" : small ? "23px" : "40px"};
  color: ${({ inline }) => (inline ? "#fff" : theme.primary)};
  font-weight: 900;
`;

export function Logo(props) {
  const { inline, small } = props;

  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImg src={TftLogo} inline={inline} small={small} />
      <LogoText inline={inline} small={small}>
        Talios Factory Tech
      </LogoText>
    </LogoContainer>
  );
}
