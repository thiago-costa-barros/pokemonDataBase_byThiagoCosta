import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./PokedexSwiper.css";

// import required modules
import { Pagination } from "swiper";
import Img01 from "../assets/imgs/Pkm-G1.png";
import Img02 from "../assets/imgs/Pkm-G2.png";
import Img03 from "../assets/imgs/Pkm-G3.png";
import Img04 from "../assets/imgs/Pkm-G4.png";
import Img05 from "../assets/imgs/Pkm-G5.png";
import Img06 from "../assets/imgs/Pkm-G6.png";
import Img07 from "../assets/imgs/Pkm-G7.png";
import Img08 from "../assets/imgs/Pkm-G8.png";
import Img09 from "../assets/imgs/Pkm-G9.png";
import { Link } from "react-router-dom";

export default function PokedexSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={2}
                centeredSlides={true}
                loop={true}
                spaceBetween={120}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/generation1'>
                        <img style={{ maxWidth: '320', width: '100%' }} src={Img01} alt="Gen1" />
                        <h2>Kanto</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/generation2'>
                        <img style={{ maxWidth: '320', width: '100%' }} src={Img02} alt="Gen1" />
                        <h2 >Johto</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/generation3'>
                        <img style={{ maxWidth: '320', width: '100%' }} src={Img03} alt="Gen1" />
                        <h2>Hoenn</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/generation4'>
                        <img style={{ maxWidth: '320', width: '100%' }} src={Img04} alt="Gen1" />
                        <h2>Sinnoh</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/generation5'>
                        <img style={{ maxWidth: '320', width: '100%' }} src={Img05} alt="Gen1" />
                        <h2>Unova</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/generation6'>
                        <img style={{ maxWidth: '320', width: '100%' }} src={Img06} alt="Gen1" />
                        <h2>Kalos</h2>
                    </Link>
                </SwiperSlide >
                <SwiperSlide
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/generation7'>
                        <img style={{ maxWidth: '320', width: '100%' }} src={Img07} alt="Gen1" />
                        <h2>Alola</h2>
                    </Link>
                </SwiperSlide >
                <SwiperSlide
                    style={{
                        display: 'flex',

                        flexDirection: 'column'
                    }}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/generation8'>
                        <img style={{ maxWidth: '320', width: '100%' }} src={Img08} alt="Gen1" />
                        <h2>Galar</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to='/generation9'>
                        <img style={{ maxWidth: '320', width: '100%', marginBottom: '-10px' }} src={Img09} alt="Gen1" />
                        <h2 style={{ marginBottom: '40px' }}>Paldea</h2>
                    </Link>
                </SwiperSlide >
            </Swiper >
        </>
    );
}