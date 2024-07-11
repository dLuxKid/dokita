import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { userDataType } from "../signup";

const minDate = new Date("1900-01-01");
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);

const phoneNumberPattern = /^\+?[0-9\s\-()]{7,15}$/;
const namePattern = /[a-zA-Z\s'-]+/;

type Props = {
  setUserData: React.Dispatch<React.SetStateAction<userDataType>>;
  next: () => void;
};

export default function ContactInfo({ setUserData, next }: Props) {
  const contactSchema = z.object({
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
  });

  type schema = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<schema> = (data) => {
    setUserData((prev) => ({
      ...prev,
      contact: data,
    }));
    next();
  };

  return (
    <form
      className="flex flex-col gap-10 max-w-xl w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 items-stretch w-full">
        <div className="flex justify-between gap-4 sm:gap-8">
          <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
            <p className="font-semibold text-sm text-black-secondary">
              Fullname
            </p>
            <Input
              type="text"
              {...register("fullname")}
              placeholder="John Doe"
              className="h-[45px] bg-transparent"
            />
            {errors.fullname && (
              <span className="error peer">
                {errors.fullname.message as string}
              </span>
            )}
          </label>
        </div>
        <div className="flex justify-between sm:flex-row flex-col gap-4 sm:gap-8">
          <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
            <p className="font-semibold text-sm text-black-secondary">Email</p>
            <Input
              type="email"
              {...register("email")}
              placeholder="user@example.com"
              className="h-[45px] bg-transparent"
            />
            {errors.email && (
              <span className="error peer">
                {errors.email.message as string}
              </span>
            )}
          </label>
          <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
            <p className="font-semibold text-sm text-black-secondary">
              Phone number
            </p>
            <Input
              type="tel"
              {...register("phonenumber")}
              placeholder="+234 9012345678"
              className="h-[45px] bg-transparent"
            />
            {errors.phonenumber && (
              <span className="error peer">
                {errors.phonenumber.message as string}
              </span>
            )}
          </label>
        </div>
        <div className="flex justify-between sm:flex-row flex-col gap-4 sm:gap-8">
          <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
            <p className="font-semibold text-sm text-black-secondary">
              Country
            </p>
            <Input
              type="text"
              {...register("country")}
              placeholder="Nigeria"
              className="h-[45px] bg-transparent"
            />
            {errors.country && (
              <span className="error peer">
                {errors.country.message as string}
              </span>
            )}
          </label>
          <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
            <p className="font-semibold text-sm text-black-secondary">State</p>
            <Input
              type="text"
              {...register("state")}
              placeholder="Lagos"
              className="h-[45px] bg-transparent"
            />
            {errors.state && (
              <span className="error peer">
                {errors.state.message as string}
              </span>
            )}
          </label>
          <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
            <p className="font-semibold text-sm text-black-secondary">
              Date of birth
            </p>
            <Input
              type="date"
              {...register("DOB")}
              className="h-[45px] bg-transparent"
            />
            {errors.DOB && (
              <span className="error peer">{errors.DOB.message as string}</span>
            )}
          </label>
        </div>
      </div>
      <div className="mx-auto max-w-sm w-full">
        <Button type="submit" className="w-full">
          <p className="text-sm font-bold text-white">Submit</p>
        </Button>
      </div>
    </form>
  );
}
