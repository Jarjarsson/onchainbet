const rnd = () => {
  return Math.floor((Math.random() * 100) % 100);
};

const betP = (runs: number) => {
  const res: { [key: number]: number } = { 2: 0, 3: 0, 4: 0, 5: 0, 10: 0 };
  const mul = [2, 3, 4, 5, 10];
  mul.forEach((m) => {
    for (let i = 0; i < runs; i++) {
      const outcome = rnd();
      if (outcome <= 88 / m) {
        res[m] += 1;
      }
    }
  });
  for (const k in res) {
    console.log(
      `${k}: ${res[k] / runs}, fair: ${100 / Number(k)}, edge: ${
        (100 / Number(k) - (res[k] / runs) * 100) * 2
      }`,
    );
  }
};
// console.log('Nr runs 10m, p=88')
// testProbabilities(10000000)
