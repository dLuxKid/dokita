import Image from "next/image";

import Header from "@/components/header/header";

import linearbg from "../assets/linearbg.svg";
import doctor from "../assets/doctor.svg";
import play from "../assets/play-icon.svg";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <section className="flex items-center justify-center gap-8 p-[5%]">
        <div className="flex-[60%] relative flex flex-col gap-12">
          <h1 className="text-black">
            Providing Quality{" "}
            <span className="text-main-green">Healthcare</span> For A{" "}
            <span className="text-accent-green">Brighter</span> And{" "}
            <span className="text-accent-green">Healthy</span> Future
          </h1>
          <p className="text-black/70">
            At our hospital, we are dedicated to providing exceptional medical
            care to our patients and their families. Our experienced team of
            medical professionals, cutting-edge technology, and compassionate
            approach make us a leader in the healthcare industry
          </p>
          <div className="flex items-center gap-16 mt-8">
            <button className="cta-btn">Appointments</button>
            <div className="flex items-center gap-6">
              <span>
                <Image src={play} alt="watch video" />
              </span>
              <p className="text-black">Watch Video</p>
            </div>
          </div>
        </div>
        <div className="flex-[40%] relative">
          <span className="absolute inset-x-0 inset-y-[10%] z-0">
            <Image src={linearbg} alt="linear background" />
          </span>
          <Image
            src={doctor}
            alt="Image of a doctor"
            className="object-center object-fill relative z-10"
          />
        </div>
      </section>
      <section className="p-[5%] flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 w-full flex flex-col gap-8">
          <h3 className="capitalize text-black">Find a doctor</h3>
          <form className="flex items-center justify-between gap-8 flex-wrap">
            <label className="relative flex flex-1 flex-shrink-0">
              <input
                type="text"
                name="name"
                className="bg-white h-[66px] rounded-md w-full px-4 text-main-green border border-main-green placeholder:text-black"
                placeholder="Name"
              />
            </label>
            <label className="relative flex flex-1 flex-shrink-0">
              <input
                type="text"
                name="speciality"
                className="bg-white h-[66px] rounded-md w-full px-4 text-main-green border border-main-green placeholder:text-black"
                placeholder="Speciality"
              />
            </label>
            <div className="relative flex flex-1 flex-shrink-0 items-center justify-center gap-6">
              <p className="text-black">Available</p>
              <label className="relative inline-block w-[64px] h-[36px]">
                <input
                  type="checkbox"
                  // checked={isChecked}
                  // onChange={handleToggle}
                  className="hidden peer"
                />
                <span className="absolute cursor-pointer inset-x-0 inset-y-0 bg-white border border-main-green transition-all duration-300 rounded-[34px] before:absolute before:content-[''] before:h-[26px] before:w-[28px] before:left-1 before:inset-y-1 before:bg-main-green before:duration-300 before:transition-all before:rounded-[50%] peer-checked:before:translate-x-[26px]" />
              </label>
            </div>
            <button className="cta-btn">Search</button>
          </form>
        </div>
      </section>
      <section className="p-[5%] flex items-center justify-center flex-col gap-10">
        <h3 className="text-main-green">Our results in numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="text-main-green">
              99<span className="text-main-green/50">%</span>
            </h3>
            <h5 className="text-xl md:text-2xl font-bold">
              Customer satisfaction
            </h5>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="text-main-green">
              15<span className="text-main-green/50">k</span>
            </h3>
            <h5 className="text-xl md:text-2xl font-bold">Online Patients</h5>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="text-main-green">
              12<span className="text-main-green/50">k</span>
            </h3>
            <h5 className="text-xl md:text-2xl font-bold">
              Patients Recovered
            </h5>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="text-main-green">
              240<span className="text-main-green/50">%</span>
            </h3>
            <h5 className="text-xl md:text-2xl font-bold">Company growth</h5>
          </div>
        </div>
      </section>
    </main>
  );
}
