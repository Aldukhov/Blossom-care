import React, { ReactEventHandler } from 'react';
import styles from './NCTA.module.css';
import classNames from 'classnames';
import Button from '../../button/button';

const NCTA: React.FC = () => {

    return (
        <section className={classNames(styles["cta-262"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-left-section"])}>
                    <h2 className={classNames(styles["cs-title"],'cs-title')}>Get expert support from our team</h2>
                   <Button text="Get Started" link="/contact-us" extraClass='cta-button'/>
                </div>
                <div className={classNames(styles["cs-content"])}>
                    <span className={classNames(styles["cs-header"])}>Available Hours</span>
                    <p className={classNames(styles["cs-p"])}>
                        Tuesday, Thursday, Friday: 9am-6pm<br />
                        (closed for lunch 12pm-2pm)
                    </p>
                    
                </div>
                <picture className={classNames(styles["cs-background"])}>
                    <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/CTA/cloth-m.jpg" />
                    <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/CTA/cloth.jpg" />
                    <img aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/CTA/cloth.jpg" alt="appliance" width="275" height="132" />
                </picture>
            </div>
        </section>

    );

}


export default NCTA;
