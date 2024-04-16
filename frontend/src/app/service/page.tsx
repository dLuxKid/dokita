import Image from "next/image";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Badge } from "@/components/ui/badge";

import bg from "@/assets/service-hero-bg.png";

export default function Service() {
  return (
    <main>
      <Header />
      <section className="min-h-screen w-full relative p-[5%]">
        <div className="absolute inset-x-0 inset-y-0 z-0">
          <Image src={bg} alt="herosection background" />
        </div>
        <div className="md:px-[5%] flex items-center justify-center gap-6 p-[5%]">
          <div className="flex-[65%] relative flex flex-col gap-12">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold">
              Meet the Best <br /> Hospital
            </h1>
            <p className="text-white">
              We know how large objects will act, <br /> but things on a small
              scale.
            </p>
            <div className="flex items-center gap-16 mt-8">
              <Badge>Get Quote Now</Badge>
              <Badge variant={"destructive"}>Learn More</Badge>
            </div>
          </div>

          <div></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
