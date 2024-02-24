"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Dylan",
        avatar: "D",
        title: "Fuel Dispatching Manager",
        description: "FuelPath has transformed how we schedule deliveries. The route optimization features save us significant time and fuel costs."
    },
    {
        name: "Andre",
        avatar: "A",
        title: "Logistics Coordinator",
        description: "FuelPath is a game-changer for our fuel logistics. Real-time tracking and updates have helped us streamline operations."
    },
    {
        name: "Chris",
        avatar: "C",
        title: "Fuel Depot Supervisor",
        description: "FuelPath has revolutionized how I manage our depot. Its inventory management tools have reduced waste and improved stock accuracy."
    },
    {
        name: "Walter",
        avatar: "W",
        title: "Fuel Pricing Specialist",
        description: "FuelPath is a pivotal tool for determining fuel prices. Its market analysis features give us a competitive edge."
    },
];



export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
}
