import React, { useState } from "react";

import GoBack from "@/components/back-btn";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { initialState, stepSchemas, userSchemas } from "@/types/signup.types";

import BioDetails from "./steps/bio-details";
import ContactInfo from "./steps/contact";
import ProfessionalInfo from "./steps/professional-info";

export default function Signup() {
  const [step, setStep] = useState<number>(0);
  const [userData, setUserData] = useState<userSchemas>(initialState);

  const methods = useForm({
    resolver: zodResolver(stepSchemas[step]),
    defaultValues: userData,
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    getValues,
    formState: { errors },
    setError,
  } = methods;

  const createAccountSteps = () => [
    {
      step: "1",
      stepName: "Contact Details",
      component: <ContactInfo key={0} register={register} errors={errors} />,
    },
    {
      step: "2",
      stepName: "Professional Details",
      component: (
        <ProfessionalInfo
          key={1}
          register={register}
          errors={errors}
          control={control}
          setValue={setValue}
          watch={watch}
        />
      ),
    },
    {
      step: "3",
      stepName: "Bio Details",
      component: (
        <BioDetails
          key={2}
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          setError={setError}
        />
      ),
    },
  ];

  const onNext: SubmitHandler<userSchemas> = (data) => {
    setUserData((prevData) => ({ ...prevData, ...data }));
    if (step < stepSchemas.length - 1) {
      setStep((prev) => prev + 1);
      reset({ ...userData, ...data });
    } else {
      console.log("Form submitted:", { ...userData, ...data });
    }
  };

  const onBack = () => {
    if (step >= 0) {
      setStep((prev) => prev - 1);
      reset(userData);
    }
  };

  return (
    <>
      {step > 0 && <GoBack onClick={onBack} />}

      <div className="flex items-center justify-center gap-1 md:gap-2 -mb-4">
        <p className="size-5 rounded-full text-xs font-medium bg-primary flex items-center justify-center text-white">
          {createAccountSteps()[step].step}
        </p>
        <span className="h-1 rounded w-12 md:w-20 bg-primary" />
        <p className="text-base md:text-lg font-medium text-black">
          {createAccountSteps()[step].stepName}
        </p>
      </div>

      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-10 max-w-xl w-full"
          onSubmit={handleSubmit(onNext)}
        >
          {createAccountSteps()[step].component}
          <div className="mx-auto max-w-sm w-full">
            <Button type="submit" className="w-full">
              <p className="text-sm font-bold text-white">Submit</p>
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
