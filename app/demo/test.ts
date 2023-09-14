const demoP = (runs: number) => {
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;
  let ten = 0;

  for (let index = 0; index < runs; index++) {
    const [first, second] = Array.from({ length: 2 }, () =>
      Math.floor(Math.random() * 10)
    );
    if (first % 2 === 0 && second !== 0) {
      two += 1;
    }
    if ([0, 1, 2].includes(first)) {
      three += 1;
    }
    if ([0, 1, 2, 3, 5].includes(first) && [6, 7, 8, 9].includes(second)) {
      four += 1;
    }
    if ([0, 1].includes(first) && [1, 6, 7, 8, 9].includes(second)) {
      five += 1;
    }
    if (0 === first && 0 !== second) {
      ten += 1;
    }
  }

  console.log({
    two: two / runs,
    three: three / runs,
    four: four / runs,
    five: five / runs,
    ten: ten / runs,
  });
};
