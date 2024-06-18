import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { feedbacks } from "@/assets/data/data";

import starColor from "@/assets/svg/star-color.svg";
import starPlain from "@/assets/svg/star-plain.svg";

export default function CustomerFeedback() {
  return (
    <section className="p-[5%] py-[10%] md:py-[5%] flex flex-col items-center justify-center">
      <h3 className="text-primary mb-4 md:mb-6">what our customers say</h3>
      <p className="text-black-accent mb-8 md:mb-12 text-center">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
      <div className="w-full grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((feedback, i) => (
          <Card
            className="flex flex-col py-6 md:py-8 bg-white rounded-3xl items-start justify-between gap-4 md:gap-6"
            key={i}
          >
            <CardHeader className="flex flex-col gap-4">
              <CardTitle className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Image
                    key={i}
                    alt="rating image"
                    src={i < feedback.rating ? starColor : starPlain}
                    className="size-[22px] object-fill object-center"
                  />
                ))}
              </CardTitle>

              <CardDescription className="text-black-accent">
                {feedback.feedback}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-2">
              <Image
                alt="customer"
                src={feedback.img}
                className="size-[50px] rounded-full object-fill object-center"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
