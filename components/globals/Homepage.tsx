import Link from "next/link";
import { Button } from "../ui/button";
import { Wrapper } from "./Wrapper";
import Image from "next/image";
import { BriefcaseMedical } from "lucide-react";

const Homepage = () => {
  return (
    <div>
      <Wrapper className="flex flex-col items-center gap-4 justify-center h-[20em] md:h-[24em]">
        <h1 className="scroll-m-20 w-[100%] md:w-[80%] text-4xl md:text-6xl text-center font-extrabold tracking-tight lg:text-7xl">
          Quality Dental Care for Your Smile
        </h1>
        <p className="leading-7 text-center w-[100%] md:w-[60%] text-sm md:text-md">
          Welcome to our dental clinic, where we provide exceptional dental care
          in a comfortable and friendly environment. Book an appointment today!
        </p>
        <div className="flex gap-4 items-center justify-center">
          <Button asChild>
            <Link href="/book">Book Now</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/services">Learn More</Link>
          </Button>
        </div>
      </Wrapper>

      <div className="flex justify-center items-center">
        <Image
          src="/DClinic.jpg"
          alt="Dental Clinic"
          height="1000"
          width="1500"
          priority
        />
      </div>

      <Wrapper className="my-10 max-w-screen-2xl">
        <div className="flex flex-col items-center justify-center md:flex-row gap-4 px-2">
          <div className="flex-1 space-y-6 md:text-left">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
              Transform Your Smile with Our Expert{" "}
              <span className="text-[#00CE8F]">Dental Services</span>
            </h2>
            <p className="leading-6 text-sm">
              Experience exceptional dental care with our comprehensive range of
              services. From general dentistry to cosmetic dentistry and
              orthodontics, we have everything you need to achieve a healthy and
              beautiful smile.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-8">
              <div>
                <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
                  General Dentistry
                </h3>
                <p className="leading-6 text-sm">
                  Regular check-ups, cleanings, and treatments to keep your
                  teeth healthy.
                </p>
              </div>
              <div>
                <h3 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
                  Cosmetic Dentistry
                </h3>
                <p className="leading-6 text-sm">
                  Enhance your smile with teeth whitening, veneers, and smile
                  makeovers.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center my-10">
            <Image
              src="/Orthodontist.jpg"
              alt="Dental Services"
              height="700"
              width="700"
            />
          </div>
        </div>
      </Wrapper>

      <Wrapper className="max-w-screen-2xl my-10">
        <div className="flex flex-col gap-4 w-[100%] md:w-[80%] lg:w-[40%]">
          <p className="leading-6 text-sm font-semibold">
            Your Smile, Our Priority
          </p>
          <h2 className="scroll-m-20 text-4xl  font-semibold tracking-tight">
            Comprehensive{" "}
            <span className="text-[#00CE8F]">Dental Services</span> for the
            Whole Family
          </h2>
          <p className="leading-6 text-sm">
            At our clinic, we offer a wide range of dental services, including
            preventive care, restorative treatments, cosmetic dentistry, and
            more. Our experienced team is committed to providing personalized
            and compassionate care to every patient.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 my-6">
          <div className="flex-1 space-y-6">
            <BriefcaseMedical />
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Preventive Care for Healthy Smiles
            </h4>
            <p className="leading-6 text-sm">
              Regular check-ups and cleanings are essential for maintaining good
              oral health. Our preventive care services help prevent dental
              issues and keep your smile bright and healthy.
            </p>
          </div>
          <div className="flex-1 space-y-6">
            <BriefcaseMedical />
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Emergency Dental Services
            </h4>
            <p className="leading-6 text-sm">
              Dental emergencies can happen at any time. Our experienced team is
              here to provide prompt and effective care when you need it most.
            </p>
          </div>
          <div className="flex-1 space-y-6">
            <BriefcaseMedical />
            <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Specialized Pediatric Dentistry
            </h4>
            <p className="leading-6 text-sm">
              We specialize in pediatric dentistry, creating a comfortable and
              friendly environment for children. Our team is dedicated to
              helping kids develop healthy dental habits and maintain beautiful
              smiles.
            </p>
          </div>
        </div>

        <Button variant="secondary" asChild>
          <Link href="/services">Explore More</Link>
        </Button>
      </Wrapper>

      <Wrapper className="my-10">
        <div className="flex flex-col items-center text-center justify-center gap-6">
          <p className="leading-6 text-sm">Convenient</p>
          <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight">
            Easy and Hassle-Free{" "}
            <span className="text-[#00CE8F]">Appointment Booking</span> Process
          </h2>
          <p className="leading-6 text-sm w-[100%] md:w-[80%]">
            Booking an appointment at our dental clinic is quick and simple.
            Just follow these easy steps: <br />
            1. Fill out the appointment form with your contact details. <br />{" "}
            2. Click &apos;Submit&apos; to confirm your appointment. Our
            friendly staff will then reach out to you to confirm the details.
          </p>
          <div className="flex gap-4 items-center justify-center">
            <Button asChild>
              <Link href="/book">Book Now</Link>
            </Button>
            {/* <Button variant="ghost" asChild>
              <Link href="/services">Learn More</Link>
            </Button> */}
          </div>
          <Image
            src="/Appointment.jpg"
            alt="Dental Appointment"
            height="1000"
            width="1000"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Homepage;
