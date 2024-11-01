import { Wrapper } from "@/components/globals/Wrapper";
import { Button } from "@/components/ui/button";
import { BriefcaseMedical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div>
      <Wrapper className="flex flex-col gap-4 items-center justify-center h-[14em] md:h-[16em]">
        <h1 className="scroll-m-20 text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
          Orthodontics Services
        </h1>
        <p className="leading-7 text-sm md:text-md">
          Transforming Smiles with Expert Care!
        </p>
      </Wrapper>

      <Wrapper className="max-w-screen-2xl mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <BriefcaseMedical />
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Braces
            </h4>
            <p className="leading-6 text-sm">
              Braces are the cornerstone of orthodontic treatment. These devices
              use metal brackets and wires to gradually move teeth into their
              correct positions, addressing issues such as misaligned teeth,
              overcrowding, gaps, and bite problems. Braces are highly effective
              and suitable for patients of all ages. Modern braces come in
              various types, including traditional metal, ceramic, and lingual
              options, catering to different preferences and needs.
            </p>
          </div>
          <div className="space-y-4">
            <BriefcaseMedical />
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Invisalign
            </h4>
            <p className="leading-6 text-sm">
              Invisalign offers a cutting-edge alternative to traditional
              braces. This system uses a series of clear, removable aligners
              that are custom-made to fit each patient&apos;s teeth. Invisalign
              aligners are nearly invisible, making them a popular choice for
              adults and teens who prefer a discreet option. They are also
              comfortable and can be removed for eating and cleaning, allowing
              for easier maintenance of oral hygiene during treatment.
            </p>
          </div>
          <div className="space-y-4">
            <BriefcaseMedical />
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Retainers
            </h4>
            <p className="leading-6 text-sm">
              Retainers are essential for maintaining the results achieved
              through orthodontic treatment. These devices are worn after braces
              or Invisalign to keep teeth in their new positions. Retainers can
              be either fixed or removable and are customized to fit each
              patient&apos;s mouth. They help prevent teeth from shifting back
              to their original positions, ensuring the longevity of the
              orthodontic results.
            </p>
          </div>
          <div className="space-y-4">
            <BriefcaseMedical />
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Palatal Expanders
            </h4>
            <p className="leading-6 text-sm">
              Palatal expanders are used to widen the upper jaw, creating more
              space for teeth and improving bite alignment. This treatment is
              typically recommended for children, as their jaws are still
              developing and more easily adaptable. By expanding the palate,
              these devices can prevent overcrowding and reduce the need for
              more complex orthodontic treatments in the future.
            </p>
          </div>
          <div className="space-y-4">
            <BriefcaseMedical />
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Orthodontic Surgery
            </h4>
            <p className="leading-6 text-sm">
              Orthodontic surgery may be necessary for severe cases that cannot
              be corrected with braces or other devices alone. This surgical
              intervention addresses jaw irregularities and improves the
              alignment of teeth and jaws. Orthodontic surgery enhances both
              function and appearance, correcting issues such as severe
              overbites, underbites, and jaw asymmetry. It is performed in
              conjunction with orthodontic treatment to achieve optimal results.
            </p>
          </div>
          <div className="space-y-4">
            <BriefcaseMedical />
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Space Maintainers
            </h4>
            <p className="leading-6 text-sm">
              Space maintainers are used primarily in children who lose their
              baby teeth prematurely. These devices hold the space open until
              the permanent teeth erupt, preventing misalignment and
              overcrowding as the child&apos;s mouth develops. Space maintainers
              ensure that the permanent teeth have enough room to grow in
              properly, reducing the likelihood of future orthodontic problems.
            </p>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="flex flex-col gap-4 items-center justify-center h-[14em] md:h-[16em] bg-gray-100 my-10">
        <h1 className="scroll-m-20 text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
          Want to book an appointment?
        </h1>
        <p className="leading-7 text-sm md:text-md">
          Click on the button below!
        </p>
        <Button asChild>
          <Link href="/book">Book Now</Link>
        </Button>
      </Wrapper>
    </div>
  );
};

export default Services;
