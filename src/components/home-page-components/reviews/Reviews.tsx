import React, { ReactEventHandler } from 'react';
import classNames from 'classnames';
import styles from './Reviews.module.css';
import Quote from '../quote/Quote';


const Reviews: React.FC = () => {

    return (
        <section className={styles["reviews-1397"]}>
            <div className={styles["cs-container"]}>
                <div className={styles["cs-content"]}>
                    <h2 className={classNames(styles["cs-title"], 'cs-title')}>Happy Client’s Feedback About Our Service</h2>
                </div>
                <ul className={styles["cs-card-group"]}>
                    <Quote />
                    <Quote />
                </ul>
            </div>
            <div className={styles["cs-bubbles"]} aria-hidden="true"></div>
        </section>

    );

}


export default Reviews;
