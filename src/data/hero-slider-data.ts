import { HeroDataType } from '@/interFace/interFace';
import image1 from '../../public/assets/img/slider/01.jpg';
//import image2 from '../../public/assets/img/slider/02.png';
import image2 from '../../public/assets/img/laboratory/blood-1.png';
//import image3 from '../../public/assets/img/slider/03.png';
import image3 from '../../public/assets/img/laboratory/slider-logo.png';
import image4 from '../../public/assets/img/hero-slider/slider-1.png';
import image5 from '../../public/assets/img/hero-slider/slider-2.png';
import image6 from '../../public/assets/img/hero-slider/slider-3.png';
import Image7 from '../../public/assets/img/hero-slider/01.png';
//import image8 from '../../public/assets/img/slider/04.png';
import image8 from '../../public/assets/img/laboratory/ambulatory-3.png';

const hero_data: HeroDataType[] = [
    //home-1 data
    {
        id: 1,
        image: image5,
        info: "Health products",
        title: "Vector medical instruments",
        desc: "Precision, Innovation, Trust. Elevate healthcare standards with our cutting-edge equipment",
    },
    {
        id: 2,
        image: Image7,
        info: "Wellness products",
        title: "Face Mask Thermometer",
        desc: "Introducing our Face Mask Thermometer, a revolutionary medical device for contactless",
    },
    {
        id: 3,
        image: image4,
        info: "Medistore products",
        title: "Digital medical Thermometer",
        desc: "Elevate temperature monitoring with our Digital Medical Thermometer. Fast, and user-friendly,",
    },
    {
        id: 4,
        image: image6,
        info: "Medical Equipment products",
        title: "Face Mask Thermometer",
        desc: "Quis autem vel eum iure reprehenin voluptate velit esse quam nihil molestiae conse",
    },
    //end
    //home-3 data
    {
        id: 5,
        image: image1,
        imageTwo: image3,
        info: "Sobre nosotros",
        title: "Lab. San Rafael",
        desc: "Somos Centro Médico y Laboratorio Clínico. Contamos con una gran variedad de especialidades y amplia experiencia en la prestación de servicios en el area de la salud.",
        price: 89
    },
    {
        id: 6,
        image: image1,
        imageTwo: image8,
        info: "Dirección",
        title: "Ubícanos",
        desc: "Estamos ubicados en el esta bolivar, Ciudad Guayana, Puerto Ordaz, sector core-8 Avenida-2",
        price: 99
    },
    {
        id: 7,
        image: image1,
        imageTwo: image2,
        info: "Nuestros Servicios",
        title: "Servicios",
        desc: "Ofrecemos una gran variedad de servicios para la realizacion de los examenes que necesites.",
        price: 199
    },

    {
        id: 7,
        image: image1,
        imageTwo: image8,
        info: "Sobre nosotros",
        title: "Lab. San Rafael",
        desc: "Somos Centro Médico y Laboratorio Clínico. Contamos con una gran variedad de especialidades y amplia experiencia en la prestación de servicios en el area de la salud.",
        price: 89
    },

]

export default hero_data;