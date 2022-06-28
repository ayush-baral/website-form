import React from "react";

const Button: React.FC<{
  text: string;
  onClick?: any;
  variant?: "primary" | "secondary";
  className?: string;
  type: "button" | "submit";
}> = ({ text, onClick, variant = "primary", className, type }) => {
  return (
    <button
      onClick={onClick}
      className={`py-[10px] px-[18px] rounded-lg ${
        variant === "primary"
          ? "bg-primary text-white"
          : "bg-secondary text-black"
      } ${className}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
