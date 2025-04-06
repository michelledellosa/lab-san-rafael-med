import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogSidebar from '../blog-grid-sidebar/BlogSidebar';
import PostText from './PostText';
import BlogSocialOrTag from './BlogSocialOrTag';
import PostComments from './PostComments';
import BlogCommentForm from '@/form/block-comment-form';
import Image from 'next/image';
import AuthorImg from "../../../public/assets/img/blog/author.png";
import Link from 'next/link';
import blog_data from '@/data/blog-data';
import { idType } from '@/interFace/interFace';
import InstragramArea from '../home/InstragramArea';

const BlogDetailsMain = ({ id }: idType) => {
    const blog: any = blog_data.find((item) => item.id == id)
    return (
        <>
            <Breadcrumb title='Blog Details' subTitle='Blog Details' />
            <div className="blog-area pt-105 pb-70">
                <div className="container">
                    <div className="row">
                        {/*<BlogSidebar />*/}
                        <div className="col-xl-8 col-lg-8 mb-30">
                            <div className="blog-details blog-standard">
                                <div className="blog-wrapper">
                                    <div className="blog-img pos-rel">
                                        <Image src={blog?.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                    </div>
                                    <div className="blog-text">
                                        <div className="blog-meta">
                                            <span><i className="far fa-calendar-alt"></i>{blog?.date}</span>
                                        </div>
                                        <h4>{blog?.title}</h4>
                                        <p>{blog?.desc}</p>
                                    </div>
                                    <PostText />
                                    <BlogSocialOrTag />
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="navigation-border pt-50 mt-40"></div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="bakix-navigation b-next-post text-left mb-30">
                                                <span><Link href="#">Prev Post</Link></span>
                                                <h4><Link href="#">Tips on Minimalist</Link></h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="bakix-navigation b-next-post text-left text-md-right  mb-30">
                                                <span><Link href="#">Next Post</Link></span>
                                                <h4><Link href="#">Tips on Minimalist</Link> </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="b-author grey-2-bg mt-40 mb-60">
                                        <div className="author-img">
                                            <Image src={AuthorImg} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                        </div>
                                        <div className="author-text">
                                            <h3>MD. Salim Rana</h3>
                                            <p>Greetings, everyone! Today, {`let's`} delve into the fascinating world of medical advancements. From breakthrough treatments to cutting-edge technologies, the medical landscape is evolving at an unprecedented pace. {`It's`} awe-inspiring to witness the strides made in research, pushing the boundaries of {`what's`} possible in healthcare.
                                            </p>
                                            <div className="author-icon">
                                                <Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                                                <Link href="https://www.behance.net/"><i className="fab fa-behance-square"></i></Link>
                                                <Link href="https://www.google.com/"><i className="fab fa-google-plus-g"></i></Link>
                                                <Link href="https://vimeo.com/"><i className="fab fa-vimeo-v"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <PostComments />
                                    <div className="post-comments-form">
                                        <div className="post-comments-title">
                                            <h2>Post Comments</h2>
                                        </div>
                                        <BlogCommentForm />
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

export default BlogDetailsMain;