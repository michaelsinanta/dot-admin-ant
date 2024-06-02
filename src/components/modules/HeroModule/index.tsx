"use client";
import { Button } from "antd";
import Image from "next/image";
import { GithubOutlined, MediumOutlined } from "@ant-design/icons";
export default function Hero() {
  return (
    <div
      id="home"
      className="relative bg-white overflow-hidden justify-center items-center h-full"
    >
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full h-full">
        <div className="relative pt-6"></div>
        <main className="relative flex flex-col justify-center items-center h-full">
          <div className="sm:text-center lg:text-left lg:ml-12">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline text-[40px]">
                  Hello, my name is{" "}
                </span>{" "}
                <br />
                <span className="block text-indigo-600 xl:inline text-[50px]">
                  Michael Christlambert Sinanta
                </span>
            </h1>
            <p className="mt-3 z-10 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Hello! &#128075; I’m a computer science student at the University
              of Indonesia. I have a passion for Software Engineering (Web &
              Mobile Development) and Artificial Intelligence.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start items-center justify-center space-x-5">
              <Button
                href="https://docs.google.com/document/d/1A4mlQ1-j0SZFmTY0rfyBLOm5zMKrg6j8VZgNAP2Uz_Q/edit?usp=sharing"
                type="primary"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Download CV
              </Button>
              <a href="https://github.com/michaelsinanta">
                <GithubOutlined style={{ fontSize: "250%", color: "gray" }} />
              </a>
              <a href="https://medium.com/@michael.christlambert.s.564">
                {" "}
                <MediumOutlined style={{ fontSize: "250%", color: "gray" }} />
              </a>
            </div>
          </div>
        </main>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-full w-full">
          <Image
            src="/assets/foto-diri.jpeg"
            alt="Michael's Photo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
