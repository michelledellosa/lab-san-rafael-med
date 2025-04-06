import future_data from '@/data/future-data';
import React from 'react';

const BlogThree = () => {
    return (
        <>
            <div className="features-list-area pl-130 pr-130">
                <div className="features-list-wrapper">
                    <div className="row">
                        {
                            future_data.slice(0, 4).map((item) => (
                                <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
                                    <div className="features-single-list">
                                        <div className="irc-item">
                                            <div className="irc-item-icon">
                                                {item.icon && <item.icon />}
                                            </div>
                                            <div className="irc-item-content">
                                                <div className="irc-item-heading">{item.title}</div>
                                                <p>{item.desc}</p>
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

export default BlogThree;