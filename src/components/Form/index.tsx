import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import { inputFields } from "./inputData";
import Stepper from "../Stepper";
import Layout from "../Layout";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <Layout>
      <div className=" pt-8 sticky top-0 left-0 bg-white">
        <Stepper currentStep={3} totalSteps={5} />
        <hr className="border-t border-[#C4C4C4] mt-11" />
      </div>
      <div className="mt-5">
        <h2 className="font-semibold text-xl pt-5 ">Primary Information</h2>
        <p className="text-[14px]">This is your first step in Form </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputFields.map((inputField, index) => {
            const { input_type, name, required, label, placeholder, options } =
              inputField;

            return (
              <div key={index} className="my-9 ">
                {/* label starts */}
                <label className="block text-base font-normal mb-[8px]">
                  {label}
                  {required ? (
                    "*"
                  ) : (
                    <span className="font-light text-xs"> (optional)</span>
                  )}
                </label>
                {/* label ends */}

                {/* input starts */}
                {input_type && (
                  <input
                    {...register(name, {
                      required: required && "This field is required",
                    })}
                    type={input_type}
                    name={name}
                    placeholder={placeholder}
                    className="border border-[#C2C9D1] w-full px-[14x] py-[10px] placeholder:px-[14px] rounded-lg mb-2"
                  />
                )}
                {/* input ends */}

                {!input_type && options && (
                  <select
                    {...register(name, {
                      required: required && "This field is required",
                    })}
                    className="border text-[#00000080] border-[#C2C9D1] w-full px-[14x] py-[10px] placeholder:px-[14px] rounded-lg mb-2"
                  >
                    <option value="">Select a {name}</option>
                    {options.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                )}

                {/* error message */}
                {errors[name] && (
                  <ErrorMessage
                    message={(errors[name]?.message as string) || ""}
                  />
                )}
              </div>
            );
          })}
          <div className="flex justify-end">
            <Button text="Next" type="submit" className="mb-8" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Form;
