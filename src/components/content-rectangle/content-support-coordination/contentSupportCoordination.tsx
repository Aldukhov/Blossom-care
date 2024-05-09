import React, { ReactEventHandler } from 'react';
import styles from '../ContentOval.module.css';
import classNames from 'classnames';
import imgUrl from '../../../assets/images/services/support-coordination/flower boy.jpg'
import check from '../../../assets/images/svg/check.svg';
import checkBlack from '../../../assets/images/svg/checkBlack.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/types';

const ContentSupportCoordination: React.FC = () => {

    const activeGray = useSelector((state: RootState) => state.activeGray.active);

    return (
        <section className={classNames(styles["content-page-1399"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-image-group"])}>
                    <div className={classNames(styles["cs-flex"])}>
                        <picture className={classNames(styles["cs-background"],  activeGray && 'black-pic')}>
                            <img loading="lazy" decoding="async" src={imgUrl} alt="Social inclusion - man with down syndrome working in garden" style = {{objectPosition: 'top'}}/>
                        </picture>

                    </div>

                </div>
                <div className={classNames(styles["cs-content"])}>
                    <h1 className={classNames(styles["cs-title"], "cs-title")}>
                        Support Pathways
                    </h1>

                    <p className={classNames("cs-text")}>
                        Support Coordinators are there to help navigate your NDIS plan. They assist you in how get the most out of your supports.
                        There are three levels of Support Coordination that can be included in your plan.</p>

                    <ul className={classNames(styles["cs-ul"])}>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Support Connection
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Support Coordination
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Specialist Support Coordination
                        </li>

                    </ul>

                </div>
            </div>
            <div className={classNames(styles["cs-bubbles"])} aria-hidden="true"></div>
        </section>

    );

}

export default ContentSupportCoordination;