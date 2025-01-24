"use client"

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";
import { Copyright, Instagram, Users, Calendar, BookOpen, Heart, MapPin } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Page = () => {
    const activities = [
        { icon: Users, title: "Bakti Sosial", description: "Program bantuan ke panti asuhan" },
        { icon: Calendar, title: "Buka Bersama", description: "Kegiatan buka puasa di TPA" },
        { icon: BookOpen, title: "Mengajar Mengaji", description: "Program pengajaran Al-Quran" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50 py-12 relative"
        >
            <div className="max-w-4xl mx-auto px-4">
                {/* Profile Section */}
                <motion.div variants={itemVariants}>
                    <Card className="mb-8 overflow-hidden hover:shadow-xl transition-all duration-500 border-none">
                        <CardContent className="pt-8">
                            <div className="flex flex-col items-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative"
                                >
                                    <Image
                                        className="rounded-full w-32 h-32 border-4 border-white shadow-lg"
                                        width={128}
                                        height={128}
                                        src={'/assets/extrataqwa.jpeg'}
                                        alt={'Extraordinary Sumsel Logo'}
                                    />
                                    <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white">
                                        Est. 2022
                                    </Badge>
                                </motion.div>
                                <h1 className="mt-6 text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Extraordinary Sumsel
                                </h1>
                                <div className="flex items-center gap-2 mt-2">
                                    {/*<MapPin className="w-4 h-4 text-gray-500" />*/}
                                    <p className="text-gray-600 text-center">Alumni Pondok Modern Darussalam Gontor</p>
                                </div>
                            </div>

                            <div className="mt-8 space-y-4 text-gray-700">
                                <p className="indent-4 leading-relaxed text-lg">
                                    Extraordinary Sumsel adalah kumpulan lulusan dari Pondok Modern Darussalam Gontor tahun 2022 yang berasal dari daerah Sumatera Selatan.
                                </p>
                                <p className="indent-4 leading-relaxed text-lg">
                                    Dalam 2 tahun terakhir ini, kami aktif mengadakan kegiatan bersama yang melibatkan masyarakat maupun diantara kami, salah satunya adalah program baksos ke panti asuhan dan buka bersama di salah satu TPA, serta mengajar mengaji.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Activities Section */}
                <motion.div variants={itemVariants}>
                    <Card className="mb-8 hover:shadow-xl transition-all duration-500 border-none">
                        <CardHeader>
                            <CardTitle className="text-center text-2xl">Program Kegiatan Kami</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {activities.map((activity, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="p-6 rounded-xl bg-white shadow-lg border-2 border-gray-100"
                                    >
                                        <activity.icon className="w-10 h-10 text-blue-600 mb-4" />
                                        <h3 className="font-bold text-lg mb-2">{activity.title}</h3>
                                        <p className="text-gray-600">{activity.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Carousel Section */}
                <motion.div variants={itemVariants}>
                    <Card className="mb-8 hover:shadow-xl transition-all duration-500 border-none">
                        <CardHeader>
                            <CardTitle className="text-center text-2xl">Dokumentasi Kegiatan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Carousel type={"exo"} />
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Social Media Section */}
                <motion.div variants={itemVariants}>
                    <Card className="mb-20 hover:shadow-xl transition-all duration-500 border-none">
                        <CardContent className="pt-6">
                            <h2 className="font-bold text-xl mb-6 flex items-center gap-2">
                                {/*<Heart className="w-6 h-6 text-red-500 animate-pulse" />*/}
                                Ikuti Kami
                            </h2>
                            <Link
                                href="https://www.instagram.com/extrasumsel"
                                className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                            >
                                <Instagram className="text-pink-600 w-6 h-6 group-hover:scale-110 transition-transform" />
                                <span className="text-lg">@extrasumsel</span>
                            </Link>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-100">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Copyright size={16} />
                    <p className="text-sm">2025 - <span className="font-bold">Exo Team</span></p>
                </div>
            </footer>
        </motion.div>
    );
};

export default Page;
