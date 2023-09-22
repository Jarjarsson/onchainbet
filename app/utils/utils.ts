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

const counter = (setActiveNumber: (num: number) => void) => {
  let counter = 0;
  const increase = () => {
    if (counter === 100) {
      counter = 0;
    }
    counter++;
    setActiveNumber(counter);
  };
  const getCounter = () => counter;
  const setCounter = (number: number) => {
    counter = number;
  };
  return { increase, getCounter, setCounter };
};

export const animator = (setActiveNumber: (num: number) => void) => {
  const count = counter(setActiveNumber);
  const start = (startNumber: number) => {
    count.setCounter(startNumber);
    const timerId = setInterval(() => {
      count.increase();
    }, 50);
    return timerId;
  };

  const runNTimes = (arr: number[]) =>
    arr.reduce((acc, cur) => {
      setTimeout(() => {
        count.increase();
      }, cur + acc);
      return cur + acc;
    });

  const slowDown = (number: number, timeoutId: NodeJS.Timeout) => {
    stop(timeoutId);
    const diff = getDiff(count.getCounter(), number);
    let loopDuration: number;
    if (diff > 20) {
      loopDuration = runNTimes(Array(diff - 20).fill(50));
    } else {
      loopDuration = runNTimes(Array(diff + 80).fill(50));
    }
    setTimeout(() => {
      const durs = retard(22);
      runNTimes(durs);
    }, loopDuration);
  };
  return { slowDown, start };
};

const stop = (timerId: NodeJS.Timeout) => {
  clearInterval(timerId);
};

const retard = (len: number) =>
  [...Array(len).keys()].map(i => 50 + i * 1.15 * 15);

const getDiff = (current: number, target: number) =>
  (target - current + 100) % 100;
