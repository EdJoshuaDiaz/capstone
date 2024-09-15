import "../Reservation/Reservation.css";
import React, { useState } from "react";
import validator from "validator";
import Swal from "sweetalert2";

function Reservation(props) {
  var dtToday = new Date();

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();

  var minDate = year + "-" + month + "-" + day;

  const tableOption = [
    { value: "indoor", label: "Indoor" },
    { value: "outdoor", label: "Outdoor" },
  ];

  const [fname, setFname] = useState({ value: "", isTouched: false });
  const [lname, setLname] = useState({ value: "", isTouched: false });
  const [email, setEmail] = useState({ value: "", isTouched: false });
  const [phone, setPhone] = useState({ value: "", isTouched: false });
  const [date, setDate] = useState({ value: "", isTouched: false });
  const [time, setTime] = useState({ value: "", isTouched: false });
  const [guests, setGuests] = useState({ value: "", isTouched: false });
  const [message, setMessage] = useState({ value: "", isTouched: false });
  const [value, setValue] = useState("");

  function ClearForm() {
    setFname({ value: "", isTouched: false });
    setLname({ value: "", isTouched: false });
    setEmail({ value: "", isTouched: false });
    setPhone({ value: "", isTouched: false });
    setDate({ value: "", isTouched: false });
    setTime({ value: "", isTouched: false });
    setGuests({ value: "", isTouched: false });
    setMessage({ value: "", isTouched: false });
  }

  function SubmitHandler(e) {
    Swal.fire({
      title: "PLACE A RESERVATION?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--primary)",
      cancelButtonColor: "var(--secondary)",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "RESERVATION CONFIRMED!",
          icon: "success",
        });
      }
    });
    e.preventDefault();
    ClearForm();
  }

  function FormChecker() {
    if (
      fname.value &&
      lname.value &&
      validator.isEmail(email.value) &&
      phone.value.length === 11 &&
      validator.isMobilePhone(phone.value) &&
      date.value &&
      time.value &&
      guests.value &&
      guests.value > 2
    ) {
      return true;
    }
  }

  return (
    <>
      <div id="reservation" className="container-row bg-attr">
        <div className="container-column">
          <div className="form-cont">
            <h3>{props.title}</h3>
            <p className="desc">{props.desc}</p>
            <form onSubmit={SubmitHandler}>
              <div className="form-col-2">
                <div id="fname-cont">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Juan"
                    value={fname.value}
                    onChange={(e) => {
                      setFname({ ...fname, value: e.target.value });
                    }}
                    onFocus={() => {
                      setFname({ ...fname, isTouched: true });
                    }}
                  />
                  {fname.isTouched && fname.value === "" ? (
                    <p className="error-msg">Required</p>
                  ) : null}
                </div>

                <div id="lname-cont">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Dela Cruz"
                    value={lname.value}
                    onChange={(e) => {
                      setLname({ ...lname, value: e.target.value });
                    }}
                    onFocus={() => {
                      setLname({ ...lname, isTouched: true });
                    }}
                  />
                  {lname.isTouched && lname.value === "" ? (
                    <p className="error-msg">Required</p>
                  ) : null}
                </div>
              </div>

              <div className="form-col-2">
                <div id="email-cont">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@email.com"
                    value={email.value}
                    onChange={(e) => {
                      setEmail({ ...email, value: e.target.value });
                    }}
                    onFocus={() => {
                      setEmail({ ...email, isTouched: true });
                    }}
                  />
                  {email.isTouched && email.value === "" ? (
                    <p className="error-msg">Required</p>
                  ) : email.isTouched && !validator.isEmail(email.value) ? (
                    <p className="error-msg">Invalid email format</p>
                  ) : null}
                </div>

                <div id="phone-cont-2">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="09123456789"
                    value={phone.value}
                    onChange={(e) => {
                      setPhone({ ...phone, value: e.target.value });
                    }}
                    onFocus={() => {
                      setPhone({ ...phone, isTouched: true });
                    }}
                  />
                  {phone.isTouched && phone.value === "" ? (
                    <p className="error-msg">Required</p>
                  ) : phone.isTouched &&
                    !validator.isMobilePhone(phone.value, "en-PH") ? (
                    <p className="error-msg">Invalid phone format</p>
                  ) : null}
                </div>
              </div>

              <div className="form-col-3">
                <div id="date-cont">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    data-provider="datepicker"
                    min={minDate}
                    value={date.value}
                    onChange={(e) => {
                      setDate({ ...date, value: e.target.value });
                    }}
                    onFocus={() => {
                      setDate({ ...date, isTouched: true });
                    }}
                  />
                  {date.isTouched && date.value === "" ? (
                    <p className="error-msg">Required</p>
                  ) : null}
                </div>

                <div id="time-cont">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={time.value}
                    onChange={(e) => {
                      setTime({ ...time, value: e.target.value });
                    }}
                    onFocus={() => {
                      setTime({ ...time, isTouched: true });
                    }}
                  />
                  {time.isTouched && time.value === "" ? (
                    <p className="error-msg">Required</p>
                  ) : null}
                </div>

                <div id="guests-cont">
                  <label htmlFor="guests">Guests Count</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    pattern="[0-9]"
                    min="0"
                    value={guests.value}
                    onChange={(e) => {
                      setGuests({ ...guests, value: e.target.value });
                    }}
                    onFocus={() => {
                      setGuests({ ...guests, isTouched: true });
                    }}
                  />
                  {guests.isTouched && guests.value === "" ? (
                    <p className="error-msg">Required</p>
                  ) : guests.isTouched && guests.value < 3 ? (
                    <p className="error-msg">
                      Must be atleast 3 pax to reserve.
                    </p>
                  ) : null}
                </div>
              </div>

              <div id="message-cont">
                <label htmlFor="message">Any Additional Instructions</label>
                <textarea
                  id="message"
                  name="message"
                  value={message.value}
                  onChange={(e) => {
                    setMessage({ ...message, value: e.target.value });
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!FormChecker()}
              >
                Reserve A Table
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Reservation;
