import { Star, StarHalf } from "lucide-react";

export default function StarRating({ rating, count }) {
  // Create an array of 5 to represent 5 stars
  return (
    <div className="flex items-center mb-2.5">
      {/*Star Row*/}
      <div className="flex items-center mr-2">
        {[...Array(5)].map((_, index) => {
          const starNumber = index + 1;

          // Is this a FULL star? (e.g., Star 1, 2, 3 for a 3.5 rating)
          if (starNumber <= Math.floor(rating)) {
            return (
              <Star
                key={index}
                size={18}
                className="text-velocart-amber fill-velocart-amber"
              />
            );
          }

          // Is this the HALF star? (e.g., Star # 4 for a 3.5 rating)
          if (starNumber === Math.ceil(rating) && rating % 1 !== 0) {
            return (
              <div
                key={index}
                className="relative flex items-center justify-center"
              >
                {/* The "Backing" - a gray empty star */}
                <Star size={18} className="text-gray-300" />
                {/* The "Overlay" - the gold half star shifted to the left */}
                <StarHalf
                  size={18}
                  className="absolute top-0 left-0 
                  text-velocart-amber fill-velocart-amber"
                />
              </div>
            );
          }

          // Otherwise, it's an EMPTY star
          return <Star key={index} size={18} className="text-gray-300" />;
        })}
      </div>
      {/*Review Count Row*/}
      <span className="mb-0.75 link-primary">{count}</span>
    </div>
  );
}
