import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function QuantityInput(props) {
  const validationSchema = Yup.object().shape({
    quantity: Yup.number().max(1000).min(0),
    note: Yup.string().max(250),
  });
  return (
    <div>
      <Formik
        initialValues={{ quantity: "", note: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <label className="  itemlabel  " htmlFor="">
              {'2 X 4 C 92-5/8" DOUGLAS FIR KD'}
            </label>
            <input
              className={errors.quantity ? "input qty error" : "input qty"}
              type="text"
              onChange={handleChange("quantity")}
            />
            <input
              className={
                errors.note ? "input qty-note error" : "input qty-note"
              }
              type="text"
              onChange={handleChange("note")}
            />
            {/* <button onClick={handleSubmit}> Submit </button> */}
          </>
        )}
      </Formik>
    </div>
  );
}

export default QuantityInput;
