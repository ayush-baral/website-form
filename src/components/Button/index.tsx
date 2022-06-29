import React from "react";

const Button: React.FC<{
  text: string;
  onClick?: any;
  variant?: "primary" | "secondary" | "delete";
  className?: string;
  type: "button" | "submit";
}> = ({ text, onClick, variant = "primary", className, type }) => {
  return (
    <button
      onClick={onClick}
      className={`py-[10px] px-[18px] rounded-lg ${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "secondary"
          ? "bg-secondary text-black"
          : variant === "delete" && "bg-red-500 text-white"
      } ${className}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
