import React, { ReactEventHandler } from 'react';
import styles from './OvalIndependingLiving.module.css';
import classNames from 'classnames';
import imgUrl from '../../../assets/images/services/independent living/man-in-hospital.jpg'
import check from '../../../assets/images/svg/check.svg';
import checkBlack from '../../../assets/images/svg/checkBlack.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/types';

const OvalIndependetLiving: React.FC = () => {

    const activeGray = useSelector((state: RootState) => state.activeGray.active);

    return (

        <section className={classNames(styles['content-page-852'])}>
            <div className={classNames(styles['cs-container'])}>
                <div className={classNames(styles['cs-content'])}>
                    <h1 className={classNames(styles['cs-title'], 'cs-title')}>High Intensity Supports</h1>

                    <p className={classNames(styles['cs-text'], 'cs-text')} >
                        High Intensity supports have their own additional set of requirements. </p>

                    <p className={classNames(styles['cs-text'], 'cs-text')} >
                        At Blossom Care, we take time to understand you, your goals, your medical situation, and daily needs.
                        This deep understanding helps us use this information to tailor our supports to suit you.
                        Our staff are hand selected to match you based on your unique set of supports and requirements. </p>

                    <ul className={classNames(styles["cs-ul"])}>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Complex Bowel Care
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Enteral Feeding Support
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Dysphagia Support
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Ventilator Support
                        </li>

                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Tracheostomy Support
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Urinary Catheter Support
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Subcutaneous Injections
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Complex Wound Care Support
                        </li>

                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Epilepsy and Seizure Support – high risk
                        </li>

                    </ul>


                </div>
                <div className={classNames(styles['cs-image-group'])}>
                    <picture className={classNames(styles['cs-picture'],  activeGray && 'black-pic')}>
                       
                        <img decoding="async" src={imgUrl} alt="Man Using Mobile Phone In Hospital" aria-hidden="true" />
                    </picture>
                </div>
            </div>
        </section>
    );

}

export default OvalIndependetLiving;