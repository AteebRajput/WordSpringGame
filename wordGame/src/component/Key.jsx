import { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../App";

export default function Key({ keyVal, bigKey }) {
  const {onSelectLetter,onEnter,onDelete } =
    useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "Enter") {
      onEnter();
    } else if (keyVal === "Delete") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div
      onClick={selectLetter}
      className={`${
        bigKey ? "w-20" : "w-12"
      } h-16 bg-gray-300 rounded-lg flex items-center justify-center text-xl font-bold cursor-pointer select-none shadow-md hover:bg-gray-400`}
    >
      {keyVal}
    </div>
  );
}

Key.propTypes = {
  keyVal: PropTypes.string.isRequired,
  bigKey: PropTypes.bool,
};

Key.defaultProps = {
  bigKey: false,
};
