import React, { ReactEventHandler } from 'react';
import styles from '../ContentOval.module.css';
import classNames from 'classnames';
import imgUrl from '../../../assets/images/services/Nursing care/doctor with men.jpg'
import check from '../../../assets/images/svg/check.svg';
import checkBlack from '../../../assets/images/svg/checkBlack.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/types';

const ContentNursingCare: React.FC = () => {

    const activeGray = useSelector((state: RootState) => state.activeGray.active);
    
    return (
        <section className={classNames(styles["content-page-1399"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-image-group"])}>
                    <div className={classNames(styles["cs-flex"])}>
                        <picture className={classNames(styles["cs-background"],  activeGray && 'black-pic')}>
                            <img loading="lazy" decoding="async" src={imgUrl} alt="Kind nurse and disabled man talking while using wheelchair"/>
                        </picture>

                    </div>

                </div>
                <div className={classNames(styles["cs-content"])}>
                    <h1 className={classNames(styles["cs-title"], "cs-title")}>
                        Health Support
                    </h1>

                    <p className={classNames("cs-text")}>
                    Community Nursing Care offer important healthcare assistance to individuals, 
                    whether for short-term or long-term care. 
                    Our dedicated team of experienced nurses is committed to addressing individuals' 
                    unique healthcare needs and delivering personalised care based to their specific requirements. 
                    From medication management, 
                    wound care to health assessments and education, we provide comprehensive range of support.</p>

                    <ul className={classNames(styles["cs-ul"])}>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Bowel Management
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Complex Wound Care management
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Mealtime Management
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Staff training
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Palliative Care
                        </li>

                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Health Assessment
                        </li>
                    </ul>
                    <p className={classNames("cs-text")}>
                    How can you access Community Nursing Service?</p>
                    <ul className={classNames(styles["cs-ul"])}>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            A referral from your GP
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Hospital Discharge planner
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Treating Doctor / Medical Practitioner in Hospital
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classNames(styles["cs-bubbles"])} aria-hidden="true"></div>
        </section>

    );

}

export default ContentNursingCare;