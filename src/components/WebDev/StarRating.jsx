import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StarRating = ({ rating }) => {
  const containerLength = 5;
  let filled;
  return (
    <div>
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: containerLength }, (_, index) => (
          <div key={index}>
            {index < rating ? (
              <FontAwesomeIcon icon={filledStar} />
            ) : (
              <FontAwesomeIcon icon={emptyStar} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
