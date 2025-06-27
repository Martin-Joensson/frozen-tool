import { faGithub, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className="bg-gray-800 font-poppins z-50">
      <div className="wide:w-2/3 wide:m-auto">
        <p className="text-right p-4 text-[rgba(255,255,255,0.87)]">
          <a href="https://github.com/Martin-Joensson/" className="mx-2">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          &copy; 2025 <a href="https://raglancreation.com">Martin Jönsson </a>
        </p>
      </div>
    </div>
  );
};
