import { IpInfoProps } from "./types";
import { BiRefresh } from "react-icons/bi";
import {
  WrapperInfo,
  ContainerInfo,
  InfoItem,
  RefreshWrapper,
  InfoAreas,
} from "./styles";
import { useUpdateInfo } from "../hooks/useUpdateInfo";

export const IpInfo = ({ info, isCurrent }: IpInfoProps) => {
  const {
    updatedInfo: { ip, city, region, loc, postal, country },
    updateInfo,
    isUpdating,
  } = useUpdateInfo(info);
  return (
    <ContainerInfo className={isUpdating ? "showLoading" : ""}>
      <WrapperInfo className={isCurrent ? "selected" : ""}>
        <RefreshWrapper
          className={`refresh ${isUpdating ? "loader" : ""}`}
          onClick={updateInfo}
        >
          <BiRefresh size={30} />
        </RefreshWrapper>
        <InfoAreas className="info">
          <InfoItem>Ip: {ip}</InfoItem>
          <InfoItem>Country: {country}</InfoItem>
          <InfoItem>City: {city}</InfoItem>
          <InfoItem>Region: {region}</InfoItem>
          <InfoItem>Location: {loc}</InfoItem>
          <InfoItem>Postal code: {postal}</InfoItem>
        </InfoAreas>
      </WrapperInfo>
    </ContainerInfo>
  );
};
