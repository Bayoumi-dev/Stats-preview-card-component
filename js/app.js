const statsNum = document.querySelectorAll(".stat-number .num"),
  speed = 1700;
// Animated Counter for stats
statsNum.forEach((statNum) => {
  let startVal = 0;
  const endVal = +statNum.getAttribute("data-val"),
    duration = (endVal > "100" ? speed * 0.5 : speed) / endVal,
    counter = setInterval(() => {
      startVal += 1;
      statNum.textContent = `${
        startVal.toString().length < 2 ? "0" + startVal : startVal
      }`;
      startVal === endVal && clearInterval(counter);
    }, duration);
});
