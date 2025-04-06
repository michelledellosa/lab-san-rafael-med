import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CommentImg from '../../../public/assets/img/comment-user/01.png';
import CommentImg2 from '../../../public/assets/img/comment-user/02.png';
import ReviewForm from '@/form/review-form';

const ReviewArea = () => {
    return (
        <div className='tab-pane fade' id="review-id" role="tabpanel" aria-labelledby="reviewid">
            <div className="row">
                <div className="col-md-12 col-xl-12">
                    <div className="review-text mt-30">
                        <div className="product-commnets">
                            <div className="product-commnets-list d-flex  gap-4">
                                <div className="pro-comments-img">
                                    <Image src={CommentImg} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="pro-commnets-text">
                                    <h4>Roger West - <span>Dec 5, 2023</span></h4>
                                    <div className="pro-rating">
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                    </div>
                                    <p>
                                        The quality is exceptional, and it exceeded my expectations. The delivery was prompt, and the customer service was outstanding. The five-star rating is well-deserved. I highly recommend this product to others.
                                    </p>
                                </div>
                            </div>
                            <div className="product-commnets-list d-flex gap-4 mt-30">
                                <div className="pro-comments-img">
                                    <Image src={CommentImg2} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </div>
                                <div className="pro-commnets-text">
                                    <h4>Susan Johnson -
                                        <span>Nov 5, 2023</span>
                                    </h4>
                                    <div className="pro-rating">
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                    </div>
                                    <p>
                                        I cannot express how happy I am with this product. Performance is outstanding. The sleek design and durability make it a standout choice. The ordering process was seamless, and it arrived faster than expected.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="review-box">
                                <h4>Add a Review</h4>
                                <div className="your-rating mb-20">
                                    <span>Your Rating : </span>
                                    <div className="rating-list">
                                        <Link href="#">
                                            <i className='fas fa-star'></i>
                                        </Link>
                                        <Link href="#">
                                            <i className='fas fa-star'></i>
                                        </Link>
                                        <Link href="#">
                                            <i className='fas fa-star'></i>
                                        </Link>
                                        <Link href="#">
                                            <i className='fas fa-star'></i>
                                        </Link>
                                        <Link href="#">
                                            <i className='fas fa-star'></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ReviewForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewArea;