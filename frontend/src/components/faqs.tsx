import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { faqs } from "@/assets/data/data";

export default function Faqs() {
  return (
    <section className="p-[5%] py-[10%] md:py-[5%] flex flex-col items-center justify-center">
      <h1 className="text-black mb-4 md:mb-6">FAQ</h1>
      <p className="text-black-accent mb-8 md:mb-12 text-center">
        Here are some of our frequently asked questions
      </p>
      <div className="w-full grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {faqs.map((faq, i) => (
          <Card
            className="flex flex-col py-6 bg-white rounded-3xl items-start justify-between gap-4 md:gap-6"
            key={i}
          >
            <CardHeader className="flex flex-col gap-4">
              <CardTitle className="text-black-secondary text-base font-bold">
                {faq.question}
              </CardTitle>

              <CardDescription className="text-grey text-sm font-semibold">
                {faq.answer}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
