import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogAreaOne = () => {
    return (
        <>
            <div className="blog-area pt-105 pb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center mb-65">
                                <h2>Latest News & Blog</h2>
                                <p>Stay informed with our Latest News & Blog on medical equipment</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            blog_data && blog_data.slice(0, 3).map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <div className="blog-wrapper mb-30">
                                        <div className="blog-img pos-rel">
                                            <Link href={`/blog-details/${item.id}`}>
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                            </Link>
                                            <span className={`blog-tag ${item.tagClass}`}>{item.blogTag}</span>
                                        </div>
                                        <div className="blog-text">
                                            <div className="blog-meta">
                                                <span><i className="far fa-calendar-alt"></i> <Link href={`/blog-details/${item.id}`}>{item.date}</Link></span>
                                            </div>
                                            <h4><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h4>
                                            <p>{item.desc}</p>
                                            <div className="b-button gray-b-button">
                                                <Link href={`/blog-details/${item.id}`}>read more <i className="far fa-plus"></i></Link>
                                            </div>
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

export default BlogAreaOne;