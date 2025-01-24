"use client"

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";
import {
    Copyright,
    Instagram,
    School,
    BookA,
    HeartHandshake,
    Languages,
    BookCheck,
    Heart,
    MapPinned,
    Phone,
    Mail
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Page = () => {
    const activities = [
        { icon: School, title: "Bimago", description: "Bimbingan masuk Gontor" },
        { icon: BookCheck, title: "Persiapan Tes TOEFL", description: "Belajar materi TOEFL" },
        { icon: BookA, title: "BTA", description: "Program pengajaran baca tulis Al-Quran" },
        { icon: Languages, title: "Belajar Bahasa", description: "Bahasa arab dan inggris" },
        { icon: HeartHandshake, title: "Psikologi", description: "Psikotes, minat bakat dan konsultasi karir" }
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
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 relative"
        >
            <div className="max-w-4xl mx-auto px-4">
                <motion.div variants={itemVariants}>
                    <Card className="mb-8 overflow-hidden shadow-xl border-none bg-white/80 backdrop-blur">
                        <CardContent className="pt-8">
                            <div className="flex flex-col items-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Image
                                        className="rounded-full w-32 h-32 border-4 border-white shadow-lg"
                                        width={128}
                                        height={128}
                                        src={'/assets/nuun.jpeg'}
                                        alt={'Nuun Bimbel Logo'}
                                    />
                                </motion.div>
                                <h1 className="mt-6 text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Nuun Bimbel
                                </h1>
                                <p className="mt-2 text-gray-600 font-medium">Lembaga Pendidikan</p>
                            </div>

                            <div className="mt-8 space-y-4 text-gray-700">
                                <p className="indent-4 leading-relaxed text-lg">
                                    Nuun Bimbel merupakan lembaga pendidikan non formal dibawah naungan Yayasan Nuun Pendidikan & Pelatihan. Selain menyelenggarakan bimbingan belajar seperti bahasa Arab & Inggris, persiapan tes TOEFL, Bimago (Bimbingan masuk Gontor), BTA (baca tulis Al Quran).
                                </p>
                                <p className="indent-4 leading-relaxed text-lg">
                                    Yayasan Nuun juga menyediakan layanan bidang Psikologi, berupa psikotes kesiapan masuk Sekolah, minat bakat penjurusan, serta konsultasi karir.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Card className="mb-8 shadow-xl border-none">
                        <CardHeader>
                            <CardTitle className="text-center text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Program Kegiatan Kami
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {activities.map((activity, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.03 }}
                                        className="p-6 rounded-xl bg-white shadow-lg border-2 border-gray-100 hover:border-blue-200 transition-colors"
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

                <motion.div variants={itemVariants}>
                    <Card className="mb-8 shadow-xl border-none">
                        <CardHeader>
                            <CardTitle className="text-center text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Dokumentasi Kegiatan
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Carousel />
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Card className="mb-20 shadow-xl border-none">
                        <CardContent className="pt-6">
                            <h2 className="font-bold text-xl mb-6 flex items-center gap-2">
                                {/*<Heart className="w-6 h-6 text-red-500 animate-pulse" />*/}
                                Hubungi Kami
                            </h2>
                            <div className="">
                                <Link
                                    href="https://www.instagram.com/nuun_bimbel"
                                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                                >
                                    <Instagram className="text-pink-600 w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <span className="text-lg">@nuun_bimbel</span>
                                </Link>
                                <Link
                                    href="https://maps.app.goo.gl/rXp7jopp1yK78stV7"
                                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                                >
                                    <MapPinned className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform" />
                                    <span className="text-lg">Jl. Mandi Api II No. 1241 Km. 5 Palembang</span>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

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
