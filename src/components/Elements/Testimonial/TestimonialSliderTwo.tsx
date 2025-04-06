"use client"
import React from 'react';
import img1 from '../../../../public/assets/img/testimonial/t-1.png';
import img2 from '../../../../public/assets/img/testimonial/shape.png';
import img3 from '../../../../public/assets/img/testimonial/t-02.png';
import img4 from '../../../../public/assets/img/testimonial/001.png';
import img5 from '../../../../public/assets/img/testimonial/002.png';
import Image from 'next/image';
import testimonal_data from '@/data/testimonial-data';
//swiper
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
type GetSpacingProps = {
    wrapperSpacingClass: string
}

const TestimonialSliderTwo = ({ wrapperSpacingClass }: GetSpacingProps) => {
    return (
        <>
            <div className={`testimonial-area pos-rel grey-2-bg ${wrapperSpacingClass}`}>
                <div className="shape d-none d-xl-block">
                    <div className="shape-item test-01 bounce-animate">
                        <Image src={img1} style={{ width: "100%", height: "auto" }} priority alt="image not found" />
                    </div>
                    <div className="shape-item test-02">
                        <Image src={img2} style={{ width: "auto", height: "auto" }} priority alt="image not found" />
                    </div>
                    <div className="shape-item test-03 bounce-animate">
                        <Image src={img3} style={{ width: "100%", height: "auto" }} priority alt="image not found" />
                    </div>
                    <div className="shape-item test-04 bounce-animate">
                        <Image src={img4} style={{ width: "100%", height: "auto" }} priority alt="image not found" />
                    </div>
                    <div className="shape-item test-05 bounce-animate">
                        <Image src={img5} style={{ width: "100%", height: "auto" }} priority alt="image not found" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                            <div className="section-title text-center mb-65">
                                <h2>What Our {`Client’s`} Say</h2>
                                <p>Discover the impact of our medical equipment through firsthand</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-10 col-lg-10 offset-lg-1 offset-xl-1 testimonial-posi">
                            <div className="test-02-active">
                                <Swiper
                                    modules={[Autoplay, Navigation, Pagination]}
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 3000
                                    }}
                                    loop={true}
                                    navigation={{
                                        nextEl: '.tetimonial-btn-prev',
                                        prevEl: '.tetimonial-btn-next',
                                    }}
                                    pagination={{
                                        el: '.testimonial-pagination',
                                        clickable: true,
                                    }}
                                >
                                    {
                                        testimonal_data.slice(4, 8).map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className="client-wrapper pos-rel text-center" >
                                                    <div className="client-img">
                                                        <Image src={item.image} priority style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                    </div>
                                                    <div className="client-icon">
                                                        <i className="fal fa-star"></i>
                                                    </div>
                                                    <div className="client-text">
                                                        <p>{item.desc}</p>
                                                        <h4>{item.title} <span>{item.info}</span></h4>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            <div className="medi-testimonial-arrow-2">
                                <button type="button" className="tetimonial-btn-next">
                                    <i className="fal fa-long-arrow-left"></i>
                                </button>
                                <button type="button" className="tetimonial-btn-prev">
                                    <i className="fal fa-long-arrow-right"></i>
                                </button>
                            </div>
                            <div className="testimonial-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialSliderTwo;