import moment from "moment";

const from = document.getElementById("from") as HTMLInputElement;
const to = document.getElementById("to") as HTMLInputElement;
const dayDiff = document.getElementById("day-diff") as HTMLInputElement;
const includeEnd = document.getElementById("include_end") as HTMLInputElement;

from.addEventListener("change", handleDate);
to.addEventListener("change", handleDate);
includeEnd.addEventListener("change", handleDate);
dayDiff.addEventListener("change", handleDiff);

// Set from and to dates to right format, then check if it's valid
function handleDate() {
  const fromDate = moment(new Date(from.value));
  const toDate = moment(new Date(to.value));
  const calculatedDiff = toDate.diff(fromDate, "day");
  const diff = parseDiff(calculatedDiff);
  
  checkIfValidThenReturnValue(fromDate, toDate, diff);
}

// include end date if input is checked
function parseDiff(dayDiff: number): number {
  if (includeEnd.checked) {
    return dayDiff + 1;
  }
  return dayDiff;
}

// return day difference number result when dates are valid
function checkIfValidThenReturnValue(
  from: moment.Moment,
  to: moment.Moment,
  diff: number
) {
  if (to.isValid() && from.isValid()) {
    dayDiff.valueAsNumber = Math.abs(diff);
  }
}

// get difference days number then display the dates taking account of the difference
function handleDiff() {
  let diff = parseDiff(dayDiff.valueAsNumber);
 
  from.value = moment().format("YYYY-MM-DD");
  to.value = moment().add(diff, "days").format("YYYY-MM-DD");
}
