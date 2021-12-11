import React from "react";
import QuantityInput from "./QuantityInput";

function QuantityList(props) {
  return (
    <div className="quantityList">
      <table className="quantityTable">
        <tr>
          <th className="productcol">Product</th>
          <th className="qtycol">Qty</th>
          <th className="notecol">Note</th>
        </tr>
        <tr>
          <td colSpan={3}>
            <QuantityInput />
          </td>
        </tr>
        <tr>
          <td colSpan={3}>
            <QuantityInput />
          </td>
        </tr>
        <tr>
          <td colSpan={3}>
            <QuantityInput />
          </td>
        </tr>
        <tr>
          <td colSpan={3}>
            <QuantityInput />
          </td>
        </tr>
        <tr>
          <td colSpan={3}>
            <QuantityInput />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default QuantityList;
