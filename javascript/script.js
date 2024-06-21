function updateTime() {
  let dateElement = document.querySelector("#date");
  let date = moment().tz("America/New_York").format("MMMM Do YYYY");
  dateElement.innerHTML = date;

  let timeElement = document.querySelector("#time");
  let time = moment().tz("America/New_York").format("h:mm:ss");
  timeElement.innerHTML = time;

  let amPmElement = document.querySelector("#am-pm");
  let amPm = moment().tz("America/New_York").format("a");
  amPmElement.innerHTML = amPm;
}
updateTime();
setInterval(updateTime, 1000);

// America/New_York
// Europe/London
// Australia/Sydney
