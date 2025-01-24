"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carousel = ({ type = "nuun" }) => {
    // Data carousels
    const carouselData = {
        exo: [
            { id: 1, image: '/images/foto1.jpeg', title: 'baksos' },
            { id: 2, image: '/images/foto2.jpeg', title: 'baksos' },
            { id: 3, image: '/images/foto3.jpeg', title: 'baksos' },
            { id: 4, image: '/images/foto4.jpeg', title: 'baksos' },
            { id: 5, image: '/images/foto5.jpeg', title: 'baksos' },
            { id: 6, image: '/images/foto6.jpeg', title: 'bukber dan taklim di TPA' },
            { id: 7, image: '/images/foto7.jpeg', title: 'bukber dan taklim di TPA' },
            { id: 8, image: '/images/foto8.jpeg', title: 'bukber dan taklim di TPA' },
            { id: 9, image: '/images/foto9.jpeg', title: 'bukber dan taklim di TPA' },
        ],
        nuun: [
            { id: 1, image: '/images2/bimago/foto1.jpg', title: 'kegiatan belajar mengajar' },
            { id: 2, image: '/images2/bimago/foto2.jpg', title: 'kegiatan belajar mengajar' },
            { id: 3, image: '/images2/bimago/foto3.jpg', title: 'kegiatan belajar mengajar' },
            { id: 4, image: '/images2/bimago/foto4.jpg', title: 'kegiatan belajar mengajar' },
            { id: 5, image: '/images2/bimago/foto5.webp', title: 'kegiatan belajar mengajar' },
            { id: 6, image: '/images2/bimago/foto6.webp', title: 'kegiatan belajar mengajar' },
            { id: 7, image: '/images2/calistung/foto1.jpg', title: 'kegiatan belajar mengajar' },
            { id: 8, image: '/images2/calistung/foto2.jpg', title: 'kegiatan belajar mengajar' },
            { id: 9, image: '/images2/calistung/foto3.jpg', title: 'kegiatan belajar mengajar' },
            { id: 10, image: '/images2/calistung/foto4.jpg', title: 'kegiatan belajar mengajar' },
            { id: 11, image: '/images2/calistung/foto5.jpg', title: 'kegiatan belajar mengajar' },
        ]
    };

    // Pilih data berdasarkan type
    const slides = carouselData[type] || carouselData.nuun;

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            className="rounded"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="w-full h-64 relative group">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-md transition-opacity duration-300 group-hover:bg-black/70">
                            {slide.title}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;