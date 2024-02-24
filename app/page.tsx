"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { LandingContent } from "@/components/testimonials";

export const LandingHero = () => {

    return (
        <main className="h-full bg-[#111827] overflow-auto">
            <Navbar/>
            <div className="text-white font-bold py-36 text-center space-y-5">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-center">
                    <div className="flex items-center justify-center space-x-2">
                        <Image src="/road2.png" alt="Road Icon" width={100} height={80} />
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400">
                            FuelPath
                        </h1>
                    </div>
                </div>

                <div className="text-3xl">
                    <h2>Fuel Quotes Without The Hassle</h2>
                </div>
                <div className="text-sm md:text-xl font-light text-zinc-400">
                    Smooth Ordering and Delivery Simplified
                </div>
                <div>
                    <Link legacyBehavior href="/registration">
                        <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                            Sign up
                        </Button>
                    </Link> 
                    
                </div>
            </div>
            <LandingContent/>
            <footer className="bg-[#111827] py-6">
                <div className="container mx-auto text-center text-white">
                    <div className="flex justify-center space-x-6">
                        <Link legacyBehavior href="/about">
                            <a className="hover:text-gray-300">About</a>
                        </Link>
                        <Link legacyBehavior href="/contact">
                            <a className="hover:text-gray-300">Contact Us</a>
                        </Link>
                    </div>
                </div>
            </footer> 
            
        </main>
    );
}

export default LandingHero;