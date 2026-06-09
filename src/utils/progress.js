import dayjs from "dayjs";

export function calculateDeliveryProgress(orderTimeValue, deliveryTimeValue) {
  const currentTime = dayjs();
  const orderTime = dayjs(orderTimeValue);
  const deliveryTime = dayjs(deliveryTimeValue);

  // Calculate the total duration and the time elapsed
  const totalDuration = deliveryTime.diff(orderTime);
  const timeElapsed = currentTime.diff(orderTime);

  // Guard against division by zero if dates are identical
  if (totalDuration <= 0) return 0;

  // Calculate percentage
  let progress = (timeElapsed / totalDuration) * 100;

  // Ensure the progress stays between 0 and 100
  progress = Math.max(0, Math.min(100, progress));

  return progress;
}
