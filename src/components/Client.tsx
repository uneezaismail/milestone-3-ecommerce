"use client";

import React from "react";
import ClientCard from "./cards/ClientCard";
import { clientdata } from "./data/clientdata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Client = () => {
  return (
    <section className="py-28 bg-[#F8F9Fb] flex flex-col items-center gap-y-10">
      {/* Header */}
      <div className="gap-y-4 flex flex-col items-center">
        <h4 className="text-2xl md:text-4xl text-gray-700">What Our Clients Say</h4>
        <hr className="h-[3px] w-20 bg-blue-600 mt-6" />
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-7xl px-4"
      >
        {clientdata.map((client, i) => (
          <SwiperSlide key={i}>
            <ClientCard
              image={client.image}
              text={client.text}
              name={client.name}
              place={client.place}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Client;
