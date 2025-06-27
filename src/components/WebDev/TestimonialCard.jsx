import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StarRating } from "./StarRating";

export const TestimonialCard = ({ text, rating, face }) => {
  // image, quote and rating

  const portrait1 =
    "https://images.unsplash.com/photo-1641465466286-a212311fc62d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const portrait2 =
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const portrait3 =
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let selectedPortrait = portrait1;
  if (face == "2") {
    selectedPortrait = portrait2;
  }
  if (face == "3") {
    selectedPortrait = portrait3;
  }

  return (
    <div className="flex flex-col items-center text-center border rounded-xl p-2">
      <img
        className="rounded-full h-20 w-20 object-cover"
        src={selectedPortrait}
      />
      <p>{text}</p>
      <StarRating rating={rating} />
    </div>
  );
};
