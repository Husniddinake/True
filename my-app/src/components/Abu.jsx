import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import bir from '../assets/01_rec.svg'
import iki from '../assets/00_rec.svg'
import fit from '../assets/TRUE Fitness.mp4';
import beg from '../assets/begavoy.webp';
import sil from '../assets/silavoy.webp';
import tur from '../assets/turnik.webp';

const slides = [
  {
    title: 'TRUE FITNESS',
    subtitle: 'СОВРЕМЕННОЕ И НАДЁЖНОЕ ОБОРУДОВАНИЕ ДЛЯ ФИТНЕС-КЛУБОВ',
    extra: 'КАРДИО ТРЕНАЖЕРЫ',
    img: beg,
  },
  {
    title: 'СИЛОВАЯ ЛИНИЯ',
    subtitle: 'ЭФФЕКТИВНАЯ И ЭРГОНОМИЧНАЯ НАГРУЗКА',
    extra: 'ТРЕНАЖЕРЫ ДЛЯ ЗАЛОВ',
    img: sil,
  },
  {
    title: 'УНИВЕРСАЛЬНЫЕ ТРЕНАЖЁРЫ',
    subtitle: 'ПРОЧНЫЕ, НАДЁЖНЫЕ, ФУНКЦИОНАЛЬНЫЕ',
    extra: 'РАБОТАЕТ ДЛЯ ВСЕХ',
    img: tur,
  },
];

const HeroSlider = () => {
  const videoRef = useRef(null);

  return (
    <main>
  
      <div className="relative w-full h-[700px]">
        <video
          ref={videoRef}
          src={fit}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            TRUE FITNESS — ПРЕМИУМ-ТРЕНАЖЕРЫ ИЗ США
          </h1>
        </div>

        <div className="bg-[#01AEE7] p-10">
          <hr className="max-w-[300px] mx-auto pb-5 border-white" />
          <h1 className="text-center text-white text-[26px] leading-tight">
            TRUE — ведущий мировой <br /> производитель премиального <br /> фитнес-оборудования
          </h1>
          <hr className="max-w-[300px] mx-auto mt-5 border-white" />
        </div>
      </div>

      <div className="w-full bg-white py-12 pt-60">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20">
                {/* Текст */}
                <div className="lg:w-1/2 text-left mb-10 lg:mb-0">
                  <h1 className="text-[36px] lg:text-[48px] font-bold text-black leading-tight">
                    <span className="block">
                      {slide.title.split(' ')[0]}{' '}
                      <span className="text-[#01AEE7]">{slide.title.split(' ')[1]}</span>
                    </span>
                  </h1>
                  <hr className='font-bold text-[#FFD700] w-60' />
                  <p className="mt-4 text-[20px] font-semibold text-black leading-snug">
                    {slide.subtitle}
                  </p>
                  <p className="mt-2 text-[#01AEE7] text-[20px] font-semibold">
                    {slide.extra}
                  </p>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                  <img src={slide.img} alt="Тренажёр" className="max-w-[500px] w-full object-contain" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      <div className='flex text-white justify-evenly'>

        <div className=''>
          <div className={`bg-[url(${bir})] z-10 p-5 m-3`} style={{ backgroundImage: `url(${bir})`}}>
            <h1 className='text-[35px]'>Лучшие <br /> характеристики</h1>
            <hr className='font-bold text-[#FFD700] w-60 mb-5 mt-2' />
            <p className='text-[#F5F5F5] text-[20px]'>Наши тренажеры имеют самые совершенные <br /> характеристики в классе, от более мощных технических <br /> показателей до расширенных функциональных <br />возможностей</p>
          </div>
          <div className='bg-[#01AEE7] p-5 m-3'>
            <h1 className='text-[20px]'>ВЫСОКОЕ КАЧЕСТВО И <br /> НАДЕЖНОСТЬ</h1>
            <hr className='font-bold text-[#FFD700] w-60 mb-5 mt-2' />
            <p className="text-[#FFFFFF] text-[18px]">Высокое качество тренажеров - это визитная карточка <br /> TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на <br />кардиотренажеры.</p>

          </div>
        </div>

        <div className=''>
          <div className='bg-[#01AEE7] p-5 m-3' >
            <h1 className='text-[20px]'>Низкая СТОИМОСТЬ <br /> ВЛАДЕНИЕ</h1>
            <hr className='font-bold text-[#FFD700] w-60 mb-5 mt-2' />
            <p className="text-[#FFFFFF] text-[18px]">Надежность оборудования обеспечивает низкие затраты <br /> на сервисное обслуживание, так по стоимости затрат на <br />эксплуатацию TRUE выигрывает у конкурентов.</p>

          </div>

          <div className={`bg-[url(${iki})] z-10 p-5 m-3`} style={{ backgroundImage: `url(${iki})`}}>
            <h1 className='text-[35px]'>КАЧЕСТВЕННЫЕ И <br /> ОПЕРАТИВНЫЙ СЕРВИС</h1>
            <hr className='font-bold text-[#FFD700] w-60 mb-5 mt-2' />
            <p className='text-[#F5F5F5] text-[20px]'>Оборудование должно работать бесперебойно, поэтому <br /> мы уделяем особое внимание наличию всех необходимых <br /> запчастей и высокой срочности технического <br /> реагирования.</p>
          </div>
          
        </div>

      </div>
    </main>
  );
};

export default HeroSlider;
