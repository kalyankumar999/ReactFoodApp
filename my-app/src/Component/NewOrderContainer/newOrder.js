import React, { useState, useEffect } from "react";
import "./newOrder.css";
import orderedImg from "../../Assets/Images/ordered-removebg.png";
import { useNavigate } from "react-router-dom";

const NewOrder = () => {
  const navigate = useNavigate();

  const initialValues = { Name: "", Address: "", Contact: "", Payment: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  useEffect(() => {
    setIsSubmit(
      Object.keys(formErrors).length === 0 && isSubmitClicked ? true : false
    );
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitClicked(true);
    setFormErrors(validate(formValues));
    console.log("validate(formValues)", validate(formValues));
  };
  const validate = (values) => {
    const errors = {};

    if (!values.Name) {
      errors.Name = "Name is required";
    }
    if (!values.Address) {
      errors.Address = " Address is required";
    }
    if (!values.Contact) {
      errors.Contact = "Contact is required";
    } else if (values.Contact.length < 6) {
      errors.Contact = "Contact number is not valid";
    } else if (!values.Contact === Number) {
      errors.Contact = "enter numbers";
    }
    if (!values.Payment) {
      errors.Payment = "Payment is required";
    } else if (!values.Payment == Number) {
      errors.Payment = "enter numbers";
    }

    return errors;
  };
  return (
    <div className="main_container">
      {!isSubmit && (
        <form onSubmit={handleSubmit}>
          Delivery Details
          <div className="inputDiv1">
            <label>Name : </label>
            <input
              type="text"
              name="Name"
              placeholder="enter your Username"
              className="inputs"
              value={formValues.Name}
              onChange={handleChange}
            />
          </div>
          <p className="errorText">{formErrors.Name}</p>
          <div className="inputDiv2">
            <label>Address : </label>
            <input
              name="Address"
              type="text"
              placeholder="enter your Address"
              className="inputs"
              value={formValues.Address}
              onChange={handleChange}
            />
          </div>
          <p className="errorText">{formErrors.Address}</p>
          <div className="inputDiv3">
            <label>Contact : </label>
            <input
              name="Contact"
              type="text"
              placeholder="enter your Contact"
              className="inputs"
              value={formValues.Contact}
              onChange={handleChange}
            />
          </div>
          <p className="errorText">{formErrors.Contact}</p>
          <div className="inputDiv4">
            <label>Payment : </label>
            <input
              name="Payment"
              type="text"
              placeholder="enter Ammount"
              className="inputs"
              value={formValues.Payment}
              onChange={handleChange}
            />
          </div>
          <p className="errorText">{formErrors.Payment}</p>
          <button className="order">ORDER</button>
        </form>
      )}

      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <>
          <div className="order_clk">
            Great ..! Congratulations
            <img src={orderedImg} className="orderedImg" />
            <button
              className="backButton"
              type="button"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Go To DashBoard
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default NewOrder;
