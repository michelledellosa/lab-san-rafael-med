import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RecentNewsSidebar = () => {
    return (
        <>
            <ul className="recent-posts">
                {
                    blog_data.slice(9, 12).map((item) => (
                        <li key={item.id}>
                            <div className="widget-posts-image">
                                <Link href={`/blog-details/${item.id}`}>
                                    <Image src={item.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
                                </Link>
                            </div>
                            <div className="widget-posts-body">
                                <h6 className="widget-posts-title">
                                    <Link href={`/blog-details/${item.id}`}>{item.title}</Link></h6>
                                <div className="widget-posts-meta">{item.date}</div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default RecentNewsSidebar;