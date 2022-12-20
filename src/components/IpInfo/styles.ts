import styled, { keyframes } from "styled-components";

export const WrapperInfo = styled.div({
  position: "relative",
  width: 300,
  backgroundColor: "rgba(141,141,141,0.5)",
  transition: "0.5s",
  margin: 10,
  padding: 15,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0px 0px 8px 0px rgba(34, 60, 80, 0.2)",
  "&.selected": {
    backgroundColor: "rgba(82,171,61,0.73)",
  },
  "&.selected div": {
    color: "white",
  },
  "&:hover": {
    backgroundColor: "rgba(47,47,47,0.5)",
  },
  "&:hover div": {
    color: "white",
  },
  "&:hover .refresh": {
    display: "block",
  },
});
export const ContainerInfo = styled.div({
  width: "100%",
  margin: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&.showLoading .info": {
    opacity: 0,
  },
  "&.showLoading .refresh": {
    top: "43%",
    right: "45%",
  },
});
export const InfoAreas = styled.div({
  transition: "0.5s",
});
export const InfoItem = styled.div({
  transition: "0.4s",
  color: "#343434",
  margin: 10,
});
const spin = keyframes`
    from{ transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const RefreshWrapper = styled.div`
  display: none;
  position: absolute;
  right: 10px;
  top: 5px;
  transition: 0.2s;
  transform-origin: center;
  animation: ${spin} 1s infinite;
  animation-play-state: paused;
  &.loader {
    animation-play-state: running;
  }
`;
