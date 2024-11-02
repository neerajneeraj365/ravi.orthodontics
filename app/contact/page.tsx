import { Wrapper } from "@/components/globals/Wrapper";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AtSign, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <Wrapper className="flex flex-col gap-4 items-center justify-center h-[14em] md:h-[16em]">
        <h1 className="scroll-m-20 text-center text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
          Contact our friendly team
        </h1>
        <p className="leading-7 text-sm md:text-md text-center">
          Let us know how we can help.
        </p>
      </Wrapper>

      <Wrapper className="mb-12 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card className="">
            <CardHeader>
              <CardTitle>
                <p className="p-2 w-fit rounded-lg border-2  border-[#00CE8F]">
                  <AtSign className="h-5 w-5 " />
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-md">
                Chat on <span className="font-semibold">email</span>
              </p>
              <p className="leading-7 text-sm">Speak to our friendly team</p>
            </CardContent>
            <CardFooter>
              <Link className="leading-7 text-sm underline" href="#">
                abc@gmail.com
              </Link>
            </CardFooter>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>
                <p className="p-2 w-fit rounded-lg border-2  border-[#00CE8F]">
                  <Phone className="h-5 w-5 " />
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-md">
                Chat on <span className="font-semibold">phone</span>
              </p>
              <p className="leading-7 text-sm">Speak directly to the dentist</p>
            </CardContent>
            <CardFooter>
              <Link className="leading-7 text-sm underline" href="#">
                4379705600
              </Link>
            </CardFooter>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>
                <p className="p-2 w-fit rounded-lg border-2  border-[#00CE8F]">
                  <MapPin className="h-5 w-5 " />
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-md">
                Visit <span className="font-semibold">us</span>
              </p>
              <p className="leading-7 text-sm">Visit our clinic</p>
            </CardContent>
            <CardFooter>
              <Link className="leading-7 text-sm underline" href="# ">
                View on google maps
              </Link>
            </CardFooter>
          </Card>
        </div>
      </Wrapper>
      <Wrapper className="my-10 w-fit space-y-4">
        <h1 className="scroll-m-20 text-center text-2xl md:text-4xl font-semibold tracking-tight lg:text-4xl">
          Frequently asked questions
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Wrapper>
    </div>
  );
};

export default Contact;
