import { httpClient } from "./httpClient";
import { GET_INFO_IP, GET_IP_URL } from "../constants/constants";
import { IIp, IIpInfo } from "../types/interfaces";

class DataProvider {
  async getIp() {
    const result = await httpClient(GET_IP_URL);
    const json = (await result.json()) as IIp;
    return json;
  }

  async getInfo(ip: string) {
    const result = await httpClient(GET_INFO_IP(ip));
    const json = (await result.json()) as IIpInfo;
    return json;
  }
}
export const { getInfo, getIp } = new DataProvider();
