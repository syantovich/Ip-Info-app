import { InfoList } from "../../components/InfoList";
import { ContainerMainPage } from "./styles";
import useGetInfo from "../../components/hooks/useGetInfo";

const MainPage = () => {
  const { ipSInfo, currentIpInfo } = useGetInfo();
  return (
    <ContainerMainPage>
      <InfoList list={ipSInfo} current={currentIpInfo} />
    </ContainerMainPage>
  );
};

export default MainPage;
