import { HistoryItem } from '../type';

export const cropWallet = (wallet: string) =>
  `${wallet.substring(0, 4)}...${wallet.substring(
    wallet.length - 4,
    wallet.length
  )}`;

export const storeHistory = () => {
  const key = 'bettingHistory';
  const update = (item: HistoryItem) => {
    localStorage.setItem(key, JSON.stringify([...read(), item]));
  };
  const read = () => {
    let historyItems: HistoryItem[] = [];
    const data = localStorage.getItem(key);
    if (data !== null) {
      historyItems = JSON.parse(data) as HistoryItem[];
    }
    return historyItems;
  };
  const clear = () => {
    localStorage.setItem(key, JSON.stringify([]));
  };
  return { update, read, clear };
};
