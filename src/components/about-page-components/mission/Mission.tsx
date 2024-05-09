import React, { ReactEventHandler } from 'react';
import classNames from 'classnames';
import styles from './Mission.module.css';
import Button from '../../../components/button/button';
import imgUrl from '../../../assets/images/about us/section.jpg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/types';
const Mission: React.FC = () => {

    const activeGray = useSelector((state: RootState) => state.activeGray.active);

    return (

        <section className={classNames(styles['sbs-867'])}>
            <div className={classNames(styles['cs-container'])}>
                <picture className={classNames(styles['cs-picture'],  activeGray && 'black-pic')}>
                    <img loading="lazy" decoding="async" src={imgUrl} alt="sectiob"/>
                </picture>
                <div className={classNames(styles['cs-content'])}>                    
                    <h2 className={classNames(styles['cs-title'],'cs-title')}>Our Mission</h2>
                    <p className={classNames(styles['cs-text'],'cs-text')}>
                        At Blossom Care Disability Services our mission is to foster a supportive
                        and inclusive community that enables individuals with disabilities to lead independent, fulfilling lives.
                        We are driven by the belief that
                        everyone deserves the chance to thrive, and we work tirelessly to create an environment
                        where potential knows no boundaries.</p>
                </div>
            </div>
        </section>

    );

}


export default Mission;
