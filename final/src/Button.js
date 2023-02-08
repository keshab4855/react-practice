import React from "react";
import className from "classnames";

const finalClassName = className({
  "bg-blue-500": true,
});
console.log(finalClassName);
const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  let baseClassName = "px-3 py-1.5 border 	";
  if (primary) {
    baseClassName += "bg-blue-500 border-blue-500 text-white";
  }
  return (
    <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white mb-3	">
      {children}
    </button>
  );
};
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning or danger is true"
      );
    }
  },
};

export default Button;
