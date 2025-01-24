"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {Card, CardContent} from "@/components/ui/card";
import {Copyright, Heart, Instagram, MapPinned, SquareChartGantt} from "lucide-react";
import Link from "next/link";

// Facts array remains the same

const facts = [
    {
        title: "Didirikan oleh Tiga Tokoh Visioner",
        content:
            "Pondok Modern Darussalam Gontor didirikan oleh tiga bersaudara, yaitu KH. Ahmad Sahal, KH. Zainuddin Fananie, dan KH. Imam Zarkasyi, pada tahun 1926. Mereka dikenal sebagai Trimurti dan memiliki visi untuk menciptakan pesantren yang memadukan pendidikan agama dengan wawasan modern.",
    },
    {
        title: "Menggunakan Sistem Pendidikan Modern",
        content:
            "Gontor memperkenalkan sistem pendidikan klasikal dengan kurikulum yang menggabungkan ilmu agama (diniyyah) dan ilmu umum. Sistem ini menjadi pelopor bagi banyak pesantren lain di Indonesia.",
    },
    {
        title: "Bahasa Arab dan Inggris sebagai Bahasa Resmi",
        content:
            "Di Gontor, santri diwajibkan menggunakan Bahasa Arab dan Bahasa Inggris dalam kehidupan sehari-hari. Ini bertujuan untuk membangun kemampuan komunikasi global para santri.",
    },
    {
        title: "Pendidikan Mandiri dan Disiplin Tinggi",
        content:
            "Santri diajarkan untuk mandiri dalam berbagai aspek, termasuk mencuci baju, memasak, hingga mengelola kegiatan di pondok. Gontor juga terkenal dengan kedisiplinannya yang tinggi, baik dalam akademik maupun perilaku.",
    },
    {
        title: "Berlandaskan Lima Jiwa Pondok",
        content:
            "Pondok Gontor memiliki lima nilai inti yang dikenal sebagai 'Panca Jiwa': Keikhlasan, Kesederhanaan, Kemandirian, Ukhuwah Islamiyah, dan Kebebasan Berpikir. Nilai-nilai ini menjadi pedoman hidup santri dalam setiap aktivitas.",
    },
    {
        title: "Jaringan Alumni yang Luas dan Berpengaruh",
        content:
            "Alumni Gontor tersebar di berbagai bidang, seperti pendidikan, politik, dakwah, hingga ekonomi. Beberapa tokoh terkenal alumni Gontor adalah Ahmad Fuadi dan Hidayat Nur Wahid",
    },
    {
        title: "Menyelenggarakan Kegiatan Internasional",
        content:
            "Gontor sering menjadi tuan rumah berbagai kegiatan internasional, termasuk konferensi antar-ulama, perlombaan debat bahasa Arab/Inggris, dan program pertukaran budaya.",
    },
    {
        title: "Menerapkan Konsep Kemandirian Ekonomi",
        content:
            "Gontor memiliki banyak unit usaha untuk mendukung operasional pondok, seperti percetakan, toko, koperasi, dan bahkan perusahaan air mineral 'Darussalam'. Semua unit ini juga menjadi sarana pembelajaran praktis bagi santri.",
    },
    {
        title: "Mengelola Banyak Cabang",
        content:
            "Pondok Modern Darussalam Gontor kini memiliki lebih dari 20 cabang yang tersebar di berbagai daerah di Indonesia. Setiap cabang tetap mengacu pada sistem dan nilai-nilai yang sama seperti di pusat.",
    },
    {
        title: "Motto yang Menginspirasi",
        content:
            'Motto Gontor adalah: "Berdiri di Atas dan untuk Semua Golongan." Artinya, Gontor menerima semua santri tanpa memandang latar belakang etnis, budaya, maupun organisasi Islam tertentu.',
    },
];

const Page = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen py-8 px-4 bg-gradient-to-b from-gray-50 to-gray-100 relative"
        >
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-8"
                >
                    <Badge className="mb-4" variant="secondary">Est. 1926</Badge>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Pondok Modern Darussalam Gontor
                    </h1>
                    <p className="text-gray-600">Berdiri di Atas dan untuk Semua Golongan</p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Card className="overflow-hidden mb-8">
                        <div className="relative h-[400px]">
                            <Image
                                src="/assets/gontor.jpeg"
                                fill
                                style={{objectFit: "cover"}}
                                alt="foto gontor"
                                className="transition-transform hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <p className="indent-4 leading-relaxed text-gray-700">
                                Gontor merupakan salah satu pondok pesantren terbesar di Indonesia.
                                Berlokasi di sebuah desa di Ponorogo, Jawa Timur, didirikan pada 20
                                September 1926. Gontor sekarang memiliki 21 cabang yang tersebar
                                dari Sumatera, Jawa, hingga Sulawesi.
                            </p>
                        </div>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Card className="p-6 mb-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Fakta Menarik Seputar Gontor
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {facts.map((fact, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index + 1}`}
                                    className="border-b border-gray-200"
                                >
                                    <AccordionTrigger className="hover:text-blue-600 transition-colors">
                                        {fact.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-700">
                                        {fact.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Card>
                </motion.div>
            </div>
            <footer className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-1 text-gray-600">
                    <Copyright size={16}/>
                    <p className="text-sm">2025 - <span className="font-semibold">Exo Team</span></p>
                </div>
            </footer>
            <Card className="mb-16 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                    <h2 className="font-semibold mb-4 flex items-center gap-2">
                        More About Gontor
                    </h2>
                    <Link
                        href="https://www.instagram.com/pondok.modern.gontor"
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                    >
                        <Instagram className="text-pink-600" />
                        <span className="font-serif">@pondok.modern.gontor</span>
                    </Link>
                    <Link
                        href="https://gontor.ac.id/"
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                    >
                        <SquareChartGantt className="text-blue-500" />
                        <span className="font-serif">Website resmi</span>
                    </Link>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default Page;
