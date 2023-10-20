import {ReactNode} from "react";

type ButtonType = {
  children: ReactNode;
  size?: "xs" | "sm" | "default" | "lg" | "xl";
  className?: string;
};

const Button = (props: ButtonType) => {
  const {children, size = "default", className} = props;

  const buttonStyle = {
    xs: "px-3 py-2 text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    sm: "px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    default:
      "px-5 py-2.5 text-sm font-medium text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    lg: "px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    xl: "px-6 py-3.5 text-base font-medium text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
  };

  return (
    <button type="button" className={`${buttonStyle[size]} ${className || ""}`}>
      {children}
    </button>
  );
};

export default Button;
