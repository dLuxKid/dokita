import { useState } from "react";

import GoBack from "@/components/back-btn";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Control,
  FieldErrors,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { z } from "zod";

import ContactInfo from "./steps/contact";
import ProfessionalInfo from "./steps/professional-info";

const minDate = new Date("1900-01-01");
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);

const initialState = {
  contact: {
    fullname: "",
    DOB: new Date(),
    phonenumber: "",
    email: "",
    state: "",
    country: "",
  },
  medicalLicenseNumber: "",
  specialization: "",
  qualifications: [{ degree: "", school: "", year: "" }],
  experience: [{ workplace: "", positon: "", from: minDate, to: minDate }],
};

const phoneNumberPattern = /^\+?[0-9\s\-()]{7,15}$/;
const namePattern = /[a-zA-Z\s'-]+/;
const medicalLicensePattern = /^[A-Z]{2}\d{6}$/;

const contactSchema = z.object({
  contact: z.object({
    fullname: z
      .string()
      .min(4, { message: "Your fullname is too short" })
      .regex(namePattern, "Invalid character in your full name"),
    DOB: z.preprocess(
      (arg) => {
        if (typeof arg === "string" || arg instanceof Date)
          return new Date(arg);
      },
      z
        .date()
        .refine((date) => date >= minDate, {
          message: `Date of birth must be after ${
            minDate.toISOString().split("T")[0]
          }`,
        })
        .refine((date) => date <= maxDate, {
          message: "You must be at least 18 years old.",
        })
    ),
    phonenumber: z.string().regex(phoneNumberPattern, "Invalid phone number"),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address"),
    state: z.string().min(1, { message: "city is required" }),
    country: z.string().min(1, { message: "country is required" }),
  }),
});

const professionalDetailsSchema = z.object({
  medicalLicenseNumber: z
    .string()
    .min(8, { message: "The number is too short" })
    .max(8, { message: "The number is too long" })
    .regex(medicalLicensePattern, "Invalid medical license number format"),
  specialization: z.string().min(1),
  qualifications: z.array(
    z.object({
      degree: z.string().min(1, { message: "Select a degree" }),
      school: z.string().min(1, { message: "Enter your school" }),
      year: z.string().regex(/^\d{4}$/, "Invalid year format"),
    })
  ),
  experience: z.array(
    z.object({
      workplace: z.string().min(1, { message: "Enter your workplace" }),
      positon: z.string().min(1, { message: "Enter your positon" }),
      from: z.preprocess((arg) => {
        if (typeof arg === "string" || arg instanceof Date)
          return new Date(arg);
      }, z.date().min(minDate, { message: "Enter your start date" })),
      to: z.preprocess((arg) => {
        if (typeof arg === "string" || arg instanceof Date)
          return new Date(arg);
      }, z.date().optional()),
    })
  ),
});

const stepSchemas = [contactSchema, professionalDetailsSchema];

export type userSchemas = z.infer<typeof contactSchema> &
  z.infer<typeof professionalDetailsSchema>;

export type contactProps = {
  register: UseFormRegister<userSchemas>;
  errors: FieldErrors<userSchemas>;
};

export type ProfDetailsProps = {
  register: UseFormRegister<userSchemas>;
  errors: FieldErrors<userSchemas>;
  control: Control<userSchemas, any>;
  setValue: UseFormSetValue<userSchemas>;
  watch: UseFormWatch<userSchemas>;
};

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
    formState: { errors },
  } = methods;

  const createAccountSteps = () => [
    {
      step: "1",
      stepName: "Contact Details",
      component: <ContactInfo register={register} errors={errors} />,
    },
    {
      step: "2",
      stepName: "Professional Details",
      component: (
        <ProfessionalInfo
          register={register}
          errors={errors}
          control={control}
          setValue={setValue}
          watch={watch}
        />
      ),
    },
  ];

  const onNext: SubmitHandler<userSchemas> = (data) => {
    console.log(data);
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
