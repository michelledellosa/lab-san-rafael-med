import SocialIcon from '@/layout/social-icon/SocialIcon';
import React from 'react';

const ProductListCategory = () => {
    return (
        <div className="product-02-list">
            <ul>
                <li>
                    <div className="pro-02-list-info f-left">
                        <span>Categories :</span>
                    </div>
                    <div className="pro-02-list-text">
                        <span>Mask, Covid -19, Sanitizer, Facemask</span>
                    </div>
                </li>
                <li>
                    <div className="pro-02-list-info f-left">
                        <span>SKU :</span>
                    </div>
                    <div className="pro-02-list-text">
                        <span>012345</span>
                    </div>
                </li>
                <li>
                    <div className="pro-02-list-info f-left">
                        <span className="pro11">Share Now :</span>
                    </div>
                    <SocialIcon WrapperClass='pro-02-list-icon' />
                </li>
            </ul>
        </div>
    );
};

export default ProductListCategory;