import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import Stepper from "../Stepper";
import Layout from "../Layout";
import { FormDataInterface } from "../../typing";
import Spinner from "../Spinner/Spinner";
import SuccessScreen from "../SuccessScreen";
import { axiosInstance } from "../../utils/axiosInterceptors";

interface FormInterface {
  loading: boolean;
  error: string;
  data: FormDataInterface[] | [];
}

const Form: React.FC<{}> = () => {
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
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
        const { data } = await axiosInstance.get(
          "/v1/registration/hotel/91c3e12d-ecd4-4cb0-a545-ca8c693d70f8/steps?fbclid=IwAR0MLwXdmvEWpaUyHp75UsSW5albrRRnwK72KnUu14pwk8Yotr6AjOg0ob0"
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
    formState: { errors, isValid, isSubmitting },
  } = useForm({ reValidateMode: "onChange", mode: "onChange" });

  const onSubmit = (data: any) => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    console.log("data", data);
  };

  if (formData?.loading) {
    return (
      <div className="flex flex-col justify-center align-middle h-screen">
        <Spinner />
      </div>
    );
  }

  if (showSuccessScreen) {
    return <SuccessScreen />;
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
            <div className="flex  justify-end gap- gap-x-44">
              {currentStep > 0 && (
                <Button
                  text="prev"
                  type="button"
                  className="mb-8"
                  variant="secondary"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                />
              )}
              <Button
                text={currentStep === totalSteps - 1 ? "Submit" : "Next"}
                type="submit"
                className="mb-8"
                // disabled={!isValid}
                loading={isSubmitting}
              />
            </div>
          </form>
        </>
      </div>
    </Layout>
  );
};

export default Form;
