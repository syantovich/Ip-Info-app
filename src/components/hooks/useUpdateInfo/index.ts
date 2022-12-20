import { IIpInfo } from "../../../types/interfaces";
import { useState } from "react";
import { getInfo } from "../../../services/dataProvider";
import { LSProvider } from "../../../services/localStorageProvider";

export const useUpdateInfo = (info: IIpInfo) => {
  const [updatedInfo, setUpdatedInfo] = useState(info);
  const [isUpdating, setIsUpdating] = useState(false);
  const updateInfo = async () => {
    if (!isUpdating) {
      setIsUpdating(true);
      const newInfo = await getInfo(updatedInfo.ip);
      LSProvider.updateInfo(newInfo);
      setUpdatedInfo(newInfo);
      setIsUpdating(false);
    }
  };
  return { updatedInfo, isUpdating, updateInfo };
};
