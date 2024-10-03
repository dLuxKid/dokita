import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { degrees, specializations } from "@/assets/data/data";
import AddIcon from "@/assets/svg/add";
import CloseIcon from "@/assets/svg/close";

import { useFieldArray } from "react-hook-form";
import { ProfDetailsProps, minDate } from "@/types/signup.types";
import React from "react";

export default function ProfessionalInfo({
  register,
  errors,
  control,
  setValue,
  watch,
}: ProfDetailsProps) {
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

  return (
    <div className="flex flex-col gap-4 items-stretch w-full">
      <div className="flex sm:flex-row flex-col justify-between gap-4 sm:gap-8">
        <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
          <p className="font-semibold text-sm text-black-secondary">
            Medical liscence number
          </p>
          <Input
            type="text"
            {...register("medicalLicenseNumber")}
            placeholder="AB123456"
            className="h-[45px] bg-transparent placeholder:text-gray-500"
          />
          {errors.medicalLicenseNumber && (
            <span className="error">
              {errors.medicalLicenseNumber.message as string}
            </span>
          )}
        </label>
        <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
          <p className="font-semibold text-sm text-black-secondary">
            Field of specialization
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
          onClick={() => addQualification({ degree: "", school: "", year: "" })}
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
                className="h-[45px] bg-transparent placeholder:text-gray-500"
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
                className="h-[45px] bg-transparent placeholder:text-gray-500"
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
                  className="h-[45px] bg-transparent placeholder:text-gray-500"
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
                  className="h-[45px] bg-transparent placeholder:text-gray-500"
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
                  className="h-[45px] bg-transparent placeholder:text-gray-500"
                />
                {errors.experience?.[index]?.from && (
                  <span className="error">
                    {errors.experience[index].from.message}
                  </span>
                )}
              </label>
              <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                <p className="font-semibold text-sm text-black-secondary">To</p>
                <Input
                  disabled={watch(`experience.${index}.to`) == undefined}
                  type={"date"}
                  {...register(`experience.${index}.to`)}
                  className="h-[45px] bg-transparent placeholder:text-gray-500"
                />

                <label
                  htmlFor={`present-${index}`}
                  className="cursor-pointer flex items-center gap-1"
                >
                  <Input
                    id={`present-${index}`}
                    type="checkbox"
                    className="cursor-pointer hidden peer"
                    defaultChecked={
                      watch(`experience.${index}.to`) == undefined
                    }
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
  );
}
