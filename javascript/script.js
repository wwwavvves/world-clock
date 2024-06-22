function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector("#date");
  let losAngelesDate = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losAngelesDateElement.innerHTML = losAngelesDate;
  let losAngelesTimeElement = losAngelesElement.querySelector("#time");
  let losAngelesTime = moment().tz("America/Los_Angeles").format("h:mm:ss");
  losAngelesTimeElement.innerHTML = losAngelesTime;
  let losAngelesAmPmElement = losAngelesElement.querySelector("#am-pm");
  let losAngelesAmPm = moment().tz("America/Los_Angeles").format("a");
  losAngelesAmPmElement.innerHTML = losAngelesAmPm;

  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector("#date");
  let parisDate = moment().tz("Europe/Paris").format("MMMM Do YYYY");
  parisDateElement.innerHTML = parisDate;
  let parisTimeElement = parisElement.querySelector("#time");
  let parisTime = moment().tz("Europe/Paris").format("h:mm:ss");
  parisTimeElement.innerHTML = parisTime;
  let parisAmPmElement = parisElement.querySelector("#am-pm");
  let parisAmPm = moment().tz("Europe/Paris").format("a");
  parisAmPmElement.innerHTML = parisAmPm;

  // Seoul
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector("#date");
  let seoulDate = moment().tz("Asia/Seoul").format("MMMM Do YYYY");
  seoulDateElement.innerHTML = seoulDate;
  let seoulTimeElement = seoulElement.querySelector("#time");
  let seoulTime = moment().tz("Asia/Seoul").format("h:mm:ss");
  seoulTimeElement.innerHTML = seoulTime;
  let seoulAmPmElement = seoulElement.querySelector("#am-pm");
  let seoulAmPm = moment().tz("Asia/Seoul").format("a");
  seoulAmPmElement.innerHTML = seoulAmPm;
}

function updateCity(event) {
  let timezone = event.target.value;
  if (timezone === "current-location") {
    timezone = moment.tz.guess();
  }
  if (timezone !== undefined) {
    let clockSection = document.querySelector("#clock-section");

    let city = timezone.replace("_", " ").split("/")[1];
    let cityDate = moment().tz(timezone).format("MMMM Do YYYY");
    let cityTime = moment().tz(timezone).format("h:mm:ss");
    let cityAmPm = moment().tz(timezone).format("a");

    clockSection.innerHTML = `
          <div class="city-clock">
            <div class="city-date">
              <div class="city">${city}</div>
              <div class="date" id="date">${cityDate}</div>
            </div>
            <div class="time-element">
              <span id="time">${cityTime}</span>
              <span class="am-pm" id="am-pm">${cityAmPm}</span>
            </div>
          </div>
          `;
  }
}

updateTime();
setInterval(updateTime, 1000);

let cityDropdown = document.querySelector("#city-select-dropdown");
cityDropdown.addEventListener("change", updateCity);

function refreshPage() {
  location.reload();
}

let defaultCitiesBtn = document.querySelector("#default-cities");
defaultCitiesBtn.addEventListener("click", refreshPage);
