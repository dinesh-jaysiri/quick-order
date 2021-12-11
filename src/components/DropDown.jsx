import React, { useState } from "react";
import downarrwo from "../images/sprite.svg";

function DropDown({
  inputList = [
    { name: "product 1", id: 1 },
    { name: "product 2", id: 2 },
    { name: "product 3", id: 3 },
    { name: "product 4", id: 4 },
  ],
  placeholder = "placeholder",
}) {
  const [expand, setExpand] = useState(false);
  const [currentSelect, setCurrentSelect] = useState("");
  const onArrowClick = () => {
    setExpand(!expand);
  };
  const onlistItemClick = (item) => {
    setCurrentSelect(item);
    setExpand(false);
  };
  return (
    <div className={expand ? "dropdown-base expanded" : "dropdown-base"}>
      <div className="dropdown-header" onClick={onArrowClick}>
        <div className="dropdown__lable">
          {currentSelect ? currentSelect : placeholder}
        </div>
        <div className="dropdown__arrow">
          <svg class="icon icon--small">
            <use href={downarrwo + "#downarrow"}></use>
          </svg>
        </div>
      </div>
      <div className={expand ? "dropdown--list expanded" : "dropdown--list"}>
        {inputList.map((item) => (
          <div className="list-item" onClick={() => onlistItemClick(item.name)}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
