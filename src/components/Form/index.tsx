import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import { IoMdAddCircle } from "react-icons/io";
import { inputFields } from "./inputData";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "name", // unique name for your Field Array
    }
  );

  const appendField = () => {
    console.log("Appending field");

    append({ name: "name" });
  };

  const removeField = (id: number) => {
    remove(id);
  };

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="ml-4 mr-8 mt-5">
      <h2 className="font-semibold text-xl">Primary Information</h2>
      <p className="text-[14px]">This is your first step in Form </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputFields.map((inputField, index) => {
          const {
            input_type,
            name,
            required,
            label,
            placeholder,
            multiple,
            options,
          } = inputField;

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
              {input_type && !multiple && (
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

              {/* add more input */}
              {input_type && multiple && (
                <>
                  {fields.map((field, index) => {
                    return (
                      <div key={field.id}>
                        <input
                          {...register(`${name}.${index}.value`, {
                            required: required && "This field is required",
                          })}
                          type={input_type}
                          name={name}
                          placeholder={placeholder}
                          className="border border-[#C2C9D1] w-full px-[14x] py-[10px] placeholder:px-[14px] rounded-lg mb-2"
                        />
                        <Button
                          text="Delete"
                          type="button"
                          onClick={() => removeField(+field.id)}
                          variant="delete"
                          className="mb-2"
                        />
                      </div>
                    );
                  })}
                  <div
                    className="flex gap-2 items-center"
                    onClick={appendField}
                  >
                    <IoMdAddCircle /> <span>Add More {name}</span>
                  </div>
                </>
              )}

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
        <Button text="Next" type="submit" />
      </form>
    </div>
  );
};

export default Form;
