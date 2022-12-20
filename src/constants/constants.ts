export const GET_IP_URL = "https://api.ipify.org/?format=json";

export const GET_INFO_IP = (ip: string) =>
  `https://ipinfo.io/${ip}?token=e52f85a022f932`;

export const STORAGE_NAME = "IP_History";
