import React, { ReactEventHandler } from 'react';
import styles from '../ContentOval.module.css';
import classNames from 'classnames';
import imgUrl from '../../../assets/images/services/plan managment/secondpaperwork.jpg'
import check from '../../../assets/images/svg/check.svg';
import checkBlack from '../../../assets/images/svg/checkBlack.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/types';

const ContentPlanManagment: React.FC = () => {

    const activeGray = useSelector((state: RootState) => state.activeGray.active);

    return (
        <section className={classNames(styles["content-page-1399"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-image-group"])}>
                    <div className={classNames(styles["cs-flex"])}>
                        <picture className={classNames(styles["cs-background"],  activeGray && 'black-pic')}>
                            <img loading="lazy" decoding="async" src={imgUrl} alt="Two people are making business notes"/>
                        </picture>

                    </div>

                </div>
                <div className={classNames(styles["cs-content"])}>
                    <h1 className={classNames(styles["cs-title"], "cs-title")}>
                        NDIS Сare
                    </h1>

                    <p className={classNames("cs-text")}>
                        NDIS plans can be managed in 3 ways, choosing a plan manager ensures
                        you maximise your plan and really allows
                        you choice and control through a wider range of providers which are available to you.</p>
                    <p className={classNames("cs-text")}>
                        Choosing us as your plan manager is similar to having your accountant assisting with your finances,
                        with the added benefit that our services are fully funded by the NDIS.
                        While you maintain complete control over your budgets,
                        we handle all your NDIS invoices and provide support to improve your financial management skills,
                        ensuring responsible allocation and expenditure of your funds.</p>

                    <p className={classNames("cs-text")}>
                        Let us take the complexity out of your budget!</p>

                    <p className={classNames("cs-text")}>
                        We assist you with: </p>

                    <ul className={classNames(styles["cs-ul"])}>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Managing, monitoring, and reviewing your budget
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Fast and responsive invoice payments
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Dealing with your providers to keep you on track
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Flexibility to use more providers (not only NDIS approved providers which are restricted to under NDIA -agency managed)
                        </li>



                    </ul>

                </div>
            </div>
            <div className={classNames(styles["cs-bubbles"])} aria-hidden="true"></div>
        </section>

    );

}

export default ContentPlanManagment;