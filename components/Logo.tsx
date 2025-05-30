import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  margin-right: 0.5rem;
  width: 40px;   /* Bisa sesuaikan ukuran logo */
  height: auto;
`;

const LogoText = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;  /* Bisa disesuaikan */
`;

export default function Logo({ ...rest }) {
  return (
    <LogoWrapper {...rest}>
      <LogoImage src="/logo.png" alt="Logo Totebag Bandung 93" />
      <LogoText>Totebag Bandung 93</LogoText>
    </LogoWrapper>
  );
}
