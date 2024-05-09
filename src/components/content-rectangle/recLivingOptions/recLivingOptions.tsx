import React, { ReactEventHandler } from 'react';
import styles from './recLivingOptions.module.css';
import classNames from 'classnames';
import  imgUrl from '../../../assets/images/services/living options/Entering-the-New-House.jpg'
import check from '../../../assets/images/svg/check.svg';
import checkBlack from '../../../assets/images/svg/checkBlack.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/types';

const RecLivingOptions: React.FC = () => {

    const activeGray = useSelector((state: RootState) => state.activeGray.active);

    return (
        <section className={classNames(styles["content-page-1399"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-image-group"])}>
                    <div className={classNames(styles["cs-flex"])}>
                        <picture className={classNames(styles["cs-background"],  activeGray && 'black-pic')}>
                            <img loading="lazy" decoding="async" src={imgUrl} alt="Happy group of friends of different ethnicities is entering the new house" style={{objectPosition: 'bottom'}}/>
                        </picture>

                    </div>

                </div>
                <div className={classNames(styles["cs-content"])}>
                    <h1 className={classNames(styles["cs-title"], "cs-title")}>
                        Personalized Independence
                    </h1>

                    <p className={classNames("cs-text")}>
                        Individualised Living Options (ILO) also commonly know as drop in supports
                        is a living arrangement that has a strong emphasis on the individual.
                        These are flexible packages which are tailored to the individual and reflected in your NDIS plan.</p>
                    <p className={classNames("cs-text")}>
                        ILO allows you to access assistance with choice and control over when and where you receive supports.
                        Whether you live alone or in a group setting, we can help!</p>

                    <p className={classNames("cs-text")}>
                        We ensure you are at the core of your tailored support by knowing your
                        unique requirements and help you design a plan taking
                        in considering your daily life challenges and your goals.</p>

                    <ul className={classNames(styles["cs-ul"])}>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Our job is to make your life easier.
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Experience childcare as it should be.
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            We are childcare professionals.
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Digital Clean Checklist Prepared New Year
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src={activeGray? checkBlack : check} alt="checkmark" width="24" height="24" />
                            Babysitting with immense love and care.
                        </li>
                    </ul>
                    <p className={classNames("cs-text")}>
                        Develop skills for life!</p>

                </div>
            </div>
            <div className={classNames(styles["cs-bubbles"])} aria-hidden="true"></div>
        </section>

    );

}

export default RecLivingOptions;