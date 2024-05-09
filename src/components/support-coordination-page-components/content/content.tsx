import React, { ReactEventHandler } from 'react';
import styles from './content.module.css';
import classNames from 'classnames';
import Button from '../../button/button';
import waves from '../../../assets/images/services/support-coordination/bg.png'
import wavesBlack from '../../../assets/images/services/support-coordination/wavesBlack.png'
import check from '../../../assets/images/svg/check.svg';
import checkBlack from '../../../assets/images/svg/checkBlack.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/types';
const SSupportCoordination: React.FC = () => {

    
    const activeGray = useSelector((state: RootState) => state.activeGray.active);

    return (
        <section className={classNames(styles["services-1267"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-content"])}>
                    <h2 className={classNames(styles["cs-title"], "cs-title")}>Plan Optimization</h2>
                    <p className={classNames(styles["cs-text"], "cs-text")}>We know it can be a challenge to understand and take
                        advantage of everything included in your plan. We aim to ensure you benefit the most
                        from your NDIS plan to purse your needs and goals. We help develop and build your skills and confidence,
                        as well as overall coordinate your supports. We help link you with NDIS providers, other government,
                        or mainstream and community services available to you.</p>
                    <Button text="Get Started" link="/contact-us" extraClass='cta-button'/>
                </div>
                <div className={classNames(styles["cs-wrapper"])}>
                    <ul className={classNames(styles["cs-card-group"])}>


                        <li className={classNames(styles["cs-item"])}>
                            <div className={classNames(styles["cs-li"])}>
                                <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                                <p className={classNames(styles["cs-text"], "cs-text")}>
                                    Identify what is important to you
                                </p>
                            </div>
                            <div className={classNames(styles["cs-li"])}>
                                <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                                <p className={classNames(styles["cs-text"], "cs-text")}>
                                    Navigate you through the NDIS process
                                </p>
                            </div>
                        </li>

                        <li className={classNames(styles["cs-item"])}>
                            <div className={classNames(styles["cs-li"])}>
                                <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                                <p className={classNames(styles["cs-text"], "cs-text")}>
                                Monitor and review your NDIS plan and Budget
                                </p>
                            </div>
                            <div className={classNames(styles["cs-li"])}>
                                <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                                <p className={classNames(styles["cs-text"], "cs-text")}>
                                Select services based on your goals and needs
                                </p>
                            </div>
                        </li>

                        <li className={classNames(styles["cs-item"])}>
                            <div className={classNames(styles["cs-li"])}>
                                <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                                <p className={classNames(styles["cs-text"], "cs-text")}>
                                Negotiate with providers
                                </p>
                            </div>
                            <div className={classNames(styles["cs-li"])}>
                                <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                                <p className={classNames(styles["cs-text"], "cs-text")}>
                                Coordinate Stakeholders involvement
                                </p>
                            </div>
                            <div className={classNames(styles["cs-li"])}>
                                <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                                <p className={classNames(styles["cs-text"], "cs-text")}>
                                Assist with life transitions
                                </p>
                            </div>
                        </li>

                        <li className={classNames(styles["cs-item"])}>
                            <div className={classNames(styles["cs-li"])}>
                                <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                                <p className={classNames(styles["cs-text"], "cs-text")}>
                                Assist with accommodation and/ or in- home support needs
                                </p>
                            </div>
                            <div className={classNames(styles["cs-li"])}>
                                <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                                <p className={classNames(styles["cs-text"], "cs-text")}>
                                Assist with complicated and changing situations
                                </p>
                            </div>
                        </li>

                    </ul>
                    <picture className={classNames(styles["cs-background"])}>
                        <img src={activeGray? wavesBlack :waves} alt="waves" />
                    </picture>
                </div>
            </div>
        </section>


    );

}


export default SSupportCoordination;