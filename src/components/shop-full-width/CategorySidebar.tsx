import Link from 'next/link';
import React from 'react';

const CategorySidebar = () => {
    return (
        <>
            <div className="category-sidebar cat-side mb-30">
                <h3 className="cat-title">Category</h3>
                <div className="category-item">
                    <ul>
                        <li><Link href="#">Hand Sanitizer</Link></li>
                        <li><Link href="#">Lab N95 Face Mask</Link></li>
                        <li><Link href="#">Hand Gloves</Link></li>
                        <li><Link href="#">Medical Equipment</Link></li>
                        <li><Link href="#">Home Accessories</Link></li>
                        <li><Link href="#">New Arrival Product</Link></li>
                        <li><Link href="#">Special Offers</Link></li>
                        <li><Link href="#">Wheelchair - Disabled</Link></li>
                        <li><Link href="#">Inhaler Pressure Drop</Link></li>
                        <li><Link href="#">Medicine &amp; Helath</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CategorySidebar;