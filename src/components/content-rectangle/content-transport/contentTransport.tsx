import React, { ReactEventHandler } from 'react';
import styles from '../ContentOval.module.css';
import classNames from 'classnames';
import imgUrl from '../../../assets/images/services/transport/the man helps old man.jpg';

const ContentTransport: React.FC = () => {

    return (
        <section className={classNames(styles["content-page-1399"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-image-group"])}>
                    <div className={classNames(styles["cs-flex"])}>
                        <picture className={classNames(styles["cs-background"])}>
                            <img loading="lazy" decoding="async" src={imgUrl} alt="Senior man going to in his wheelchair outside"/>
                        </picture>

                    </div>

                </div>
                <div className={classNames(styles["cs-content"])}>
                    <h1 className={classNames(styles["cs-title"], "cs-title")}>
                        Accessible Transport Solutions
                    </h1>

                    <p className={classNames("cs-text")}>
                        We understand the importance of safe and reliable transport. Transport that will get you to your scheduled appointments & commitments on time.

                        Your NDIS plan may include transport as part of your package. There are three levels of transport funding. Which will be indicated in your plan.

                        Need to arrange a regular pick up and drop off? Or thinking of taking a longer trip?
                    </p>

                    <ul className={classNames(styles["cs-ul"])}>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Safe
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Reliable
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Dealing with your providers to keep you on track
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            On Time
                        </li>



                    </ul>

                </div>
            </div>
            <div className={classNames(styles["cs-bubbles"])} aria-hidden="true"></div>
        </section>

    );

}

export default ContentTransport;