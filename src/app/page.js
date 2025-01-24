import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Copyright, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const Page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center justify-center relative px-4">
            {/* Header Section */}
            <div className="text-center mb-6 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Gebyar Ramadhan 1446H
                </h1>
                <p className="mt-2 text-gray-700 text-lg">
                    Extraordinary Sumsel <span className="font-serif font-bold mx-1">x</span> Nuun Bimbel
                </p>
            </div>

            {/* Main Card */}
            <Card className="w-full max-w-xl bg-white/95 backdrop-blur-sm shadow-xl mb-12">
                <CardContent className="p-6">
                    {/* Greeting */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                            Assalamualaykum
                        </h2>
                        <p className="text-gray-600">
                            Silahkan pilih menu yang dibutuhkan 😊🙏
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center mb-8">
                        <div className="relative w-48 h-48 md:w-56 md:h-56">
                            <Image
                                src="/assets/home2.png"
                                alt="Ilustrasi"
                                fill
                                className="object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Buttons Grid */}
                    <div className="space-y-4">
                        {/* Primary Button */}
                        <div className="flex justify-center">
                            <Button
                                className="w-full md:w-2/3 bg-blue-600 hover:bg-blue-700 font-serif shadow-md
                                         transition-all duration-300 hover:shadow-lg hover:scale-105"
                                asChild
                            >
                                <Link href="/extraordinary-sumsel" className="flex items-center justify-center gap-2">
                                    Extraordinary Sumsel
                                    <ChevronRight size={18} />
                                </Link>
                            </Button>
                        </div>

                        {/* Secondary Buttons */}
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <Button
                                className="shadow-md font-mono hover:bg-gray-100 transition-all duration-300
                                         hover:shadow-lg hover:scale-105"
                                asChild
                                variant="outline"
                            >
                                <Link href="/detail-kegiatan">Detail Kegiatan</Link>
                            </Button>
                            <Button
                                className="shadow-md font-mono hover:bg-gray-100 transition-all duration-300
                                         hover:shadow-lg hover:scale-105"
                                asChild
                                variant="outline"
                            >
                                <Link href="/nuun-bimbel">Nuun Bimbel</Link>
                            </Button>
                        </div>

                        {/* Bottom Button */}
                        <div className="flex justify-center pt-2">
                            <Button
                                className="w-full md:w-2/3 bg-blue-600 hover:bg-blue-700 font-serif shadow-md
                                         transition-all duration-300 hover:shadow-lg hover:scale-105"
                                asChild
                            >
                                <Link href="/gontor-detail" className="flex items-center justify-center gap-2">
                                    Apa itu Gontor?
                                    <ChevronRight size={18} />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Footer */}
            <footer className="absolute bottom-0 left-0 right-0 p-4 bg-white/50 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 text-gray-700">
                    <Copyright size={16} />
                    <p className="text-sm">2025 - <span className="font-semibold">Exo Team</span></p>
                </div>
            </footer>
        </div>
    );
};

export default Page;