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
  const classes = className("px-3 py-1.5 border", {
    "border-blue-600 bg-blue-500 text-white": primary,
    "border-gray-600 bg-gray-500 text-white": secondary,
    "border-green-600 bg-green-500 text-white": success,
    "border-orange-600 bg-orange-500 text-white": warning,
    "border-red-600 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "bg-white": outline,
  });

  return <button className={classes}>{children}</button>;
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
