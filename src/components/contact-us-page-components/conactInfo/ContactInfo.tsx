import classNames from 'classnames';
import React from 'react';
import styles from './ContactInfo.module.css'
import { email, phoneNumber } from '../../../utils/constants';

const Info: React.FC = () => {
    return (
        <div className={classNames(styles["contact-strip-1111"])}>
            <ul className={classNames(styles["cs-stat-group"])}>
                <li className={classNames(styles["cs-item"])}>
                    <picture className={classNames(styles["cs-picture"])}>
                        <img className={classNames(styles["cs-icon"])} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-phone.svg" alt="icon" width="35" height="40" loading="lazy" decoding="async" aria-hidden="true" />
                    </picture>
                    <div className={classNames(styles["cs-flex-group"])}>
                        <span className={classNames(styles["cs-header"])}>Phone</span>
                        <a href={`tel:${phoneNumber}`} className={classNames(styles["cs-link"])}>{phoneNumber}</a>
                    </div>
                </li>
                <li className={classNames(styles["cs-item"])}>
                    <picture className={classNames(styles["cs-picture"])}>
                        <img className={classNames(styles["cs-icon"])} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-email.svg" alt="icon" width="40" height="35" loading="lazy" decoding="async" aria-hidden="true" />
                    </picture>
                    <div className={classNames(styles["cs-flex-group"])}>
                        <span className={classNames(styles["cs-header"])}>Email</span>
                        <a href={`mailto:${email}`} className={classNames(styles["cs-link"])}>{email}</a>
                    </div>
                </li>
                <li className={classNames(styles["cs-item"])}>
                    <picture className={classNames(styles["cs-picture"])}>
                        <img className={classNames(styles["cs-icon"])} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-pin.svg" alt="icon" width="40" height="40" loading="lazy" decoding="async" aria-hidden="true" />
                    </picture>
                    <div className={classNames(styles["cs-flex-group"])}>
                        <span className={classNames(styles["cs-header"])}>Open hour</span>
                        <span className={classNames(styles["cs-address"])}>Monday To Friday</span>
                        <span className={classNames(styles["cs-address"])}>8.00 AM - 4.00 PM</span>
                    </div>
                </li>
            </ul>
           
        </div>


    );
}

export default Info;