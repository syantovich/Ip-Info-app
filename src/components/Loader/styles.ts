import styled, { keyframes } from "styled-components";

export const WrapperLoader = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const spin = keyframes`
  from{ transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
export const AnimatedLoader = styled.div`
  animation: ${spin} 1s infinite;
`;
