import React, { ReactEventHandler } from 'react';
import styles from '../ContentOval.module.css';
import classNames from 'classnames';
import imgUrl from '../../../assets/images/services/independent living/girl-playing-the-piano.jpg'

const ContentIndepLiving: React.FC = () => {

    return (
        <section className={classNames(styles["content-page-1399"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-image-group"])}>
                    <div className={classNames(styles["cs-flex"])}>
                        <picture className={classNames(styles["cs-background"])}>
                            <img loading="lazy" decoding="async" src={imgUrl} alt="Mother and daughter playing piano" />
                        </picture>

                    </div>

                </div>
                <div className={classNames(styles["cs-content"])}>
                    <h1 className={classNames(styles["cs-title"], "cs-title")}>
                        What is
                        Supported Independent Living?
                    </h1>

                    <p className={classNames("cs-text")}>
                        Supported Independent Living also known as SIL is a part of your NDIS package.
                        It allows to assist people living with disability to live as independently as
                        possible whether that setting maybe living with others in a group setting or on your own.</p>
                    <p className={classNames("cs-text")}>
                        SIL can include support & services such as domestic duties,
                        personal care or even assisting with your appointments.</p>

                    <p className={classNames("cs-text")}>
                        Everyone is different and we understand that!
                        This is why we work with you or your loved ones to understand what is important to you.</p>

                    <ul className={classNames(styles["cs-ul"])}>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Individual goals
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Health and medical needs
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Assistance for community involvement
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Interests and hobbies
                        </li>

                    </ul>
                </div>
            </div>
            <div className={classNames(styles["cs-bubbles"])} aria-hidden="true"></div>
        </section>

    );

}

export default ContentIndepLiving;