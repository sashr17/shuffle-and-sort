(() => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const generateCardTpl = num => `<div class='num-card'>${num}</div>`;

  const generateCardsTpl = () => {
    if (!arr || arr.length === 0) {
      return;
    }

    const tpls = arr.map(num => generateCardTpl(num));
    document.querySelector(".cards").innerHTML = tpls.join("");
  };

  const shuffleNumbers = () => {
    arr.forEach((num, i) => {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    });

    generateCardsTpl();
  };

  const sortNumbers = () => {
    arr.sort();
    generateCardsTpl();
  };

  const init = () => {
    sortNumbers();
    generateCardsTpl();
  };

  init();

  window.apis = {
    shuffleNumbers: shuffleNumbers,
    sortNumbers: sortNumbers
  };
})();
