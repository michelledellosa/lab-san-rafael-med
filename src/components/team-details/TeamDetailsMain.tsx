import Link from 'next/link';
import React from 'react';
import Progressbar from './Progressbar';
import { idType } from '@/interFace/interFace';

import Image from 'next/image';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import InstragramArea from '../home/InstragramArea';
import team_data from '@/data/team-data';
import SocialIcon from '@/layout/social-icon/SocialIcon';

const TeamDetilsMain = ({ id }: idType) => {
    const team: any = team_data.find((item) => item.id == id);

    return (
        <>
            <Breadcrumb title='Team Details' subTitle='Team Details' />
            <div className="service-details-area pt-135 p-rel pb-135">
                <div className="container p-rel">
                    <div className="service-details-content">
                        <div className="service-details-top mb-45">
                            <span className="zom-details-subtitle">{team?.info}</span>
                            <h3 className="zom-details-title">{team?.title}</h3>
                        </div>
                        <div className="service-author-biography">
                            <div className="row align-items-center ">
                                <div className="col-xxl-6 col-xl-6 col-lg-7">
                                    <div className="author-biography-thumb mb-30 mb-lg-0">
                                        {team?.image &&
                                            <Image
                                                src={team.image}
                                                style={{ width: "100%", height: "auto" }}
                                                alt="image not found"
                                            />
                                        }
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-5">
                                    <div className="single-author-biography-info biography-info-space pl-40">
                                        <h3 className="single-author-biography-title">Biography</h3>
                                        <p className="single-author-biography-desc">
                                            Lost the plot James Bond say burke skive offs spiffing
                                            dropped
                                            <br /> a clanger, me old mucker absolutely.
                                        </p>
                                        <div className="single-author-biography-address-list">
                                            <ul>
                                                <li>
                                                    <i className="fal fa-phone"></i>
                                                    <Link href="tel:+53684956245">+(536) 84 95 62 45</Link>
                                                </li>
                                                <li>
                                                    <i className="fal fa-envelope"></i> {" "}
                                                    <Link href="mailto:pabloinfo@gmail.com" target='_blank'>
                                                        pabloinfo@gmail.com
                                                    </Link>
                                                </li>

                                                <li>
                                                    <i className="fal fa-map-marker-alt"></i>
                                                    <Link href="#">56785 Brainson Street New York, USA</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <SocialIcon WrapperClass='single-author-biography-social mb-45' />
                                        <Progressbar />
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

export default TeamDetilsMain;