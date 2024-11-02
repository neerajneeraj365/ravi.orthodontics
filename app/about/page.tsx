import { Wrapper } from "@/components/globals/Wrapper";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <Wrapper className="flex flex-col gap-4 items-center justify-center h-[12em] md:h-[16em]">
        <h1 className="scroll-m-20 text-center text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
          About Me
        </h1>
        <p className="leading-7 text-sm md:text-md text-center">
          Learn about me
        </p>
      </Wrapper>
    </div>
  );
};

export default About;
