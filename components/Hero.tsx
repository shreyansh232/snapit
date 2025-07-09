import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import HeroAnimations from "./HeroAnimations";

const Hero = async () => {
  const getSession = async () => {
    try {
      const session = await auth.api.getSession({ headers: await headers() });
      return session;
    } catch (error) {
      return console.log("Error getting session", error);
    }
  };

  const session = await getSession();
  const isAuthenticated = !!session;

  return (
    <div className="w-full h-screen flex justify-center">
      <HeroAnimations>
        <div className="flex flex-col gap-3 mt-20 px-8 items-center">
          <div className="max-w-5xl">
            <div data-animate="title">
              <h1 className="text-black text-5xl lg:text-7xl font-bold text-center leading-tight">
                Instant Video Recording and Sharing for Fast-Paced Teams
              </h1>
            </div>
            
            <div data-animate="subtitle">
              <p className="text-gray-700 text-base lg:text-xl text-center leading-relaxed">
                Create professional screen recordings, webcam videos, and
                presentations in seconds. Share instantly with your team or clients.
              </p>
            </div>
            
            <div data-animate="buttons" className="flex gap-2 justify-center mt-2 record">
              <Link href={isAuthenticated ? "/videos" : "/sign-in"}>
                <button className="group primary-btn px-10 py-4 flex items-center gap-2">
                  Get Started
                  <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </button>
              </Link>
              <button className="secondary-btn px-10 py-4">Watch Demo</button>
            </div>
          </div>
          
          <div data-animate="image" className="mt-5 rounded-2xl p-1 bg-black shadow-2xl shadow-pink-100">
            <Image
              src={"/assets/images/hero.png"}
              alt="hero"
              width={1300}
              height={1300}
              className="rounded-xl"
            />
          </div>
        </div>
      </HeroAnimations>
    </div>
  );
};

export default Hero;
