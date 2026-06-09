export default function TrackingProgress({ progress }) {
  const isPreparing = progress < 50;
  const isShipped = progress >= 50 && progress < 100;
  const isDelivered = progress >= 100;

  return (
    <>
      <div className="mb-3.75 flex justify-between text-[20px] font-medium max-[450px]:mb-1.25 max-[450px]:flex-col">
        <div className={`progress-label ${isPreparing ? "current-status" : ""}`}>
          Preparing
        </div>
        <div className={`progress-label ${isShipped ? "current-status" : ""}`}>
          Shipped
        </div>
        <div className={`progress-label ${isDelivered ? "current-status" : ""}`}>
          Delivered
        </div>
      </div>

      <div className="h-6.25 w-full overflow-hidden rounded-[50px] border border-[#c8c8c8]">
        <div
          className="h-full rounded-[50px] bg-green-700"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
}
