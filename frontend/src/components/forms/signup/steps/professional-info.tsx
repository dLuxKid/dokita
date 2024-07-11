import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { degrees, specializations } from "@/assets/data/data";
import AddIcon from "@/assets/svg/add";
import CloseIcon from "@/assets/svg/close";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Doctor } from "../signup";

const minDate = new Date("1900-01-01");
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);

const medicalLicensePattern = /^[A-Z]{2}\d{6}$/;

type Props = {
  setUserData: React.Dispatch<React.SetStateAction<Doctor>>;
  next: () => void;
};

export default function ProfessionalInfo({ setUserData, next }: Props) {
  const Schema = z.object({
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

  type schema = z.infer<typeof Schema>;

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<schema>({
    resolver: zodResolver(Schema),
    defaultValues: {
      qualifications: [{ degree: "", school: "", year: "" }],
      experience: [{ workplace: "", positon: "", from: minDate, to: minDate }],
    },
  });

  const {
    fields: qualifications,
    append: addQualification,
    remove: removeQualification,
  } = useFieldArray({
    control,
    name: "qualifications",
  });

  const {
    fields: experiences,
    append: addExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experience",
  });

  const onSubmit: SubmitHandler<schema> = (data) => {
    console.log(data);
    // setUserData((prev) => ({
    //   ...prev,
    //   contact: data,
    // }));
    // next();
  };

  return (
    <form
      className="flex flex-col gap-10 max-w-xl w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 items-stretch w-full">
        <div className="flex sm:flex-row flex-col justify-between gap-4 sm:gap-8">
          <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
            <p className="font-semibold text-sm text-black-secondary">
              medical liscence number
            </p>
            <Input
              type="text"
              {...register("medicalLicenseNumber")}
              placeholder="AB123456"
              className="h-[45px] bg-transparent"
            />
            {errors.medicalLicenseNumber && (
              <span className="error">
                {errors.medicalLicenseNumber.message as string}
              </span>
            )}
          </label>
          <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
            <p className="font-semibold text-sm text-black-secondary">
              field of specialization
            </p>
            <Select
              {...register("specialization")}
              onValueChange={(val) => setValue("specialization", val)}
            >
              <SelectTrigger className="w-full h-[45px] border-primary">
                <SelectValue placeholder="Select e.g Doctor" />
              </SelectTrigger>
              <SelectContent>
                {specializations.map((specialization, index) => (
                  <SelectItem key={index} value={specialization.value}>
                    {specialization.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.specialization && (
              <span className="error">
                {errors.specialization.message as string}
              </span>
            )}
          </label>
        </div>
        <div className="relative flex flex-col gap-4 w-full items-end">
          <span
            className="cursor-pointer absolute right-0 z-50"
            onClick={() =>
              addQualification({ degree: "", school: "", year: "" })
            }
          >
            <AddIcon />
          </span>
          {qualifications.map((item, index) => (
            <div
              key={item.id}
              className="flex justify-between sm:flex-row flex-col gap-4 sm:gap-8 relative w-full"
            >
              {index > 0 && (
                <span
                  className="absolute right-0 top-0 cursor-pointer z-50"
                  onClick={() => removeQualification(index)}
                >
                  <CloseIcon />
                </span>
              )}
              <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                <p className="font-semibold text-sm text-black-secondary">
                  Degree
                </p>
                <Select
                  {...register(`qualifications.${index}.degree`)}
                  onValueChange={(e) =>
                    setValue(`qualifications.${index}.degree`, e)
                  }
                >
                  <SelectTrigger className="w-full h-[45px] border-primary">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {degrees.map((degree, index) => (
                      <SelectItem key={index} value={degree.value}>
                        {degree.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.qualifications?.[index]?.degree && (
                  <span className="error">
                    {errors.qualifications[index].degree.message}
                  </span>
                )}
              </label>
              <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                <p className="font-semibold text-sm text-black-secondary">
                  School
                </p>
                <Input
                  type="text"
                  {...register(`qualifications.${index}.school`)}
                  placeholder="Oxford University"
                  className="h-[45px] bg-transparent"
                />
                {errors.qualifications?.[index]?.school && (
                  <span className="error">
                    {errors.qualifications[index].school.message}
                  </span>
                )}
              </label>{" "}
              <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                <p className="font-semibold text-sm text-black-secondary">
                  Year of graduation
                </p>
                <Input
                  type="text"
                  {...register(`qualifications.${index}.year`)}
                  placeholder="2014"
                  className="h-[45px] bg-transparent"
                />
                {errors.qualifications?.[index]?.year && (
                  <span className="error">
                    {errors.qualifications[index].year.message}
                  </span>
                )}
              </label>
            </div>
          ))}
        </div>
        <div className="relative flex flex-col gap-4 w-full items-end">
          <span
            className="cursor-pointer absolute right-0 z-50"
            onClick={() =>
              addExperience({
                workplace: "",
                positon: "",
                from: minDate,
                to: minDate,
              })
            }
          >
            <AddIcon />
          </span>
          {experiences.map((item, index) => (
            <>
              <div
                key={item.id}
                className="flex justify-between sm:flex-row flex-col gap-4 sm:gap-8 relative w-full"
              >
                {index > 0 && (
                  <span
                    className="absolute right-0 top-0 cursor-pointer z-50"
                    onClick={() => removeExperience(index)}
                  >
                    <CloseIcon />
                  </span>
                )}
                <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                  <p className="font-semibold text-sm text-black-secondary">
                    Workplace
                  </p>
                  <Input
                    type="text"
                    {...register(`experience.${index}.workplace`)}
                    placeholder="Garki Hospital"
                    className="h-[45px] bg-transparent"
                  />
                  {errors.experience?.[index]?.workplace && (
                    <span className="error">
                      {errors.experience[index].workplace.message}
                    </span>
                  )}
                </label>
                <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                  <p className="font-semibold text-sm text-black-secondary">
                    Position
                  </p>
                  <Input
                    type="text"
                    {...register(`experience.${index}.positon`)}
                    placeholder="Head Doctor"
                    className="h-[45px] bg-transparent"
                  />
                  {errors.experience?.[index]?.positon && (
                    <span className="error">
                      {errors.experience[index].positon.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="flex justify-between sm:flex-row flex-col gap-4 sm:gap-8 relative w-full">
                <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                  <p className="font-semibold text-sm text-black-secondary">
                    From
                  </p>
                  <Input
                    type="date"
                    {...register(`experience.${index}.from`)}
                    className="h-[45px] bg-transparent"
                  />
                  {errors.experience?.[index]?.from && (
                    <span className="error">
                      {errors.experience[index].from.message}
                    </span>
                  )}
                </label>
                <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                  <p className="font-semibold text-sm text-black-secondary">
                    To
                  </p>
                  <Input
                    disabled={watch(`experience.${index}.to`) == undefined}
                    type={"date"}
                    {...register(`experience.${index}.to`)}
                    className="h-[45px] bg-transparent"
                  />

                  <label
                    htmlFor={`present-${index}`}
                    className="cursor-pointer flex items-center gap-1"
                  >
                    <Input
                      id={`present-${index}`}
                      type="checkbox"
                      className="cursor-pointer hidden peer"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue(`experience.${index}.to`, undefined);
                        } else {
                          setValue(`experience.${index}.to`, minDate);
                        }
                      }}
                    />
                    <span
                      className={`bg-transparent peer-checked:bg-primary border border-primary size-4 rounded-sm`}
                    />
                    Present
                  </label>

                  {errors.experience?.[index]?.to && (
                    <span className="error">
                      {errors.experience[index].to.message}
                    </span>
                  )}
                </label>
              </div>
            </>
          ))}
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
