import React, { ReactEventHandler } from 'react';
import classNames from 'classnames';
import styles from './Stats.module.css';
import Button from '../../button/button';
import experience from '../../../assets/images/about us/svg/experience-information-knowledge-svgrepo-com.svg';
import location from '../../../assets/images/about us/svg/location-pin-alt-svgrepo-com.svg';
import ethical from '../../../assets/images/about us/svg/ethical.svg';
import team from '../../../assets/images/about us/svg/team-group-svgrepo-com.svg';

const Stats: React.FC = () => {

    return (

        <section className={classNames(styles['timeline-971'])}>
            <div className={classNames(styles['cs-container'])}>
                <div className={classNames(styles['cs-content'])}>
                    <h2 className={classNames(styles['cs-title'], 'cs-title')}>Building Trust Through Experience and Ethical Values</h2>
                    <p className={classNames(styles['cs-text'], 'cs-text')}>
                        At Blossom Care Disability Services, we are not just caregivers; we are advocates,
                        champions, and partners in the journey towards empowerment.
                        Join us in creating a future where abilities are celebrated,
                        opportunities are abundant, and every person, regardless of ability,
                        can live a life filled with dignity and joy.
                    </p>
                </div>
                <ul className={classNames(styles['cs-card-group'])}>
                    <li className={classNames(styles['cs-item'])}>
                        <img src={experience} alt="icon" className={classNames(styles['cs-icon'])} aria-hidden="true" decoding="async" width="60" height="60" />
                        <h3 className={classNames(styles['cs-h3'])}>27 Years+ of Experience <br></br><br></br></h3>
                        <p className={classNames(styles['cs-text'], 'cs-text')}>
                            With over two decades of experience, we have honed our skills to provide top-notch services 
                            tailored to the unique needs of each individual. Our journey has been marked by milestones of success, 
                            and our dedication to continuous improvement ensures that we stay at the forefront of innovative care practices.
                        </p>
                    </li>
                    <li className={classNames(styles['cs-item'])}>
                        <img src={location} alt="icon" className={classNames(styles['cs-icon'])} aria-hidden="true" decoding="async" width="60" height="60" />
                        <h3 className={classNames(styles['cs-h3'])}>Sydney-Based Excellence</h3>
                        <p className={classNames(styles['cs-text'], 'cs-text')}>
                            Nestled in the vibrant city of Sydney, we are deeply connected to our community.
                            Our roots run deep, and our commitment to making a positive impact on the lives of our fellow Sydneysiders is at the core of everything we do.
                            We take pride in being an integral part of this diverse and dynamic city.
                        </p>
                    </li>
                    <li className={classNames(styles['cs-item'])}>
                        <img src={ethical} alt="icon" className={classNames(styles['cs-icon'])} aria-hidden="true" decoding="async" width="60" height="60" />
                        <h3 className={classNames(styles['cs-h3'])}>Ethical Values <br></br><br></br></h3>
                        <p className={classNames(styles['cs-text'], 'cs-text')}>
                            Ethics are not just a part of our business – they are the foundation on which we build trust and lasting relationships.
                            We uphold the highest ethical standards in all our interactions, ensuring transparency, integrity,
                            and accountability in every aspect of our work.
                            Your trust in us is sacred, and we strive to earn it every day.
                        </p>
                    </li>
                    <li className={classNames(styles['cs-item'])}>
                        <img src={team} alt="icon" className={classNames(styles['cs-icon'])} aria-hidden="true" decoding="async" width="60" height="60" />
                        <h3 className={classNames(styles['cs-h3'])}>Experienced and Compassionate Team</h3>
                        <p className={classNames(styles['cs-text'], 'cs-text')}>
                            Our success is attributed to the incredible team of compassionate and devoted
                            individuals who form the backbone of Blossom Care Disability Services.
                            From our experienced professionals to our dedicated support staff,
                            each member shares a common goal: to make a positive impact on the lives of those we serve.
                        </p>

                    </li>
                </ul>
            </div>
        </section>

    );

}


export default Stats;
