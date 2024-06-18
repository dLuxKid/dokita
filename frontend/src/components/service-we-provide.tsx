import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { services } from "@/assets/data/data";

export default function ServiceWeProvide() {
  return (
    <section className="p-[5%] py-[10%] md:py-[5%] flex flex-col items-center justify-center">
      <h3 className="text-primary mb-4 md:mb-6">Services we provide</h3>
      <p className="text-accent-black mb-8 md:mb-12 text-center">
        We take pride in offering a wide range of exceptional services to meet
        your healthcare needs. <br /> From cutting-edge treatments to
        compassionate care, we are dedicated to providing the highest level of
        service and support
      </p>
      <div className="w-full grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Card
            className="flex flex-col bg-white rounded-3xl items-start justify-between py-4 md:py-6 gap-4"
            key={i}
          >
            <CardHeader>
              <Image
                alt="service image"
                src={service.img}
                className="w-full h-56 rounded-lg object-fill object-center"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-primary">{service.service}</CardTitle>
              <CardDescription className="text-black mt-4">
                {service.about}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <p className="font-semibold text-primary flex items-center gap-2">
                Learn more
                <span>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4282 2.94922L18.4789 9.99994L11.4282 17.0507"
                      stroke="#007E85"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.4789 10L3.479 10"
                      stroke="#007E85"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
