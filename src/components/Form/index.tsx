import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import Stepper from "../Stepper";
import Layout from "../Layout";
import axios from "axios";
import { FormDataInterface } from "../../typing";
import Spinner from "../Button/Spinner/Spinner";

interface FormInterface {
  loading: boolean;
  error: string;
  data: FormDataInterface[] | [];
}

const Form = () => {
  const [formData, setFormData] = useState<FormInterface>({
    loading: false,
    error: "",
    data: [],
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setFormData({ ...formData, loading: true });
      try {
        const { data } = await axios.get(
          "https://19ee-27-34-48-60.ngrok.io/v1/registration/hotel/91c3e12d-ecd4-4cb0-a545-ca8c693d70f8/steps?fbclid=IwAR0MLwXdmvEWpaUyHp75UsSW5albrRRnwK72KnUu14pwk8Yotr6AjOg0ob0"
        );
        setFormData({ loading: false, error: "", data });
        setTotalSteps(data.length);
      } catch (e: any) {
        console.log("e", e);
      }
    };
    getData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onChange", mode: "onChange" });

  const onSubmit = (data: any) => {
    setCurrentStep((prev) => prev + 1);
  };

  if (formData?.loading) {
    return (
      <div className="flex flex-col justify-center align-middle h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <Layout>
      <div className=" pt-8 sticky top-0 left-0 bg-white">
        <Stepper currentStep={currentStep + 1} totalSteps={totalSteps} />
        <hr className="border-t border-[#C4C4C4] mt-11" />
      </div>
      <div className="mt-5">
        <>
          <h2 className="font-semibold text-xl pt-5 ">
            {formData?.data[currentStep]?.name}
          </h2>
          <p className="text-[14px]">
            {formData?.data[currentStep]?.description}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            {formData?.data[currentStep]?.step_fields.map(
              (inputField, index) => {
                const {
                  input_type,
                  name,
                  required,
                  label,
                  placeholder,
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
                    {input_type && (
                      <input
                        {...register(name, {
                          required: required && "This field is required",
                        })}
                        type={input_type}
                        name={name}
                        placeholder={placeholder}
                        className="border border-[#C2C9D1] w-full px-4 py-[10px]  rounded-lg mb-2"
                      />
                    )}
                    {/* input ends */}

                    {!input_type && options && (
                      <select
                        {...register(name, {
                          required: required && "This field is required",
                        })}
                        className="border text-[#00000080] border-[#C2C9D1] w-full px-[14x] py-[10px] placeholder:px-[14px] rounded-lg mb-2 "
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
              }
            )}

            <div className="flex  justify-between">
              {currentStep > 0 && (
                <Button
                  text="prev"
                  type="button"
                  className="mb-8"
                  variant="secondary"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                />
              )}
              <Button text="Next" type="submit" className="mb-8" />
            </div>
          </form>
        </>
      </div>
    </Layout>
  );
};

export default Form;
