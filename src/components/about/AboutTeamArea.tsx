import team_data from '@/data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutTeamArea = () => {
    return (
        <>
            <div className="team-area pt-100 pb-70">
                <div className="container">
                    <div className="row mb-35">
                        <div className="col-xl-6 col-lg-6 col-md-7">
                            <div className="section-title mb-30">
                                <h2>Meet Our Doctors</h2>
                                <p>Discover a team of dedicated professionals at Medical Equipment</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-5">
                            <div className="team-button mt-10 text-md-right mb-30">
                                <Link href="/team" className="c-btn">view all doctors <i className="far fa-plus"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            team_data.slice(0, 3).map((item) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                    <div className="team-wrapper mb-30">
                                        <div className="team-img-1">
                                            <Link href={`/team-details/${item.id}`}>
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} priority alt="image not found" />
                                            </Link>
                                        </div>
                                        <div className="inner-team text-center">
                                            <div className="team-icon-1">
                                                <Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                                                <Link href="https://www.google.com/"><i className="fab fa-google"></i></Link>
                                            </div>
                                            <div className="team-text">
                                                <Link href={`/team-details/${item.id}`}> <h4>{item.title}</h4></Link>
                                                <span>{item.info}</span>
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

export default AboutTeamArea;