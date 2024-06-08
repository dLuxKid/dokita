import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { testimonials } from "@/assets/data/data";

export default function Testimonials() {
  return (
    <section className="p-[5%] flex flex-col items-center justify-center">
      <h3 className="text-primary mb-6">Testimonial</h3>
      <p className="text-black-accent mb-12">
        See what our satisfied clients have to say about their experiences with
        us.
      </p>
      <div className="w-full grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <Card
            className="flex flex-col py-6 md:py-8 bg-white rounded-3xl items-start justify-between gap-4 md:gap-6"
            key={i}
          >
            <CardHeader className="flex flex-col gap-4">
              <Image
                alt="testimonial image"
                src={testimonial.img}
                className="w-20 h-20 rounded-full object-fill object-center"
              />
              <CardTitle className="text-lg md:text-[22px] font-bold text-black">
                {testimonial.testimonial}
              </CardTitle>

              <CardDescription className="text-black-accent">
                {testimonial.info}
              </CardDescription>
            </CardHeader>
            <CardContent className="font-semibold text-primary mt-2">
              <p className="text-primary">{testimonial.name}</p>
              <p className="text-black-accent">{testimonial.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
