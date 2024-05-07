import React, { ReactEventHandler } from 'react';
import styles from './blogContent.module.css';
import classNames from 'classnames';
import Button from '../button/button';
import { phoneNumber } from '../../utils/constants';
import phoneSvg from '../../assets/images/svg/phone.svg';

const BlogContent: React.FC = () => {

    return (
        <section className={classNames(styles["content-page-1399"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-content"])}>
                    <h1 className={classNames(styles["cs-title"], "cs-title")}>
                        Thinking of joining us?
                    </h1>

                    <p className={classNames("cs-text")}>
                        Thank you for considering Blossom Care Disability Services, we take our role in your journey seriously. We hope that our participant handbook which we created for you will help answer all your important questions. The participant handbook is part of our onboarding documents and will cover our obligations and our role in supporting and upholding the NDIS rules and guidelines.
                    </p>
                    <p className={classNames("cs-text")}>
                        In our handbook you will find information such as:
                    </p>
                    <p className={classNames("cs-text")}>
                        Policies such as our Participant Rights and Responsibility Charter and our commitment to supporting your rights.
                    </p>
                    <p className={classNames("cs-text")}>
                        Our Decision Making and Choice Policy and Procedure will
                        let you know more about our approach to encouraging and enabling
                        participants to make decisions, and having regard for dignity of risk in relation to those decisions.
                    </p>
                    <p className={classNames("cs-text")}>
                        The Participant Charter will outline our full commitment to upholding the rights of all people,
                        including those with disabilities. As well as our commitment to ensuring you are aware
                        of your rights and responsibilities and are supported to exercise them.
                    </p>
                    <p className={classNames("cs-text")}>
                        You can also read all about the Protecting Participants from Harm Policy and Procedure.
                        It will show our moral, ethical and legal responsibility to ensure all participants are safe.
                        And the proactive steps we take to protect participants from harm.
                    </p>
                    <p className={classNames("cs-text")}>
                        Our participant handbook is designed to keep you informed and an easy way to access your rights.
                    </p>
                    <p className={classNames("cs-text")}>
                        Additionally, as part of our commitment to always delivering safe and high-quality services our
                        Annual Satisfaction Survey will allow you to provide us with your feed back so we can continuously
                        improve and grow as an organisation.
                    </p>
                    <p className={classNames("cs-text")}>
                        Your peace of mind is our priority and we look forward to welcoming you onboard and answering any questions you may have.
                    </p>

                </div>
                <div className={classNames(styles["button-box-1483"])}>
                    <a className={classNames(styles["cs-link"])} href={`tel:${phoneNumber}`}>
                        <picture className={classNames(styles["cs-wrapper"])}>
                            <img className={classNames(styles["cs-icon"])} loading="lazy" decoding="async" src={phoneSvg} alt="icon" width="24" height="24" />
                        </picture>
                        <div className={classNames(styles["cs-info"])}>
                            <span className={classNames(styles["cs-phone"])}>{phoneNumber}</span>
                            <span className={classNames(styles["cs-link-content"])}>Call to questions</span>
                        </div>
                    </a>

                    <Button text="Discuss your needs" link="/contact-us" extraClass='cta-button'/>
                </div>
            </div>



            <div className={classNames(styles["cs-bubbles"])} aria-hidden="true"></div>
        </section>

    );

}

export default BlogContent;