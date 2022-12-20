import { InfoListProps } from "./types";
import { IpInfo } from "../IpInfo";
import { WrapperList, CurrentIp } from "./styles";
import Loader from "../Loader";

export const InfoList = ({ list, current }: InfoListProps) => {
  return (
    <WrapperList>
      <CurrentIp>
        {current ? (
          <>
            <h2>Current</h2>
            <IpInfo info={current} isCurrent={true} />
          </>
        ) : (
          <Loader />
        )}
      </CurrentIp>
      <div>
        <h2>History</h2>
        {list.map((info) => (
          <IpInfo
            key={info.ip}
            info={info}
            isCurrent={current?.ip === info.ip}
          />
        ))}
      </div>
    </WrapperList>
  );
};
