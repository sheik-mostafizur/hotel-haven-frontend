import {ReactNode, MouseEvent} from "react";

type ButtonType = {
  children: ReactNode;
  size?: "xs" | "sm" | "default" | "lg" | "xl";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
};

const Button = (props: ButtonType) => {
  const {
    children,
    size = "default",
    className,
    type,
    onClick,
    isDisabled = false,
  } = props;

  const disabledStyle = isDisabled && "bg-primary-400 cursor-not-allowed";

  const mainColor = disabledStyle || "bg-primary-500";
  const hoverColor = isDisabled || "hover:bg-primary-600";
  const focusColor =
    isDisabled || "focus:ring-4 focus:outline-none focus:ring-primary-300";

  const darkColor = disabledStyle
    ? "dark:bg-primary-500 "
    : "dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800";

  const buttonStyle = {
    xs: `px-3 py-2 text-xs font-medium text-center text-white ${mainColor} rounded-lg ${hoverColor} ${focusColor} ${darkColor}`,
    sm: `px-3 py-2 text-sm font-medium text-center text-white ${mainColor} rounded-lg ${hoverColor} ${focusColor} ${darkColor}`,
    default: `px-5 py-2.5 text-sm font-medium text-white ${mainColor} ${hoverColor} ${focusColor} rounded-lg text-center ${darkColor}`,
    lg: `px-5 py-3 text-base font-medium text-center text-white ${mainColor} rounded-lg ${hoverColor} ${focusColor} ${darkColor}`,
    xl: `px-6 py-3.5 text-base font-medium text-white ${mainColor} ${hoverColor} ${focusColor} rounded-lg text-center ${darkColor}`,
  };

  return (
    <button
      type={type || "button"}
      className={`${buttonStyle[size]} ${className || ""}`}
      onClick={onClick}
      disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
