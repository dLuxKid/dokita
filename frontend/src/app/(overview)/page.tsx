import Image from "next/image";

import FindADoctor from "@/components/find-a-doctor";
import ServiceWeProvide from "@/components/service-we-provide";
import TeamMembers from "@/components/team-members";
import Testimonials from "@/components/testimonials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import docWorking from "@/assets/doc-working.png";
import doctor from "@/assets/svg/doctor.svg";
import FacebookSvg from "@/assets/svg/facebook";
import GoogleSvg from "@/assets/svg/google";
import linearbg from "@/assets/svg/linearbg.svg";
import PintrestSvg from "@/assets/svg/pintrest";
import play from "@/assets/svg/play-icon.svg";
import TwitchSvg from "@/assets/svg/twitch";
import WebflowSvg from "@/assets/svg/webflow";
import YoutubeSvg from "@/assets/svg/youtube";
import Newsletter from "@/components/newsletter";

export default async function Home() {
  return (
    <main className="[&>section]:py-[10%] [&>section]:md:py-[5%]">
      <section className="flex items-center justify-center flex-col lg:flex-row gap-12 md:gap-6 p-[5%] py-[10%] md:py-[5%]">
        <div className="flex-1 lg:flex-[65%] relative flex flex-col gap-6 md:gap-12 w-full">
          <h1 className="text-black text-wrap">
            Providing Quality <span className="text-primary">Healthcare </span>
            For A <span className="text-accent">Brighter</span> And{" "}
            <span className="text-accent">Healthy</span> Future
          </h1>
          <p className="text-black/70 lg:mr-24">
            At our hospital, we are dedicated to providing exceptional medical
            care to our patients and their families. Our experienced team of
            medical professionals, cutting-edge technology, and compassionate
            approach make us a leader in the healthcare industry
          </p>
          <div className="flex items-center flex-wrap gap-8 md:gap-16 mt-8">
            <Button>Appointments</Button>
            <div className="flex items-center gap-6">
              <span>
                <Image src={play} alt="watch video" />
              </span>
              <p className="text-black">Watch Video</p>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:flex-[35%] w-full relative">
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
      <FindADoctor />
      <section className="p-[5%] py-[10%] md:py-[5%] flex items-center justify-center flex-col w-full gap-6 md:gap-10">
        <h3 className="text-primary">Our results in numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="text-primary">
              99<span className="opacity-50">%</span>
            </h3>
            <h5 className="text-xl md:text-2xl font-bold">
              Customer satisfaction
            </h5>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="text-primary">
              15<span className="opacity-50">k</span>
            </h3>
            <h5 className="text-xl md:text-2xl font-bold">Online Patients</h5>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="text-primary">
              12<span className="opacity-50">k</span>
            </h3>
            <h5 className="text-xl md:text-2xl font-bold">
              Patients Recovered
            </h5>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3 className="text-primary">
              240<span className="opacity-50">%</span>
            </h3>
            <h5 className="text-xl md:text-2xl font-bold">Company growth</h5>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col lg:flex-row gap-8 p-[5%] py-[10%] md:py-[5%]">
        <div className="text-center flex-1 flex flex-col gap-4 md:gap-8 w-full">
          <h3 className="text-primary">
            You have lots of reasons to choose us
          </h3>
          <p className="text-accent-black">
            Here at <span className="text-primary font-semibold">Dokita</span>,
            we believe you have numerous compelling reasons to choose our
            services. Our commitment to excellence, dedication to patient care,
            and passion for innovation set us apart. With us, you can expect
            personalized attention, state-of-the-art treatments, and a welcoming
            environment that prioritizes your well-being. Experience the
            difference with{" "}
            <span className="text-primary font-semibold">Dokita </span>
            today!
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap md:gap-12 mt-4">
            <Badge>Get started</Badge>
            <Badge variant={"outline"}>Talk to sales</Badge>
          </div>
        </div>
        <div className="flex-1 w-full">
          <Image
            src={docWorking}
            alt="Image of doctor working on patient"
            className="w-full h-full object-contain rounded-2xl object-center"
          />
        </div>
      </section>
      <ServiceWeProvide />
      <TeamMembers />
      <Testimonials />
      <section className="p-[5%] py-[10%] md:py-[5%] md:-mb-[5%] flex items-center justify-center">
        <div className="flex items-center md:justify-start flex-col w-full gap-4">
          <h3 className="mb-8 text-primary text-center">
            Trusted by 10,000+ companies around the world
          </h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            <span>
              <GoogleSvg />
            </span>
            <span>
              <FacebookSvg />
            </span>
            <span>
              <YoutubeSvg />
            </span>
            <span>
              <PintrestSvg />
            </span>
            <span>
              <TwitchSvg />
            </span>
            <span>
              <WebflowSvg />
            </span>
          </div>
        </div>
      </section>
      <Newsletter />
    </main>
  );
}
