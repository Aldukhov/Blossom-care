import React, { ReactEventHandler } from 'react';
import styles from '../ContentOval.module.css';
import classNames from 'classnames';
import imgUrl from '../../../assets/images/services/disability accomodation/room with table and chair.jpg'
import check from '../../../assets/images/svg/check.svg';
import checkBlack from '../../../assets/images/svg/checkBlack.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/types';

const ContentAccommodation: React.FC = () => {

    const activeGray = useSelector((state: RootState) => state.activeGray.active);

    return (
        <section className={classNames(styles["content-page-1399"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-image-group"])}>
                    <div className={classNames(styles["cs-flex"])}>
                        <picture className={classNames(styles["cs-background"],  activeGray && 'black-pic')}>
                           <img loading="lazy" decoding="async" src={imgUrl} alt="Patient's room is empty" />
                        </picture>

                    </div>

                </div>
                <div className={classNames(styles["cs-content"])}>
                    <h1 className={classNames(styles["cs-title"], "cs-title")}>
                    Tailored SDA: Meet Your High Needs
                    </h1>

                    <p className={classNames("cs-text")}>
                        Specialist Disability Accommodation (SDA) includes housing specifically
                        crafted to cater to individuals with severe functional impairments
                        or exceptionally high needs. Its primary objective
                        is to facilitate easier access to necessary supports.
                    </p>
                    <p className={classNames("cs-text")}>
                        There are 4 design categories which meet NDIS funding eligibility.</p>

                    <ul className={classNames(styles["cs-ul"])}>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Improved liveability
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Fully accessible
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Robust
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            High Supports
                        </li>
                        <p className={classNames("cs-text")}>
                        Your NDIS plan will let you know if you are eligible for SDA funding and design category best suits your needs.</p>
                    </ul>
                </div>
            </div>
            <div className={classNames(styles["cs-bubbles"])} aria-hidden="true"></div>
        </section>

    );

}

export default ContentAccommodation;