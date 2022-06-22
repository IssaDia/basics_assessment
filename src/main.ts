import moment from "moment";

let fromInputElement = document.getElementById("from") as HTMLInputElement;
let toInputElement = document.getElementById("to") as HTMLInputElement;
let dayDiffInputElement = document.getElementById(
  "day-diff"
) as HTMLInputElement;

fromInputElement.addEventListener("change", handleDate);
toInputElement.addEventListener("change", handleDate);
dayDiffInputElement.addEventListener("change", handleDiffDays);


// Set from and to dates to right format, then check if it's valid
function handleDate() {
  const from = moment(new Date(fromInputElement.value));
  const to = moment(new Date(toInputElement.value));

  let dayDiff = to.diff(from, "day");

  checkIfValid(from, to, dayDiff);
}

// check if dates input are not empty.If not return day difference result
function checkIfValid(from: moment.Moment, to: moment.Moment, dayDiff: number) {
  if (!to.isValid() || !from.isValid()) {
    dayDiffInputElement.value = "";
  } else {
    dayDiffInputElement.value = Math.abs(dayDiff).toString();
  }
}

// get difference days number then display the dates taking account of the difference
function handleDiffDays() {
  const diffDayValue = dayDiffInputElement.value;

  fromInputElement.value = moment().format("YYYY-MM-DD");
  toInputElement.value = moment()
    .subtract(diffDayValue, "days")
    .format("YYYY-MM-DD");
}
