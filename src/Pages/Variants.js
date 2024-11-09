import React, { useState, useContext } from "react";
import HzNavbar from "../Components/HzNavbar";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";

const Variants = () => {
  const [options, setOptions] = useState([{ option: "", values: [""] }]);
  const navigate = useNavigate();
  const { setProductDetails } = useContext(ProductContext); // Access ProductContext

  // Handle adding a new option
  const addOption = () => {
    setOptions([...options, { option: "", values: [""] }]);
  };

  // Handle removing an option
  const removeOption = (index) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
  };

  // Handle updating the option name
  const updateOption = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index].option = value;
    setOptions(updatedOptions);
  };

  // Handle adding a value to an option
  const addValue = (index) => {
    const updatedOptions = [...options];
    updatedOptions[index].values.push("");
    setOptions(updatedOptions);
  };

  // Handle updating a specific value
  const updateValue = (optionIndex, valueIndex, value) => {
    const updatedOptions = [...options];
    updatedOptions[optionIndex].values[valueIndex] = value;
    setOptions(updatedOptions);
  };

  // Handle removing a specific value
  const removeValue = (optionIndex, valueIndex) => {
    const updatedOptions = [...options];
    updatedOptions[optionIndex].values.splice(valueIndex, 1);
    setOptions(updatedOptions);
  };

  const handleBack = () => {
    navigate("/description");
  };

  const handleNext = () => {
    // Save data to context before navigating
    setProductDetails((prevState) => ({
      ...prevState,
      options: options, // Save options in ProductContext
    }));
    navigate("/combination");
  };

  return (
    <>
      <div className="container" id="container">
        <HzNavbar />

        <div className="twoButtons">
          <button type="button" className="btn_1" onClick={handleBack}>
            Back
          </button>
          <button type="button" className="btn_2" onClick={handleNext}>
            Next
          </button>
        </div>

        <div className="boxForProductForm" id="boxForProductForm">
          <h4 id="variants-heading">Variants</h4>

          {options.map((option, index) => (
            <div key={index} className="option-row" id={`option-row-${index}`}>
              <input
                type="text"
                placeholder="Option"
                value={option.option}
                onChange={(e) => updateOption(index, e.target.value)}
                className={option.option ? "" : "error"}
                id={`option-input-${index}`}
              />
              <div
                className="values-container"
                id={`values-container-${index}`}
              >
                {option.values.map((value, valueIndex) => (
                  <span
                    key={valueIndex}
                    className="value-tag"
                    id={`value-tag-${index}-${valueIndex}`}
                  >
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        updateValue(index, valueIndex, e.target.value)
                      }
                      id={`value-input-${index}-${valueIndex}`}
                    />
                    <button
                      onClick={() => removeValue(index, valueIndex)}
                      className="remove-value-btn"
                      id={`remove-value-btn-${index}-${valueIndex}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
                <button
                  onClick={() => addValue(index)}
                  className="add-value-btn"
                  id={`add-value-btn-${index}`}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeOption(index)}
                className="delete-option"
                id={`delete-option-btn-${index}`}
              >
                🗑️
              </button>
              {!option.option && (
                <p className="error-text" id={`error-text-${index}`}>
                  Option can't be empty
                </p>
              )}
            </div>
          ))}
          <button
            onClick={addOption}
            className="add-option"
            id="add-option-btn"
          >
            + Add Option
          </button>
        </div>
      </div>
    </>
  );
};

export default Variants;
