import React, { useRef } from "react";
import RunningTallyColBtn from "./RunningTallyColBtn";

function RunningTally({ expand, tallyref, onTallyClosClick }) {
  return (
    <div ref={tallyref} className={"RuningTally-base "}>
      <button onClick={onTallyClosClick} className="btn btn-close">
        X
      </button>
      <h5 className="tally-header">Running Tally</h5>
      <div className="table-container">
        <table className="runningTally-table">
          <tr>
            <th className="table-item">Item</th>
            <th className="table-qty">Qty</th>
            <th className="table-note">Note</th>
          </tr>
          <tr>
            <td>2 X 4 C 92-5/8" DOUGLAS FIR KD</td>
            <td>10</td>
            <td>1 x 8ft</td>
          </tr>
          <tr>
            <td>2 X 4 C 92-5/8" DOUGLAS FIR KD</td>
            <td>10</td>
            <td>1 x 8ft</td>
          </tr>
          <tr>
            <td>2 X 4 C 92-5/8" DOUGLAS FIR KD</td>
            <td>10</td>
            <td>1 x 8ft</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default RunningTally;
