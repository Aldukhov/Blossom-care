import React, { ReactEventHandler } from 'react';
import classNames from 'classnames';
import styles from './ACTA.module.css';
import Button from '../../button/button';

const ACTA: React.FC = () => {

    return (

        <section className={classNames(styles['cta-1693'])}>
            <div className={classNames(styles['cs-container'])}>
                <div className={classNames(styles['cs-content'])}>
                    <h2 className={classNames(styles['cs-title'],'cs-title')}>Get help from our professionals</h2>
                    <Button text="Get Started" link="/contact-us" extraClass='cta-button'/>
                </div>
            </div>
            
        </section>

    );

}


export default ACTA;
