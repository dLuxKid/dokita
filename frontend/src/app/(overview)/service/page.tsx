import Image from "next/image";

import CustomerFeedback from "@/components/customer-feedback";
import Faqs from "@/components/faqs";
import FindADoctor from "@/components/find-a-doctor";
import Newsletter from "@/components/newsletter";
import ServiceWeProvide from "@/components/service-we-provide";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import bg from "@/assets/service-hero-bg.png";

export default async function Service() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center size-full relative p-[5%]">
        <div className="absolute inset-x-0 inset-y-0 z-0">
          <Image
            src={bg}
            alt="herosection background"
            className="size-full object-cover md:object-fill object-center"
          />
        </div>
        <div className="flex items-center flex-col lg:flex-row w-full justify-center gap-8 md:gap-6 p-[5%]">
          <div className="w-full flex-1 md:flex-[65%] relative flex flex-col gap-8 lg:gap-12">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold">
              Meet the Best <br /> Hospital
            </h1>
            <p className="text-white">
              We know how large objects will act, <br /> but things on a small
              scale.
            </p>
            <div className="flex items-center gap-8 md:gap-16 flex-wrap md:mt-8">
              <Badge>Get Quote Now</Badge>
              <Badge variant={"destructive"}>Learn More</Badge>
            </div>
          </div>
          <div className="w-full flex-1 md:flex-[35%] relative">
            <Card className="bg-[#fff] h-full rounded-[10px] p-6 md:p-10 flex flex-col gap-8 md:gap-10 items-center justify-center max-w-[328px]">
              <h3 className="text-black-secondary text-2xl">
                Book Appointment
              </h3>
              <form
                className="flex flex-col gap-10 w-full"
                action={async (FormData) => {
                  "use server";
                  console.log(FormData);
                }}
              >
                <div className="flex flex-col gap-4 items-stretch w-full">
                  <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                    <p className="font-semibold text-sm text-black-secondary">
                      Name *
                    </p>
                    <Input
                      type="text"
                      name="name"
                      required
                      placeholder="Full Name"
                      className="h-[45px] border-secondary"
                    />
                  </label>
                  <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                    <p className="font-semibold text-sm text-black-secondary">
                      Email *
                    </p>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      className="h-[45px] border-secondary"
                    />
                  </label>
                  <label className="relative flex flex-1 flex-shrink-0 flex-col gap-2">
                    <p className="font-semibold text-sm text-black-secondary">
                      Department *
                    </p>
                    <Select name="department">
                      <SelectTrigger className="w-full h-[45px] border-secondary">
                        <SelectValue placeholder="Please Select" />
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
                </div>
                <Button type="submit">
                  <p className="text-sm font-bold text-white">
                    Book Appointment
                  </p>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
      <FindADoctor />
      <ServiceWeProvide />
      <CustomerFeedback />
      <Faqs />
      <Newsletter />
    </main>
  );
}
