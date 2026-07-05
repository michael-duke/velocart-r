import deliveryOptions from "@/data/deliveryOptions.json";

export function getDeliveryOption(deliveryOptionId) {
  return (
    deliveryOptions.find((option) => option.id === deliveryOptionId) ||
    deliveryOptions[0]
  );
}
