setTimeout(
  () => (document.querySelector(".clock").style.display = "block"),
  1000
);
setInterval(setClock, 1000);

function setClock() {
  const hourHand = document.querySelector(".hand.hour");
  const minuteHand = document.querySelector(".hand.minute");
  const secondHand = document.querySelector(".hand.second");

  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
