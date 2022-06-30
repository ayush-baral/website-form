import React from "react";
import Spinner from "../Spinner/Spinner";

const Button: React.FC<{
  text: string;
  onClick?: any;
  variant?: "primary" | "secondary" | "delete";
  className?: string;
  type: "button" | "submit";
  disabled?: any;
  loading?: boolean;
}> = ({
  text,
  onClick,
  variant = "primary",
  className,
  type,
  disabled,
  loading,
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-[10px] px-[18px] rounded-lg disabled:cursor-not-allowed ${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "secondary"
          ? "bg-secondary text-black"
          : variant === "delete" && "bg-red-500 text-white"
      } ${className}`}
      type={type}
      disabled={disabled}
    >
      {loading ? <Spinner /> : text}
    </button>
  );
};

export default Button;
