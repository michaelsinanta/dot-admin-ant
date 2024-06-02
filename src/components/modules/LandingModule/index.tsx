"use client";

import Head from "next/head";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Lottie from "lottie-react";
import Books from "../../../../public/assets/lottie/books-1.json";
import Connect from "../../../../public/assets/lottie/connect.json";
import Info from "../../../../public/assets/lottie/info.json";
import Quiz from "../../../../public/assets/lottie/quiz.json";
import Hero from "../HeroModule";

export default function LandingPage() {
  const router = useRouter();

  return (
    <>
      <main className="flex flex-col overflow-y-scroll">
        {/* Hero */}
        <Hero />
        <div className="flex items-center justify-center min-h-screen px-[10vw] bg-[#E24E42]">
          <div className="flex flex-col items-center text-white">
            <h1 className="text-center">Launch Your Career</h1>
            <h2 className="italic text-primary mb-10 text-center">
              Find Your Dream Internship Today!
            </h2>
            <Button
              type="primary"
              onClick={() => {
                void router.push("/intern");
              }}
            >
              <h3>Find Your Vacancy</h3>
            </Button>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-center justify-center bg-primary text-center text-white min-h-screen bg-[#E98000] px-[10vw]">
          <div className="container flex flex-col md:flex-row">
            <Lottie animationData={Books} className="" />
            <div className="flex flex-col justify-center md:max-w-[60%]">
              <h2 className="flex-wrap font-bold pb-5">Welcome to JobStreet</h2>

              <p>
                Your gateway to exciting internship opportunities! Whether you
                are a student eager to gain hands-on experience or a recent
                graduate looking to kickstart your career, we got you covered.
                Explore a wide range of internships in various industries and
                start making your mark in the professional world.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col items-center justify-center bg-primary text-center text-white min-h-screen bg-red-500 px-[10vw]">
          <h2 className="container mb-12 text-center">
            By joining an internship through JobStreet, you will:
          </h2>
          <div className="container flex flex-col justify-center gap-x-12 md:flex-row">
            <div className="w-full">
              <div className="mx-auto w-[20%] md:w-[50%]">
                <Lottie animationData={Quiz} />
              </div>
              <p>Gain valuable hands-on experience in your chosen field.</p>
            </div>
            <div className="w-full">
              <div className="mx-auto w-[20%] md:w-[50%]">
                <Lottie animationData={Info} />
              </div>
              <p>
                Develop skills and knowledge that will set you apart in the job
                market.
              </p>
            </div>
            <div className="w-full">
              <div className="mx-auto w-[20%] md:w-[50%]">
                <Lottie animationData={Connect} />
              </div>
              <p>
                Expand your professional network and connect with industry
                experts.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center bg-primary text-center text-white min-h-screen bg-[#E98000] px-[10vw]">
          <div className="container mb-12 text-center">
            <h1>Ready to embark on your internship journey?</h1>
            <h3>Register Now</h3>
          </div>
        </div>
      </main>
    </>
  );
}
