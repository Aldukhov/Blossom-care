import React, { ReactEventHandler } from 'react';
import styles from '../ContentOval.module.css';
import classNames from 'classnames';
import photo from '../../../assets/images/services/community participation/women-sitting-in-a-cafe.jpg'
const ContentCommunityParticipation: React.FC = () => {

    return (
        <section className={classNames(styles["content-page-1399"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-image-group"])}>
                    <div className={classNames(styles["cs-flex"])}>
                        <picture className={classNames(styles["cs-background"])}>
                            <img loading="lazy" decoding="async" src={photo} alt="people" width="542" height="728" />
                        </picture>

                    </div>

                </div>
                <div className={classNames(styles["cs-content"])}>
                    <h1 className={classNames(styles["cs-title"], "cs-title")}>
                        Social Inclusion
                    </h1>

                    <p className={classNames("cs-text")}>
                        Community Participation is a key component of the National Disability Insurance Scheme (NDIS)
                        which is funded by the Australian Government. Community
                        participating encourages and enables people with disability to meet people with similar interests,
                        being a part of and enjoying social and community activities.</p>
                    <p className={classNames("cs-text")}>
                        Whether you enjoy a drive to explore your local park, shopping the days away,
                        meeting friends or attending your local club, we can assist you!
                        We want to know what is important to you and how we can best
                        help to provide you with a great day doing things that you enjoy most.</p>


                    <ul className={classNames(styles["cs-ul"])}>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Aid in participating in community events and joining groups
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Encouragement for engaging in the community and volunteering
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Encourage and assist with suitable work placement
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Assistance for transportation to community and social events
                        </li>
                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Help in enhancing social skills and forming connections
                        </li>

                        <li className={classNames(styles["cs-li"])}>
                            <img className={classNames(styles["cs-icon"])} aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/green-check.svg" alt="checkmark" width="24" height="24" />
                            Support for peer mentoring and advocacy efforts
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classNames(styles["cs-bubbles"])} aria-hidden="true"></div>
        </section>

    );

}

export default ContentCommunityParticipation;