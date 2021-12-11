import React, { useRef, useState } from "react";
import DropDown from "./DropDown";
import QuantityList from "./QuantityList";
import RunningTally from "./RunningTally";
import RunningTallyColBtn from "./RunningTallyColBtn";

function ChooseOption(props) {
  const [tallyExpand, setTallyExpand] = useState(false);
  const [dropdownExpnad, setDropdownExpand]= useState(false)
  const tallyref = useRef(null);

  const onSetTallyClick = () => {
    if (!tallyExpand) tallyref.current.classList.add("expanded");
    if (tallyExpand) tallyref.current.classList.remove("expanded");
    setTallyExpand(!tallyExpand);
  };
  return (
    <>
      <div className="window">
        <button className="btn btn-close">X</button>
        <h5 className="header">Choose option below and add to your tally.</h5>
        <div className="colbtn-container">
          <RunningTallyColBtn />
        </div>

        <div className="dropdownContainer">
          <DropDown key="1" placeholder="Pick a Category" />
          <DropDown key="2" placeholder="pick Material" />
          <DropDown key="3" placeholder="pick Size" />
        </div>

        <h5 className="header">Choose quantites</h5>
        <QuantityList />

        <div className="btn-container">
          <button
            onClick={() => onSetTallyClick(!tallyExpand)}
            className="btn btn-submit"
          >
            Add to Tally
          </button>
        </div>

        <RunningTally
          onTallyClosClick={() => onSetTallyClick(!tallyExpand)}
          tallyref={tallyref}
          expand={tallyExpand}
        />
      </div>
    </>
  );
}

export default ChooseOption;
