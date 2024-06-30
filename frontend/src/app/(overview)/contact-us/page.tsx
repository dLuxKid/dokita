import Image from "next/image";

import Newsletter from "@/components/newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import bg from "@/assets/service-hero-bg.png";

export default function ContactUs() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center size-full relative py-[10%] md:py-[5%] p-[5%]">
        <div className="absolute inset-x-0 inset-y-0 z-0">
          <Image
            src={bg}
            alt="herosection background"
            className="size-full object-cover md:object-fill object-center"
          />
        </div>
      </section>
      <section className="min-h-screen flex items-center justify-center flex-col gap-6 md:gap-12 size-full relative p-[10%] md:py-[5%]">
        <div className="flex items-center justify-center flex-col gap-3 md:gap-8">
          <p className="text-[#282938]">Get in touch</p>
          <h1 className="text-black">Contact Us</h1>
        </div>
        <div className="w-full">
          <form
            className="flex flex-col gap-10 w-full"
            action={async (FormData) => {
              "use server";
              console.log(FormData);
            }}
          >
            <div className="flex flex-col gap-4 items-stretch w-full">
              <div className="flex justify-between sm:flex-row flex-col gap-4 sm:gap-12">
                <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                  <p className="font-semibold text-sm text-black-secondary">
                    First name
                  </p>
                  <Input
                    type="text"
                    name="firstname"
                    required
                    placeholder="Enter your first name"
                    className="h-[45px] bg-transparent"
                  />
                </label>
                <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                  <p className="font-semibold text-sm text-black-secondary">
                    Last name
                  </p>
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Enter your last name"
                    required
                    className="h-[45px] bg-transparent"
                  />
                </label>
              </div>
              <div className="flex justify-between sm:flex-row flex-col gap-4 sm:gap-12">
                <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                  <p className="font-semibold text-sm text-black-secondary">
                    Email
                  </p>
                  <Input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="h-[45px] bg-transparent"
                  />
                </label>
                <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                  <p className="font-semibold text-sm text-black-secondary">
                    Phone number
                  </p>
                  <Input
                    type="tel"
                    name="phonenumber"
                    placeholder="Enter your phone number"
                    required
                    className="h-[45px] bg-transparent"
                  />
                </label>
              </div>
              <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                <p className="font-semibold text-sm text-black-secondary">
                  Choose a topic
                </p>
                <Select name="department">
                  <SelectTrigger className="w-full h-[45px] bg-transparent border-primary">
                    <SelectValue placeholder="Select one.." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="peadeatrician">
                        Pedeatrician
                      </SelectItem>
                      <SelectItem value="opthamologist">
                        Opthamologist
                      </SelectItem>
                      <SelectItem value="dietician">Dietician</SelectItem>
                      <SelectItem value="doctor">Doctor</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </label>
              <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                <p className="font-semibold text-sm text-black-secondary">
                  Message
                </p>
                <Textarea
                  name="message"
                  placeholder="Type your message..."
                  required
                  className="bg-transparent border-primary"
                />
              </label>
            </div>
            <div className="mx-auto max-w-sm w-full">
              <Button type="submit" className="w-full">
                <p className="text-sm font-bold text-white">Submit</p>
              </Button>
            </div>
          </form>
        </div>
      </section>
      <Newsletter />
    </main>
  );
}
