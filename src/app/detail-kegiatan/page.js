"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import TimelineFrame from "@/components/TimelineFrame";

const Timeline = ({ children, className }) => <div className={cn("border-l-2 border-gray-200 ml-4", className)}>{children}</div>;

const TimelineItem = ({ children, className }) => (
  <div className={cn("relative pl-8 pb-8", className)}>
    <div className="absolute left-[-10px] top-0 w-4 h-4 rounded-full bg-primary"></div>
    {children}
  </div>
);

const page = () => {
  const timelineData = [
    {
      date: "Januari 2024",
      title: "Memulai Proyek",
      description: "Perencanaan awal dan pembentukan tim",
    },
    {
      date: "Februari 2024",
      title: "Fase Desain",
      description: "Merancang antarmuka pengguna dan prototipe",
    },
    {
      date: "Maret 2024",
      title: "Memulai Pengembangan",
      description: "Membangun backend dan frontend",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-200">
      {/* judul */}
      <div className="bg-white px-3 py-5 md:max-w-2xl mb-4 mx-auto rounded-md shadow-md text-center">
        <h1 className="text-center text-3xl font-semibold text-gray-700">Gebyar Ramadhan 1446H</h1>
        <p className="text-center font-serif">
          Extraordinary Sumsel <span className="font-mono text-md">x</span> Nuun Bimbel
        </p>
        <Badge className="text-center mx-auto mt-4" variant="destructive">
          Dimulai 3 hari lagi
        </Badge>
      </div>

      <div className="bg-white p-4 md:max-w-2xl mx-auto rounded-md shadow-md mt-2">
        <div className="px-2">
          <p className="indent-4 leading-relaxed text-gray-700">
            Gontor merupakan salah satu pondok pesantren terbesar di Indonesia. Berlokasi di sebuah desa di Ponorogo, Jawa Timur, didirikan pada 20 September 1926. Gontor sekarang memiliki 21 cabang yang tersebar dari Sumatera, Jawa, hingga
            Sulawesi.
          </p>
          <h1 className="mt-4 font-semibold text-lg">Bentuk dan Alur Kegiatan</h1>
          <p className="indent-4 leading-relaxed text-gray-700 mt-3">
            Kegiatan ini dimulai pada hari jumat sore, hingga ahad sore, namun peserta boleh memilih opsi untuk tidak menginap dan hanya mengikuti pembelajaran dari pagi hingga sore hari.
          </p>
          <div className="mt-3">
            <Card>
              <CardHeader>
                <CardTitle>Timeline Kegiatan</CardTitle>
              </CardHeader>
              <CardContent>
                <Timeline>
                  {timelineData.map((item, index) => (
                    <TimelineItem key={index}>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardContent>
            </Card>
          </div>
          <h1 className="mt-4 font-semibold text-lg">Timeline Kegiatan Harian</h1>
          <div className="mt-3">
            <TimelineFrame />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 md:max-w-2xl mx-auto rounded-md shadow-md mt-2">
        <h1 className="text-center text-3xl font-semibold text-gray-700">Daftar Pembelajaran</h1>
        <h1 className="text-center text-3xl font-semibold text-gray-700">benefit yang di dapat</h1>
        <h1 className="text-center text-3xl font-semibold text-gray-700">Info pendaftaran</h1>
        <h1 className="text-center text-3xl font-semibold text-gray-700">Info Penting Lainnya</h1>
      </div>
    </div>
  );
};

export default page;
