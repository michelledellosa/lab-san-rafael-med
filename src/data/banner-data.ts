import { BannerDataType } from "@/interFace/interFace";
import img1 from "../../public/assets/img/banner/01.jpg";
import img2 from "../../public/assets/img/banner/02.jpg";
import img3 from "../../public/assets/img/banner/03.jpg";
import img4 from "../../public/assets/img/banner/04.jpg";
import img5 from "../../public/assets/img/banner/05.jpg";
//home two banner img
import img6 from "../../public/assets/img/banner/b-01.jpg";
import img7 from "../../public/assets/img/banner/b-02.jpg";
import img8 from "../../public/assets/img/banner/b-03.jpg";
//home two banner three img
import img9 from "../../public/assets/img/banner/b-04.jpg";
import img10 from "../../public/assets/img/banner/b-05.jpg";
import img11 from "../../public/assets/img/banner/b-06.jpg";
import img12 from "../../public/assets/img/banner/banner-03.png";

const banner_data: BannerDataType[] = [
    {
        id: 1,
        image: img1,
        title: "Thermometer",
        subTitle: "Digital Meter",
        wrapperClass: "col-xl-4 col-lg-4",
        bannerBtn: "shop now"
    },
    {
        id: 2,
        image: img2,
        title: "Temperature",
        subTitle: "Temperature Gun",
        wrapperClass: "col-xl-4 col-lg-4",
        bannerBtn: "shop now"
    },
    {
        id: 3,
        image: img3,
        title: "Oximeter",
        subTitle: "Pulse",
        wrapperClass: "col-xl-4 col-lg-4",
        bannerBtn: "shop now"
    },
    {
        id: 4,
        image: img4,
        title: "N95 Face Mask",
        subTitle: "Lab Surgery",
        wrapperClass: "col-xl-6 col-lg-6",
        bannerBtn: "shop now"
    },
    {
        id: 5,
        image: img5,
        title: "Hand Gloves",
        subTitle: "Surgery Lab",
        wrapperClass: "col-xl-6 col-lg-6",
        bannerBtn: "shop now"
    },
    //home two banner data 
    {
        id: 6,
        image: img6,
        title: "hair oil",
        subTitle: "Aloe Vera",
        bannerTag: "29",
        desc: "Nourish and revitalize with our Hair",
        bannerBtn: "buy now"
    },
    {
        id: 7,
        image: img12,
        title: "hair oil",
        subTitle: "Aloe Vera",
        bannerTag: "29",
        desc: "Sed ut perspiciatis unde omnis iste natus",
        bannerBtn: "buy now"
    },
    {
        id: 8,
        image: img7,
        title: "Body Lotion",
        subTitle: "Cosmetics",
        bannerBtn: "shop now"
    },
    {
        id: 9,
        image: img8,
        title: "Temperature",
        subTitle: "Sanitizer",
        bannerBtn: "shop now"
    },
    //home-2 banner three data
    {
        id: 10,
        image: img9,
        bannerTag: "20%",
        title: "Lab Face Mask",
        subTitle: "Health Essentials",
        bannerBtn: "shop now"
    },
    {
        id: 11,
        image: img10,
        bannerTag: "10%",
        title: "Hand gloves",
        subTitle: "Protective Gear",
        bannerBtn: "shop now"
    },
    {
        id: 12,
        image: img11,
        bannerTag: "10%",
        title: "Hand Sanitizer",
        subTitle: "Hygiene Essentials",
        bannerBtn: "shop now"
    },
]
export default banner_data;