import Link from 'next/link';
import React from 'react';

const BlogSidebarTag = () => {
    return (
        <>
            <div className="widget">
                <h3 className="widget-title">Popular Tags</h3>
                <div className="tag">
                    <Link href="/blog-details">Cleaning</Link>
                    <Link href="/blog-details">Business</Link>
                    <Link href="/blog-details">Car</Link>
                    <Link href="/blog-details">html</Link>
                    <Link href="/blog-details">House</Link>
                    <Link href="/blog-details">Apartment</Link>
                    <Link href="/blog-details">Washing</Link>
                    <Link href="/blog-details">Agency</Link>
                </div>
            </div>
        </>
    );
};

export default BlogSidebarTag;