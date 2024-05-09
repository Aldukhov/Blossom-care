import React, { ReactEventHandler } from 'react';
import classNames from 'classnames';
import styles from './Hero.module.css';
import Button from '../button/button';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/types';

interface HeroProps {
    title: string;
    imageUrl: string;
    style?: React.CSSProperties;
    alt: string;
}

const Hero: React.FC<HeroProps> = ({ title, imageUrl, style,alt }) => {

    const isContactPage = window.location.pathname === '/contact-us';
    const activeGray = useSelector((state: RootState) => state.activeGray.active);

    return (
        <section className={classNames(styles["hero-1469"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-content"])}>
                    <span className={classNames(styles["cs-topper"], 'cs-topper')}>Disability service</span>
                    <h1 className={classNames(styles["cs-title"])}>
                        {title}
                    </h1>
                    {!isContactPage && <Button text="Get Started" link="/contact-us" extraClass='cta-button' />}
                </div>
            </div>
            
            <picture className={classNames(styles["cs-background"],  activeGray && 'black-pic')}>
                <img decoding="async" src={imageUrl} alt={alt} width="2250" height="1500" aria-hidden="true" style={{ ...style }} />
            </picture>

            <svg className={classNames(styles["cs-curve"])} width="1920" height="136" viewBox="0 0 1920 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1920 136V0C1803.21 45.3334 1445.52 136 951 136C456.485 136 111.116 45.3334 0 0V136H951H1920Z" fill="#fff" />
            </svg>
        </section>


    );

}


export default Hero;
