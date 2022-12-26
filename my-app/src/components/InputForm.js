// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// const InputForm = ({ handleOnSubmit }) => {
//   const [enteredDate, setEnteredDate] = useState("");
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const dateChangeHandler = (e) => {
//     setEnteredDate(e.target.value);
//   };
//   const titleChangeHandler = (e) => {
//     setEnteredTitle(e.target.value);
//   };
//   const amountChangeHandler = (e) => {
//     setEnteredAmount(e.target.value);
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();
//     const xpenseData = {
//       date: enteredDate,
//       title: enteredTitle,
//       amount: enteredAmount,
//     };
//     handleOnSubmit(xpenseData);
//     setEnteredDate("");
//     setEnteredTitle("");
//     setEnteredAmount("");
//   };

//   return (
//     <div>
//       <Form onSubmit={submitHandler}>
//         <Form.Group className="mb-3">
//           <Form.Label>Date</Form.Label>
//           <Form.Control
//             type="date"
//             onChange={dateChangeHandler}
//             value={enteredDate}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Title</Form.Label>
//           <Form.Control
//             type="text"
//             onChange={titleChangeHandler}
//             value={enteredTitle}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Amount</Form.Label>
//           <Form.Control
//             type="number"
//             onChange={amountChangeHandler}
//             value={enteredAmount}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default InputForm;
