import { HistoryItem } from "../type";

export const cropWallet = (wallet: string) =>
  `${wallet.substring(0, 4)}...${wallet.substring(
    wallet.length - 4,
    wallet.length,
  )}`;

export const storeHistory = () => {
  const key = "bettingHistory";
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

  const runNTimes = async (arr: number[]) => {
    for (const i of arr) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          count.increase();
          resolve();
        }, i);
      });
    }
  };

  const slowDown = async (
    number: number,
    timeoutId: NodeJS.Timeout,
  ): Promise<void> => {
    stop(timeoutId);
    const diff = getDiff(count.getCounter(), number);

    if (diff > 20) {
      await runNTimes(Array(diff - 20).fill(50));
    } else {
      await runNTimes(Array(diff + 80).fill(50));
    }

    const durs = retard(20);
    await runNTimes(durs);
  };
  return { slowDown, start };
};

const stop = (timerId: NodeJS.Timeout) => {
  clearInterval(timerId);
};

const retard = (len: number) =>
  [...Array(len).keys()].map((i) => 50 + i * 1.15 * 15);

const getDiff = (current: number, target: number) =>
  (target - current + 100) % 100;

export const randomArray = (n: number) => {
  const arr = [...Array(n).keys()];
  const rndarr = [];
  for (let i = 0; i < n; i++) {
    const rndNum = Math.floor(Math.random() * arr.length);
    rndarr.push(arr.splice(rndNum, 1)[0]);
  }
  return rndarr;
};

export const getTime = () => {
  const d = new Date();
  return `${d.getHours()}:${d.getMinutes()}`;
};
