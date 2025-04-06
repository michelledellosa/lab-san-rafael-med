import Link from 'next/link';
import React from 'react';
/*import icon1 from '../../../public/assets/img/icon/05.png';
import icon2 from '../../../public/assets/img/icon/06.png';
import icon3 from '../../../public/assets/img/icon/07.png';
import icon4 from '../../../public/assets/img/icon/08.png';*/
import icon1 from '../../../public/assets/img/icon/services-icon.png';
import icon2 from '../../../public/assets/img/icon/location-icon.png';
import icon3 from '../../../public/assets/img/icon/info-icon.png';
import Image, { StaticImageData } from 'next/image';

type FutureType = {
    id: number;
    image: StaticImageData;
    title: string;
    description: string
}
const FutureProductThree = () => {
    const future_product: FutureType[] = [
        {
            id: 1,
            image: icon1,
            title: "Servicios",
            description: "Discover the essence of self-care with our Personal Care Products",
        },
        {
            id: 2,
            image: icon2,
            title: "Ubicacion",
            description: "Elevate your personal care regimen with products for your well-being",
        },
        {
            id: 3,
            image: icon3,
            title: "Sobre Nosotros",
            description: "Elevate your parenting journey with our Baby and Child Care equipment",
        }/*,
        {
            id: 4,
            image: icon4,
            title: "Medical Devices",
            description: "Experience excellence in healthcare with our Medical Devices",
        },*/
    ]

    return (
        <>
            <div className="product-feature-area pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center mb-65">
                                <h2>Features Products</h2>
                                <p>Explore cutting-edge Features in our medical equipment</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            future_product.map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <div className="product-feature-wrapper text-center mb-30">
                                        <div className="p-feature-icon">
                                            <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                        </div>
                                        <div className="p-feature-text">
                                            <Link href="/shop-grid"><h3>{item.title}</h3></Link>
                                            <p>{item.description}</p>
                                            <Link href="/shop-grid"><i className="fal fa-long-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default FutureProductThree;