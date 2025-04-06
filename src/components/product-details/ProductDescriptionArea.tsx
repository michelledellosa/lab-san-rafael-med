import React from 'react';
import BannerImg from '../../../public/assets/img/products/pr-banner.png';
import Image from 'next/image';
import Link from 'next/link';
import ReviewArea from './ReviewArea';

const ProductDescriptionArea = () => {
    return (
        <>
            <section className="product-desc-area pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 mb-30">
                            <div className="bakix-details-tab">
                                <ul className="nav text-center pb-10 mb-30" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <button className="nav-link active" id="desc-tab" data-bs-toggle="tab" data-bs-target="#id-desc" role="tab"
                                            aria-controls="home" aria-selected="true">Description </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" id="id-add-in" data-bs-toggle="tab" data-bs-target="#id-add" role="tab"
                                            aria-controls="profile" aria-selected="false">Additional Info</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" id="reviewid" data-bs-toggle="tab" data-bs-target="#review-id" role="tab"
                                            aria-controls="profile" aria-selected="false">Reviews</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="id-desc" role="tabpanel" aria-labelledby="desc-tab">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="event-text">
                                                <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque
                                                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni doloreos qui ratione voluptatem sequi
                                                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor siconsectetur, adipisci velit, sed quia non numquam
                                                    eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                                    reprehenderit qui in ea voltate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                                                    voluptas nulla pariatu</p>
                                                <p>nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor siconsectetur, adipisci velit, sed quia non numquam
                                                    eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                                    reprehenderit qui in ea voltate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                                                    voluptas nulla pariatu</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="id-add" role="tabpanel" aria-labelledby="id-add-in">
                                    <div className="additional-info">
                                        <div className="table-responsive">
                                            <h4>Additional information</h4>
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th>Weight</th>
                                                        <td className="product_weight">1.4 oz</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Dimensions</th>
                                                        <td className="product_dimensions">62 × 56 × 12 in</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Size</th>
                                                        <td className="product_dimensions">XL, XXL, LG, SM, MD</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <ReviewArea />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="product-desc-imgmb-30">
                                <Link href="/shop-grid"><Image src={BannerImg} style={{ width: "auto", height: "auto" }} alt="image not found" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDescriptionArea;