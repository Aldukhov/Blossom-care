import React, { ReactEventHandler } from 'react';
import classNames from 'classnames';
import styles from './Services.module.css';
import Card from '../card/Card';
import { services } from '../../../utils/constants';

const Services: React.FC = () => {

    return (

        <>

            <section className={classNames(styles["services-1495"])}>
                <div className={classNames(styles["cs-container"])}>
                    <div className={classNames(styles["cs-content"])}>
                        <h2 className={classNames(styles["cs-title"], 'cs-title')}>Our services</h2>

                    </div>
                    <ul className={classNames(styles["cs-card-group"])}>
                        {services.map((service, index) => (
                            <Card key={index} img={service.img} header={service.header} link={service.link} alt={service.alt}/>
                        ))}
                    </ul>
                </div>

                <svg className={classNames(styles["cs-hills"])} width="1920" height="259" viewBox="0 0 1920 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 473H0V124.393C156.322 88.8155 463.597 0 932.085 0C1327.14 0 1826.24 60.6607 1920 124.393V473Z" fill="var(--hillBG)" />
                </svg>
            </section>

        </>
    );

}


export default Services;
