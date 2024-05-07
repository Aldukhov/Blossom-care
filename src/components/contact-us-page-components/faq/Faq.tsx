import classNames from 'classnames';
import React from 'react';
import styles from './Faq.module.css'


const Faq: React.FC = () => {
    return (
        <section className={classNames(styles["faq-326"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-content"])}>
                    <h2 className={classNames(styles["cs-title"],"cs-title")}>Frequently Asked Questions</h2>
                </div>
                <div className={classNames(styles["cs-flex-group"])}>
                    <ul className={classNames(styles["cs-faq-group"])}>
                        {/* Active class added as default */}
                        <li className={classNames(styles["cs-faq-item"], styles["active"])}>
                            <button className={classNames(styles["cs-button"])}>
                                <span className={classNames(styles["cs-button-text"])}>
                                    What is the difference between a lawyer and an attorney?
                                </span>
                            </button>
                            <p className={classNames(styles["cs-item-p"],'cs-text')}>
                                In the U.S., the terms lawyer and attorney are often used interchangeably. A lawyer provides legal services such as giving legal advice, writing legal documents and providing policy counsel to governments. An attorney, on top of these things also holds a state or regional license to represent clients in a law court.
                            </p>
                        </li>
                        <li className={classNames(styles["cs-faq-item"])}>
                            <button className={classNames(styles["cs-button"])}>
                                <span className={classNames(styles["cs-button-text"])}>
                                    How do I get started?
                                </span>
                            </button>
                            <p className={classNames(styles["cs-item-p"],'cs-text')}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim ipsum porta enim, magna urna, quam.
                            </p>
                        </li>
                        <li className={classNames(styles["cs-faq-item"])}>
                            <button className={classNames(styles["cs-button"])}>
                                <span className={classNames(styles["cs-button-text"])}>
                                    I'm New to the United States and Need an Attorney. Can I Hire a Stitch Lawyer Instead?
                                </span>
                            </button>
                            <p className={classNames(styles["cs-item-p"],'cs-text')}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim ipsum porta enim, magna urna, quam.
                            </p>
                        </li>
                        <li className={classNames(styles["cs-faq-item"])}>
                            <button className={classNames(styles["cs-button"])}>
                                <span className={classNames(styles["cs-button-text"])}>
                                    What Do Lawyers Do? Do They Spend Most of Their Time Arguing Cases in Court?
                                </span>
                            </button>
                            <p className={classNames(styles["cs-item-p"],'cs-text')}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim ipsum porta enim, magna urna, quam.
                            </p>
                        </li>
                        <li className={classNames(styles["cs-faq-item"])}>
                            <button className={classNames(styles["cs-button"])}>
                                <span className={classNames(styles["cs-button-text"])}>
                                    May a Lawyer Who Is Licensed in One State Practice Law in Another State?
                                </span>
                            </button>
                            <p className={classNames(styles["cs-item-p"],'cs-text')}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis nunc neque, bibendum pulvinar vitae commodo velit. Proin diam tortor sed malesuada nunc, habitant. Dignissim ipsum porta enim, magna urna, quam.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    );
}

export default Faq;