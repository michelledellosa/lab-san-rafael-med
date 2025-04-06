import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import PaginationData from '../common/pagination/pagination-data';
import blog_data from '@/data/blog-data';
import Image from 'next/image';
import InstragramArea from '../home/InstragramArea';

const BlogGridSidebarMain = () => {
    return (
        <>
            <Breadcrumb title='Blog Grid Sidebar' subTitle='Blog Grid' />
            <div className="blog-area pt-105 pb-70">
                <div className="container">
                    <div className="row">
                        <BlogSidebar />
                        <div className="col-xl-8 col-lg-8 mb-30">
                            <div className="row blog-grid">
                                {
                                    blog_data.slice(0, 8).map((item) => (
                                        <div className="col-xl-6 col-lg-6 col-md-6" key={item.id}>
                                            <div className="blog-wrapper mb-55">
                                                <div className="blog-img pos-rel">
                                                    <Link href={`/blog-details/${item.id}`}>
                                                        <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                                    </Link>
                                                    <span className={`blog-tag ${item.tagClass}`}>{item.blogTag}</span>
                                                </div>
                                                <div className="blog-text">
                                                    <div className="blog-meta">
                                                        <span><i className="far fa-calendar-alt"></i>
                                                            <Link href={`/blog-details/${item.id}`}>{item.date}</Link></span>
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
                                    <div className="basic-pagination basic-pagination-2">
                                        <PaginationData />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <InstragramArea />
        </>
    );
};

export default BlogGridSidebarMain;