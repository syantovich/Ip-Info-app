import { useEffect, useState } from "react";
import { IIpInfo } from "../../types/interfaces";
import { getInfo, getIp } from "../../services/dataProvider";
import { LSProvider } from "../../services/localStorageProvider";

const useGetInfo = () => {
  const [currentIpInfo, setCurrentIpInfo] = useState<IIpInfo | null>(null);
  const [ipSInfo, setIpSInfo] = useState<IIpInfo[]>([]);
  useEffect(() => {
    const fetch = async () => {
      setIpSInfo(LSProvider.getHistory());
      const result = await getIp();
      const info = await getInfo(result.ip);
      const history = LSProvider.addItemToHistory(info);
      setIpSInfo(history);
      setCurrentIpInfo(info);
    };
    fetch();
  }, []);
  return { currentIpInfo, ipSInfo };
};
export default useGetInfo;
