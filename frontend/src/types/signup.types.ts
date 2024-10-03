import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { z } from "zod";

export const minDate = new Date("1900-01-01");
export const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);

export const initialState = {
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
  profilePicture: "",
  languages: ["english"],
  bio: "",
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

const bioSchema = z.object({
  profilePicture: z.string(),
  languages: z
    .array(z.string())
    .min(1, { message: "Please include at least one language" }),
  bio: z.string().min(10, { message: "Please write more about yourself" }),
});

export const stepSchemas = [
  contactSchema,
  professionalDetailsSchema,
  bioSchema,
];

export type userSchemas = z.infer<typeof contactSchema> &
  z.infer<typeof professionalDetailsSchema> &
  z.infer<typeof bioSchema>;

export type contactProps = {
  register: UseFormRegister<userSchemas>;
  errors: FieldErrors<userSchemas>;
};

export type BioProps = {
  register: UseFormRegister<userSchemas>;
  errors: FieldErrors<userSchemas>;
  getValues: UseFormGetValues<userSchemas>;
  setValue: UseFormSetValue<userSchemas>;
  setError: UseFormSetError<userSchemas>;
};

export type ProfDetailsProps = {
  register: UseFormRegister<userSchemas>;
  errors: FieldErrors<userSchemas>;
  control: Control<userSchemas, any>;
  setValue: UseFormSetValue<userSchemas>;
  watch: UseFormWatch<userSchemas>;
};
