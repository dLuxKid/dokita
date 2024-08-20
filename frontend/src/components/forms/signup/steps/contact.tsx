import { Input } from "@/components/ui/input";

import { contactProps } from "../signup";

export default function ContactInfo({ register, errors }: contactProps) {
  return (
    <div className="flex flex-col gap-4 items-stretch w-full">
      <div className="flex justify-between gap-4 sm:gap-8">
        <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
          <p className="font-semibold text-sm text-black-secondary">Fullname</p>
          <Input
            type="text"
            {...register("contact.fullname")}
            placeholder="John Doe"
            className="h-[45px] bg-transparent placeholder:text-gray-500"
          />
          {errors?.contact?.fullname && (
            <span className="error peer">
              {errors.contact.fullname.message as string}
            </span>
          )}
        </label>
      </div>
      <div className="flex justify-between sm:flex-row flex-col gap-4 sm:gap-8">
        <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
          <p className="font-semibold text-sm text-black-secondary">Email</p>
          <Input
            type="email"
            {...register("contact.email")}
            placeholder="user@example.com"
            className="h-[45px] bg-transparent placeholder:text-gray-500"
          />
          {errors?.contact?.email && (
            <span className="error peer">
              {errors.contact.email.message as string}
            </span>
          )}
        </label>
        <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
          <p className="font-semibold text-sm text-black-secondary">
            Phone number
          </p>
          <Input
            type="tel"
            {...register("contact.phonenumber")}
            placeholder="+234 9012345678"
            className="h-[45px] bg-transparent placeholder:text-gray-500"
          />
          {errors?.contact?.phonenumber && (
            <span className="error peer">
              {errors.contact.phonenumber.message as string}
            </span>
          )}
        </label>
      </div>
      <div className="flex justify-between sm:flex-row flex-col gap-4 sm:gap-8">
        <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
          <p className="font-semibold text-sm text-black-secondary">Country</p>
          <Input
            type="text"
            {...register("contact.country")}
            placeholder="Nigeria"
            className="h-[45px] bg-transparent placeholder:text-gray-500"
          />
          {errors?.contact?.country && (
            <span className="error peer">
              {errors.contact.country.message as string}
            </span>
          )}
        </label>
        <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
          <p className="font-semibold text-sm text-black-secondary">State</p>
          <Input
            type="text"
            {...register("contact.state")}
            placeholder="Lagos"
            className="h-[45px] bg-transparent placeholder:text-gray-500"
          />
          {errors?.contact?.state && (
            <span className="error peer">
              {errors.contact.state.message as string}
            </span>
          )}
        </label>
        <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
          <p className="font-semibold text-sm text-black-secondary">
            Date of birth
          </p>
          <Input
            type="date"
            {...register("contact.DOB")}
            className="h-[45px] bg-transparent placeholder:text-gray-500"
          />
          {errors?.contact?.DOB && (
            <span className="error peer">
              {errors.contact.DOB.message as string}
            </span>
          )}
        </label>
      </div>
    </div>
  );
}
