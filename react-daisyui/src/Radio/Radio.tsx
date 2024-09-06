import React from "react";

const Radio = () => {
  return (
    <>
      <input
        type="radio"
        name="radio-1"
        className="radio radio-primary"
        defaultChecked
      />
      <input type="radio" name="radio-1" className="radio radio-primary" />

      {/* With label and form-control and custom colors! */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Red pill</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            defaultChecked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Blue pill</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
            defaultChecked
          />
        </label>
      </div>
    </>
  );
};

export default Radio;
