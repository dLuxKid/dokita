import { useState } from "react";

import GoBack from "@/components/back-btn";
import ContactInfo from "./steps/contact";
import ProfessionalInfo from "./steps/professional-info";

export type Doctor = {
  contact: {
    fullname: string;
    DOB: Date;
    phonenumber: string;
    email: string;
    state: string;
    country: string;
  };
  medicalLicenseNumber: string;
  specialization: string;
  qualifications: {
    degree: string;
    school: string;
    year: string;
  }[];
  experience: {
    workplace: string;
    positon: string;
    from: Date;
    to?: Date | undefined;
  }[];
};

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
  qualifications: [],
  experience: [],
};

type createAccountStepType = string;

export default function Signup() {
  const [userData, setUserData] = useState<Doctor>(initialState);

  const [createAccountStep, setCreateAccountStep] =
    useState<createAccountStepType>("1");

  const nextStep = () => {
    setCreateAccountStep((prev) => (Number(prev) + 1).toString());
  };
  const prevStep = () => {
    setCreateAccountStep((prev) => (Number(prev) - 1).toString());
  };

  const createAccountStatus: {
    [key: string]: { step: string; component: React.ReactNode };
  } = {
    "1": {
      step: "Contact Details",
      component: <ContactInfo setUserData={setUserData} next={nextStep} />,
    },
    "2": {
      step: "Professional Details",
      component: <ProfessionalInfo setUserData={setUserData} next={nextStep} />,
    },
  };

  return (
    <>
      {Number(createAccountStep) > 1 && <GoBack onClick={prevStep} />}

      <div className="flex items-center justify-center gap-1 md:gap-2 -mb-4">
        <p className="size-5 rounded-full text-xs font-medium bg-primary flex items-center justify-center text-white">
          {createAccountStep}
        </p>
        <span className="h-1 rounded w-12 md:w-20 bg-primary" />
        <p className="text-base md:text-lg font-medium text-black">
          {createAccountStatus[createAccountStep].step}
        </p>
      </div>
      {createAccountStatus[createAccountStep].component}
    </>
  );
}
