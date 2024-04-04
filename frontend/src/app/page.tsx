import Image from "next/image";

import Header from "@/components/header/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import { services, team_data, testimonials } from "@/assets/data/data";

import FacebookSvg from "@/assets/svg/facebook";
import GoogleSvg from "@/assets/svg/google";
import PintrestSvg from "@/assets/svg/pintrest";
import TwitchSvg from "@/assets/svg/twitch";
import WebflowSvg from "@/assets/svg/webflow";
import YoutubeSvg from "@/assets/svg/youtube";
import docWorking from "../assets/doc-working.png";
import doctor from "../assets/doctor.svg";
import linearbg from "../assets/linearbg.svg";
import play from "../assets/play-icon.svg";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <section className="flex items-center justify-center gap-6 p-[5%]">
        <div className="flex-[65%] relative flex flex-col gap-12">
          <h1 className="text-black">
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
          <div className="flex items-center gap-16 mt-8">
            <Button>Appointments</Button>
            <div className="flex items-center gap-6">
              <span>
                <Image src={play} alt="watch video" />
              </span>
              <p className="text-black">Watch Video</p>
            </div>
          </div>
        </div>
        <div className="flex-[35%] relative">
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
              <Input type="text" name="name" placeholder="Name" />
            </label>
            <label className="relative flex flex-1 flex-shrink-0">
              <Input type="text" name="speciality" placeholder="Speciality" />
            </label>
            <div className="relative flex flex-1 flex-shrink-0 items-center justify-center gap-6">
              <label htmlFor="available">
                <p className="text-black">Available</p>
              </label>
              <Switch id="available" className="w-[64px] h-[36px]" />
            </div>
            <Button>Search</Button>
          </form>
        </div>
      </section>
      <section className="p-[5%] flex items-center justify-center flex-col gap-10">
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
      <section className="flex items-center justify-center gap-8 p-[5%]">
        <div className="flex-1 flex flex-col gap-8">
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
          <div className="flex items-center gap-12 mt-4">
            <Badge>Get started</Badge>
            <Badge variant={"outline"}>Talk to sales</Badge>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={docWorking}
            alt="Image of doctor working on patient"
            className="w-full h-full object-contain rounded-2xl object-center"
          />
        </div>
      </section>
      <section className="p-[5%] flex flex-col items-center justify-center">
        <h3 className="text-primary mb-6">Services we provide</h3>
        <p className="text-accent-black mb-12 text-center">
          We take pride in offering a wide range of exceptional services to meet
          your healthcare needs. <br /> From cutting-edge treatments to
          compassionate care, we are dedicated to providing the highest level of
          service and support
        </p>
        <div className="w-full grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
                <CardTitle className="text-primary">
                  {service.service}
                </CardTitle>
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
      <section className="p-[5%] flex flex-col items-center justify-center">
        <h3 className="text-primary mb-6">Meet our team members</h3>
        <p className="text-accent-black mb-12">
          Meet the dedicated individuals who make up our team.
        </p>
        <div className="w-full grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {team_data.map((member, i) => (
            <Card
              className="text-center flex flex-col bg-white rounded-3xl items-center justify-between py-4 md:py-6 gap-4"
              key={i}
            >
              <Image
                alt="member image"
                src={member.img}
                className="w-40 h-40 rounded-full object-fill object-center"
              />
              <CardHeader className="flex flex-col gap-2">
                <CardTitle className="text-primary">{member.name}</CardTitle>
                <CardDescription className="text-base md:text-lg font-medium text-black">
                  {member.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-black">{member.about}</p>
              </CardContent>
              <CardFooter className="justify-center flex items-center gap-2">
                <span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="36"
                      height="36"
                      rx="8"
                      fill="#007E85"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M19.4638 27V18.7894H22.3585L22.7919 15.5895H19.4637V13.5465C19.4637 12.6201 19.7339 11.9888 21.1293 11.9888L22.909 11.988V9.12607C22.6012 9.08715 21.5447 9 20.3157 9C17.7497 9 15.9929 10.4912 15.9929 13.2297V15.5895H13.0908V18.7894H15.9929V26.9999H19.4638V27Z"
                      fill="#00A3FF"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="36"
                      height="36"
                      rx="8"
                      fill="#007E85"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M21.0271 10.7015V10.6982H21.8711L22.1794 10.7598C22.385 10.7998 22.5717 10.8522 22.7394 10.9171C22.9071 10.9819 23.0694 11.0575 23.2263 11.144C23.3832 11.2304 23.5255 11.3185 23.6532 11.4082C23.7798 11.4968 23.8934 11.5908 23.9941 11.6902C24.0936 11.7907 24.2489 11.8166 24.4599 11.768C24.6709 11.7194 24.8981 11.6518 25.1416 11.5654C25.385 11.479 25.6258 11.3817 25.8638 11.2736C26.1019 11.1656 26.2469 11.097 26.2988 11.0678C26.3497 11.0375 26.3768 11.0213 26.38 11.0192L26.3832 11.0143L26.3995 11.0062L26.4157 10.9981L26.4319 10.99L26.4482 10.9819L26.4514 10.977L26.4563 10.9738L26.4612 10.9705L26.4644 10.9657L26.4806 10.9608L26.4968 10.9576L26.4936 10.9819L26.4887 11.0062L26.4806 11.0305L26.4725 11.0548L26.4644 11.071L26.4563 11.0872L26.4482 11.1116C26.4427 11.1278 26.4373 11.1494 26.4319 11.1764C26.4265 11.2034 26.3751 11.3115 26.2777 11.5006C26.1803 11.6897 26.0586 11.8815 25.9125 12.076C25.7665 12.2705 25.6355 12.4174 25.5198 12.5168C25.4029 12.6173 25.3255 12.6875 25.2876 12.7275C25.2498 12.7686 25.2038 12.8064 25.1497 12.841L25.0685 12.8945L25.0523 12.9026L25.0361 12.9107L25.0328 12.9156L25.028 12.9188L25.0231 12.922L25.0198 12.9269L25.0036 12.935L24.9874 12.9431L24.9841 12.948L24.9793 12.9512L24.9744 12.9545L24.9711 12.9593L24.9679 12.9642L24.963 12.9674L24.9582 12.9707L24.9549 12.9755H25.0361L25.4905 12.8783C25.7935 12.8134 26.083 12.7351 26.3589 12.6433L26.7971 12.4974L26.8458 12.4812L26.8702 12.4731L26.8864 12.465L26.9026 12.4569L26.9188 12.4488L26.9351 12.4406L26.9675 12.4358L27 12.4325V12.465L26.9919 12.4682L26.9838 12.4731L26.9805 12.4779L26.9757 12.4812L26.9708 12.4844L26.9675 12.4893L26.9643 12.4941L26.9594 12.4974L26.9546 12.5006L26.9513 12.5055L26.9481 12.5103L26.9432 12.5136L26.9351 12.5298L26.927 12.546L26.9221 12.5492C26.9199 12.5525 26.8512 12.6443 26.716 12.8248C26.5807 13.0063 26.5077 13.0982 26.4968 13.1003C26.486 13.1036 26.4709 13.1198 26.4514 13.149C26.433 13.1792 26.3183 13.2997 26.1073 13.5104C25.8963 13.7211 25.6897 13.9086 25.4873 14.0728C25.2839 14.2382 25.1811 14.4413 25.1789 14.6823C25.1757 14.9222 25.1632 15.1934 25.1416 15.4959C25.1199 15.7985 25.0794 16.1254 25.0198 16.4765C24.9603 16.8277 24.8684 17.2248 24.7439 17.6679C24.6195 18.1109 24.468 18.5431 24.2894 18.9645C24.1109 19.3859 23.9243 19.7641 23.7295 20.0991C23.5347 20.4341 23.3562 20.7177 23.1939 20.9501C23.0316 21.1824 22.8666 21.4012 22.6988 21.6065C22.5311 21.8118 22.319 22.0431 22.0626 22.3002C21.8051 22.5563 21.6644 22.6968 21.6406 22.7216C21.6157 22.7454 21.5097 22.834 21.3225 22.9875C21.1363 23.142 20.9362 23.2965 20.7219 23.451C20.5088 23.6045 20.3129 23.7325 20.1344 23.8352C19.9558 23.9378 19.7405 24.055 19.4884 24.1869C19.2373 24.3198 18.9657 24.443 18.6736 24.5564C18.3814 24.6699 18.073 24.7752 17.7484 24.8725C17.4238 24.9697 17.11 25.0454 16.807 25.0994C16.5041 25.1534 16.1605 25.1994 15.7764 25.2372L15.2002 25.2939V25.302H14.1452V25.2939L14.0072 25.2858C13.9152 25.2804 13.8395 25.275 13.78 25.2696C13.7205 25.2642 13.4959 25.2345 13.1064 25.1805C12.7169 25.1264 12.4112 25.0724 12.1894 25.0184C11.9675 24.9643 11.6375 24.8617 11.1993 24.7104C10.761 24.5591 10.3861 24.4062 10.0745 24.2517C9.76394 24.0983 9.56917 24.001 9.49017 23.96C9.41226 23.92 9.32462 23.8703 9.22723 23.8108L9.08115 23.7217L9.07792 23.7168L9.07304 23.7136L9.06817 23.7104L9.06492 23.7055L9.04869 23.6974L9.03246 23.6893L9.02923 23.6844L9.02435 23.6812L9.01948 23.6779L9.01623 23.6731L9.013 23.6682L9.00812 23.665H9V23.6326L9.01623 23.6358L9.03246 23.6407L9.1055 23.6488C9.15419 23.6542 9.28675 23.6623 9.50316 23.6731C9.71958 23.6839 9.9495 23.6839 10.193 23.6731C10.4364 23.6623 10.6853 23.6379 10.9396 23.6001C11.1939 23.5623 11.4941 23.4975 11.8404 23.4056C12.1867 23.3138 12.5048 23.2046 12.7948 23.0782C13.0837 22.9507 13.2893 22.8556 13.4116 22.793C13.5327 22.7314 13.7178 22.6168 13.9666 22.4493L14.3399 22.1981L14.3432 22.1932L14.3481 22.19L14.3529 22.1868L14.3562 22.1819L14.3594 22.177L14.3643 22.1738L14.3692 22.1706L14.3724 22.1657L14.3886 22.1608L14.4049 22.1576L14.4081 22.1414L14.413 22.1252L14.4179 22.1219L14.4211 22.1171L14.2913 22.109C14.2047 22.1036 14.1208 22.0982 14.0397 22.0928C13.9585 22.0874 13.8314 22.063 13.6583 22.0198C13.4851 21.9766 13.2985 21.9118 13.0983 21.8253C12.8981 21.7389 12.7033 21.6362 12.514 21.5174C12.3246 21.3985 12.1877 21.2996 12.1033 21.2207C12.02 21.1429 11.9118 21.0327 11.7787 20.8901C11.6467 20.7464 11.532 20.5989 11.4346 20.4476C11.3372 20.2963 11.2442 20.1218 11.1555 19.9241L11.0207 19.6291L11.0126 19.6048L11.0045 19.5805L10.9996 19.5642L10.9964 19.548L11.0207 19.5513L11.0451 19.5561L11.2236 19.5805C11.3427 19.5967 11.5293 19.6021 11.7836 19.5967C12.0379 19.5913 12.2137 19.5805 12.3111 19.5642C12.4085 19.548 12.468 19.5372 12.4896 19.5318L12.5221 19.5237L12.5627 19.5156L12.6032 19.5075L12.6065 19.5027L12.6114 19.4994L12.6162 19.4962L12.6195 19.4913L12.587 19.4832L12.5546 19.4751L12.5221 19.467L12.4896 19.4589L12.4572 19.4508C12.4355 19.4454 12.3977 19.4346 12.3436 19.4184C12.2895 19.4022 12.1434 19.3427 11.9053 19.2401C11.6673 19.1374 11.4779 19.0375 11.3372 18.9402C11.1962 18.8427 11.0618 18.736 10.9347 18.6209C10.8081 18.5042 10.6691 18.354 10.5176 18.1703C10.3661 17.9866 10.2308 17.7732 10.1118 17.5301C9.99279 17.287 9.90352 17.0546 9.844 16.8331C9.78472 16.6129 9.74561 16.3878 9.72716 16.1605L9.69793 15.8201L9.71416 15.8233L9.73039 15.8282L9.74662 15.8363L9.76285 15.8444L9.77908 15.8525L9.79531 15.8606L10.0469 15.9741C10.2146 16.0497 10.4229 16.1146 10.6718 16.1686C10.9207 16.2226 11.0694 16.2523 11.1181 16.2577L11.1912 16.2658H11.3372L11.334 16.261L11.3291 16.2577L11.3243 16.2545L11.321 16.2496L11.3178 16.2448L11.3129 16.2415L11.308 16.2383L11.3048 16.2334L11.2885 16.2253L11.2723 16.2172L11.2691 16.2123L11.2642 16.2091L11.2593 16.2059L11.2561 16.201L11.2399 16.1929L11.2236 16.1848L11.2204 16.1799C11.2171 16.1778 11.1706 16.1432 11.0808 16.0762C10.9921 16.0081 10.899 15.9201 10.8016 15.812C10.7042 15.7039 10.6069 15.5905 10.5095 15.4716C10.4119 15.3525 10.325 15.225 10.2498 15.0907C10.174 14.9557 10.094 14.7838 10.0096 14.5753C9.92625 14.3678 9.86294 14.1587 9.81966 13.948C9.77639 13.7373 9.75204 13.5293 9.74662 13.324C9.74121 13.1187 9.74662 12.9431 9.76285 12.7972C9.77908 12.6514 9.81154 12.4866 9.86023 12.3029C9.90893 12.1192 9.97927 11.9247 10.0712 11.7194L10.2092 11.4114L10.2173 11.3871L10.2254 11.3628L10.2303 11.3595L10.2335 11.3547L10.2368 11.3498L10.2417 11.3466L10.2465 11.3498L10.2498 11.3547L10.253 11.3595L10.2579 11.3628L10.2628 11.366L10.266 11.3709L10.2693 11.3758L10.2741 11.379L10.2822 11.3952L10.2904 11.4114L10.2952 11.4147L10.2985 11.4195L10.5176 11.6626C10.6637 11.8247 10.8368 12.0057 11.037 12.2056C11.2372 12.4055 11.3481 12.5093 11.3697 12.5168C11.3914 12.5255 11.4184 12.5503 11.4509 12.5914C11.4833 12.6314 11.5915 12.727 11.7755 12.8783C11.9594 13.0295 12.2002 13.2051 12.4977 13.405C12.7953 13.6049 13.1253 13.8022 13.4878 13.9967C13.8503 14.1912 14.2399 14.3667 14.6564 14.5234C15.073 14.6801 15.3652 14.7828 15.5329 14.8314C15.7006 14.88 15.9874 14.9421 16.3931 15.0178C16.7989 15.0934 17.1046 15.1421 17.3102 15.1637C17.5158 15.1853 17.6565 15.1977 17.7322 15.2009L17.8458 15.2042L17.8426 15.1799L17.8377 15.1556L17.8052 14.9529C17.7836 14.8179 17.7728 14.6288 17.7728 14.3857C17.7728 14.1425 17.7917 13.9183 17.8296 13.713C17.8675 13.5077 17.9243 13.2997 18 13.089C18.0757 12.8783 18.1499 12.7092 18.2224 12.5817C18.296 12.4552 18.3923 12.311 18.5113 12.1489C18.6303 11.9868 18.7845 11.8193 18.9739 11.6464C19.1632 11.4735 19.3796 11.3196 19.6231 11.1845C19.8665 11.0494 20.0911 10.9468 20.2967 10.8765C20.5023 10.8063 20.6754 10.7604 20.8161 10.7388C20.9567 10.7172 21.0271 10.7047 21.0271 10.7015Z"
                      fill="#6CCAFF"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="36"
                      height="36"
                      rx="8"
                      fill="#007E85"
                      fillOpacity="0.1"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 18C9 14.4049 9 12.6073 9.85669 11.3126C10.2392 10.7344 10.7344 10.2392 11.3126 9.85669C12.6073 9 14.4049 9 18 9C21.5951 9 23.3927 9 24.6874 9.85669C25.2656 10.2392 25.7608 10.7344 26.1433 11.3126C27 12.6073 27 14.4049 27 18C27 21.5951 27 23.3927 26.1433 24.6874C25.7608 25.2656 25.2656 25.7608 24.6874 26.1433C23.3927 27 21.5951 27 18 27C14.4049 27 12.6073 27 11.3126 26.1433C10.7344 25.7608 10.2392 25.2656 9.85669 24.6874C9 23.3927 9 21.5951 9 18ZM22.6593 18.0002C22.6593 20.5735 20.5732 22.6596 17.9998 22.6596C15.4265 22.6596 13.3404 20.5735 13.3404 18.0002C13.3404 15.4269 15.4265 13.3408 17.9998 13.3408C20.5732 13.3408 22.6593 15.4269 22.6593 18.0002ZM17.9998 21.0832C19.7025 21.0832 21.0828 19.7029 21.0828 18.0002C21.0828 16.2975 19.7025 14.9172 17.9998 14.9172C16.2971 14.9172 14.9168 16.2975 14.9168 18.0002C14.9168 19.7029 16.2971 21.0832 17.9998 21.0832ZM22.8433 14.2015C23.4479 14.2015 23.9381 13.7114 23.9381 13.1067C23.9381 12.5021 23.4479 12.0119 22.8433 12.0119C22.2386 12.0119 21.7485 12.5021 21.7485 13.1067C21.7485 13.7114 22.2386 14.2015 22.8433 14.2015Z"
                      fill="url(#paint0_linear_122_154)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_122_154"
                        x1="18"
                        y1="9"
                        x2="18"
                        y2="27"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#B88400" />
                        <stop
                          offset="1"
                          stopColor="#FFB800"
                          stopOpacity="0.5"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="36"
                      height="36"
                      rx="8"
                      fill="#007E85"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M9 11.4201C9 10.8428 9.20271 10.3666 9.60811 9.99148C10.0135 9.6163 10.5405 9.42871 11.1892 9.42871C11.8263 9.42871 12.3417 9.6134 12.7355 9.98282C13.1409 10.3638 13.3436 10.8602 13.3436 11.472C13.3436 12.0261 13.1467 12.4879 12.7529 12.8573C12.3475 13.2382 11.8147 13.4287 11.1544 13.4287H11.1371C10.5 13.4287 9.98456 13.2382 9.59073 12.8573C9.19691 12.4763 9 11.9972 9 11.4201ZM9.22587 26.5716V15.0045H13.083V26.5716H9.22587ZM15.2201 26.5716H19.0772V20.1127C19.0772 19.7086 19.1236 19.3969 19.2162 19.1776C19.3784 18.7851 19.6245 18.4532 19.9546 18.182C20.2847 17.9107 20.6988 17.775 21.1969 17.775C22.4942 17.775 23.1429 18.6466 23.1429 20.3897V26.5716H27V19.9395C27 18.231 26.5946 16.9352 25.7838 16.0521C24.973 15.169 23.9015 14.7274 22.5695 14.7274C21.0753 14.7274 19.9112 15.3681 19.0772 16.6495V16.6841H19.0598L19.0772 16.6495V15.0045H15.2201C15.2432 15.3739 15.2548 16.5225 15.2548 18.4504C15.2548 20.3782 15.2432 23.0853 15.2201 26.5716Z"
                      fill="#0085FF"
                    />
                  </svg>
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section className="p-[5%] flex flex-col items-center justify-center">
        <h3 className="text-primary mb-6">Testimonial</h3>
        <p className="text-black-accent mb-12">
          See what our satisfied clients have to say about their experiences
          with us.
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
      <section className="p-[5%] flex items-center justify-center flex-col gap-10 md:gap-16">
        <div className="flex items-center flex-col w-full gap-4">
          <h3 className="mb-8 text-primary">
            Trusted by 10,000+ companies around the world
          </h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
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
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <h3 className="text-black">Subscribe to our newsletter</h3>
          <form className="flex items-center justify-center gap-6 w-full">
            <Input
              className="rounded-full w-full max-w-xl border-none pl-6"
              placeholder="Enter your email"
            />
            <Badge className="h-[66px] flex items-center justify-center">
              Subscribe
            </Badge>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
