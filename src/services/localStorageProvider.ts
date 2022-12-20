import { STORAGE_NAME } from "../constants/constants";
import { IIpInfo } from "../types/interfaces";

class LocalStorageProvider {
  getHistory() {
    const history = localStorage.getItem(STORAGE_NAME);
    if (history) {
      return JSON.parse(history) as IIpInfo[];
    } else {
      return [];
    }
  }
  setHistory(arrayHistory: IIpInfo[]) {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(arrayHistory));
  }
  addItemToHistory(info: IIpInfo) {
    let history = this.getHistory();
    history = history.filter((historyElement) => historyElement.ip !== info.ip);
    history.push(info);
    this.setHistory(history);
    return history;
  }
  updateInfo(info: IIpInfo) {
    let history = this.getHistory();
    history = history.map((infoElement) => {
      if (infoElement.ip === info.ip) {
        return info;
      } else {
        return infoElement;
      }
    });
    this.setHistory(history);
  }
}

export const LSProvider = new LocalStorageProvider();
