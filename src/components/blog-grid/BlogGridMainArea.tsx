import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import blog_data from '@/data/blog-data';
import PaginationData from '../common/pagination/pagination-data';
import Image from 'next/image';
import InstragramArea from '../home/InstragramArea';

const BlogGridMainArea = () => {
    return (
        <>
            <Breadcrumb title='Blog Grid' subTitle='Blog Grid' />
            <div className="blog-area pt-105 pb-100">
                <div className="container">
                    <div className="row">
                        {
                            blog_data.slice(0, 9).map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <div className="blog-wrapper mb-55">
                                        <div className="blog-img pos-rel">
                                            <Link href={`/blog-details/${item.id}`}>
                                                <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                            </Link>
                                            <span className={`blog-tag ${item.tagClass}`}>{item.blogTag}</span>
                                        </div>
                                        <div className="blog-text">
                                            <div className="blog-meta">
                                                <span><i className="far fa-calendar-alt">
                                                </i> <Link href={`/blog-details/${item.id}`}>{item.date}</Link></span>
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
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="basic-pagination mt-20 basic-pagination-2 text-center">
                                <PaginationData />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InstragramArea />
        </>
    );
};

export default BlogGridMainArea;