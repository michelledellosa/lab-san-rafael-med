import Link from 'next/link';
import React from 'react';

const BlogCategory = () => {
    return (
        <>
            <div className="widget mb-30">
                <h3 className="widget-title">Categories</h3>
                <ul className="blog-side-list">
                    <li>
                        <Link href="/blog-details">Lab N95 Facemask <span>(8)</span> </Link>
                    </li>
                    <li>
                        <Link href="/blog-details">Hand Sanitizer <span>(3)</span> </Link>
                    </li>
                    <li>
                        <Link href="/blog-details">Lab Hand Gloves <span>(5)</span> </Link>
                    </li>
                    <li>
                        <Link href="/blog-details">Surgery Mask <span>(7)</span> </Link>
                    </li>
                    <li>
                        <Link href="/blog-details">Thermometer <span>(10)</span> </Link>
                    </li>
                    <li>
                        <Link href="/blog-details">Temperature Gun <span>(6)</span> </Link>
                    </li>
                    <li>
                        <Link href="/blog-details">Blood Pressure Meter <span>(3)</span> </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default BlogCategory;