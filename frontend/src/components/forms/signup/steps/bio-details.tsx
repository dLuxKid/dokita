import { languages } from "@/assets/data/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { BioProps } from "@/types/signup.types";
import { EditIcon } from "lucide-react";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
// import default_pfp from "@/assets/default-pfp.png";

export default function BioDetails({
  register,
  errors,
  getValues,
  setValue,
  setError,
}: BioProps) {
  const [pfp, setPfp] = useState(getValues("profilePicture"));
  const [languagesSpoken, setLanguagesSpoken] = useState(
    getValues("languages") || []
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFile = e.target.files[0];

    if (!selectedFile.type.includes("image"))
      return setError("profilePicture", {
        type: "manual",
        message: "Please select images only",
      });

    if (selectedFile.size > 10 * 1024 * 1024)
      return setError("profilePicture", {
        type: "manual",
        message: "Images cannot be larger than 10MB",
      });

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      setPfp(reader.result as string);
      setValue("profilePicture", reader.result as string);
    };
    reader.onerror = (err) => {
      return setError("profilePicture", {
        type: "manual",
        message: "An error occurred while reading the image",
      });
    };
  };

  return (
    <div className="flex flex-col gap-4 items-stretch w-full">
      <div className="size-60 md:size-40 bg-main-black rounded-full relative">
        <Avatar className="size-full">
          <AvatarImage
            className="w-full h-full object-fill object-center rounded-full"
            src={pfp || "/default-pfp.png"}
            alt="profile picture"
          />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
        <label htmlFor="photo">
          <span className="absolute bottom-0 right-3 cursor-pointer bg-white p-0.5 rounded-full">
            <EditIcon />
          </span>
        </label>
        <Input
          {...register("profilePicture")}
          type="file"
          name="photo"
          accept="image/*"
          id="photo"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="font-semibold text-sm text-black-secondary">
          Select languages you are conversant with
        </p>

        <div className="flex gap-4 items-center flex-wrap w-full">
          {languages.map((item, i) => (
            <label className="flex items-center gap-1.5">
              <Checkbox
                key={item.value}
                {...register("languages")}
                checked={languagesSpoken.includes(item.value) || false}
                onCheckedChange={(checked: boolean) => {
                  if (checked) {
                    const updatedLanguagesSpoken = [
                      ...languagesSpoken,
                      item.value,
                    ];
                    setValue("languages", updatedLanguagesSpoken);
                    setLanguagesSpoken(updatedLanguagesSpoken);
                  } else {
                    const updatedLanguagesSpoken = languagesSpoken.filter(
                      (value) => value !== item.value
                    );
                    setValue("languages", updatedLanguagesSpoken);
                    setLanguagesSpoken(updatedLanguagesSpoken);
                  }
                }}
              />

              <p className="font-semibold text-sm text-black-secondary cursor-pointer">
                {item.label}
              </p>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between sm:flex-row flex-col gap-4 sm:gap-8">
        <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
          <p className="font-semibold text-sm text-black-secondary">
            Write about yourself
          </p>
          <Textarea
            placeholder="Tell us a little bit about yourself"
            {...register("bio")}
            className="h-40 resize-y bg-transparent placeholder:text-gray-500"
          />
          {errors.bio && (
            <span className="error peer">{errors.bio.message as string}</span>
          )}
        </label>
      </div>
    </div>
  );
}
