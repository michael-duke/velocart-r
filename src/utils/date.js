import dayjs from "dayjs";

export function formatOrderDate(date) {
  return dayjs(date).format("MMMM D");
}

export function formatDeliveryDate(dateOrDays) {
  if (typeof dateOrDays === "number") {
    return formatBusinessDate(dateOrDays);
  }
  return dayjs(dateOrDays).format("dddd, MMMM D");
}

// Helper: Calculates future business date (skicking weekends) from today
export function calculateBusinessDate(deliveryDays) {
  let date = dayjs();
  let daysCounted = 0;

  while (daysCounted < deliveryDays) {
    date = date.add(1, "day");
    if (!isWeekend(date)) daysCounted++;
  }

  return date;
}

function formatBusinessDate(deliveryDays) {
  const date = calculateBusinessDate(deliveryDays);
  return date.format("dddd, MMMM D");
}

export function calculateDeliveryDateISO(deliveryDays) {
  const date = calculateBusinessDate(deliveryDays);
  return date.toISOString();
}

// Helper: Returns true if the date is Sat (6) or Sun (0)
export const isWeekend = (date) => {
  const day = dayjs(date).day();
  return day === 0 || day === 6;
};

export default formatBusinessDate;
