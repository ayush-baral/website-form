import React from "react";
import Button from "../Button";

interface InputField {
  input_type: string;
  name: string;
  required: boolean;
  label: string;
  placeholder: string;
  multiple?: boolean;
  options?: string[];
}

const inputFields = [
  {
    input_type: "text",
    name: "name",
    required: false,
    label: "Full Name",
    placeholder: "Enter your full name",
    multiple: false,
  },
  {
    input_type: "date",
    name: "age",
    required: true,
    label: "Age",
    placeholder: "Enter your Age",
    multiple: false,
  },
];

const Form = () => {
  return (
    <div className="ml-4 mr-8 mt-5">
      <h2 className="font-semibold text-xl">Primary Information</h2>
      <p className="text-[14px]">This is your first step in Form </p>
      <form>
        {inputFields.map((inputField, index) => {
          const { input_type, name, required, label, placeholder, multiple } =
            inputField;
          return (
            <div key={index} className="my-9 ">
              <label className="block text-base font-normal mb-[8px]">
                {label}
                {required ? (
                  "*"
                ) : (
                  <span className="font-light text-xs"> (optional)</span>
                )}
              </label>
              <input
                type={input_type}
                name={name}
                placeholder={placeholder}
                className="border border-[#C2C9D1] w-full px-[14x] py-[10px] placeholder:px-[14px] rounded-lg"
              />
            </div>
          );
        })}
        <Button text="Next" type="button" />
      </form>
    </div>
  );
};

export default Form;
