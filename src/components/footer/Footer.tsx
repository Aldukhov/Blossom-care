import React, { ReactEventHandler, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Footer.module.css';
import { phoneNumber, email } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../services/types';
import { useNavigate, Link } from 'react-router-dom';
import { setActiveLink } from '../../services/actions/activeLink';
import ndisSvg from '../../assets/images/svg/I_heart_NDIS_2020.svg';
import phoneSvg from '../../assets/images/svg/phone.svg';
import mailSvg from '../../assets/images/svg/mail.svg';
import logo from '../../assets/images/svg/logo_with_Shadow.svg';
import facebookSvg from '../../assets/images/svg/facebook.svg';
import instagramSvg from '../../assets/images/svg/instagram.svg';

const Footer: React.FC = () => {

    const activeLink = useSelector((state: RootState) => state.activeLink.activeLink);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const savedActiveLink = localStorage.getItem('activeLink');
        if (savedActiveLink) {
            dispatch(setActiveLink(savedActiveLink)); // Восстанавливаем активную ссылку из localStorage при загрузке страницы
        }
    }, []);

    const handleLinkClick = (link: string) => {
        navigate(link, { replace: false });
        localStorage.setItem('activeLink', link);
        dispatch(setActiveLink(link));
    };



    return (
        <footer className={styles["cs-footer-842"]}>
            {/*Wave grpahic*/}
            <svg className={styles["cs-wave"]} width="1920" height="188" viewBox="0 0 1920 188" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1920 45.8671C1835.33 45.8671 1715.47 60.6671 1549.2 104.534C1115.6 218.4 932.267 0.000366211 466.533 0.000366211C218.933 0.000366211 172.8 45.8671 0.133333 45.8671L0 187.934H1920V45.8671Z" fill="#FFF8F5" />
            </svg>
            <div className={styles["cs-container"]}>
                {/* Logo Group */}
                <div className={styles["cs-logo-group"]}>
                    <Link to="/" aria-label="go back to home" className={styles["cs-logo"]} onClick={() => handleLinkClick('/')}>
                    <img src={logo} alt="logo" aria-hidden="true" decoding="async" height={50}/>
                    </Link>
                    <div className={styles["cs-social"]}>
                        <a className={styles["cs-social-link"]} aria-label="visit facebook profile" href="https://www.facebook.com/profile.php?id=61556938885891">
                            <img className={styles["cs-social-img"]} aria-hidden="true" loading="lazy" decoding="async" src={facebookSvg} alt="facebook" width="11" height="11" />
                        </a>
                        <a className={styles["cs-social-link"]} aria-label="visit instagram profile" href="https://www.instagram.com/bloss_omcr?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
                            <img className={styles["cs-social-img"]} aria-hidden="true" loading="lazy"
                                decoding="async" src={instagramSvg} alt="instagram" width="11" height="11" />
                        </a>
                        <Link className={classNames(styles["cs-social-link"], styles["cs-ndis"])} aria-label="visit ndis profile" to="/ndis">
                            <img className={styles["cs-social-img"]} aria-hidden="true" loading="lazy"
                                decoding="async" src={ndisSvg} alt="ndis" width="32" height="32" />
                        </Link>


                    </div>
                </div>
                {/* Links */}
                <div className={styles["cs-ul-wrapper"]}>
                    <span className={styles["cs-header"]}>Quick Links</span>
                    <ul className={`${styles["cs-ul"]} ${styles["cs-ul-1"]}`}>

                        <li className={styles["cs-li"]}>
                            <Link to="/" className={classNames(styles["cs-link"], {
                                [styles["cs-active"]]: activeLink === '/'
                            })} onClick={() => handleLinkClick('/')}>Home</Link>
                        </li>
                        <li className={styles["cs-li"]}>
                            <Link to="/about-us" className={classNames(styles["cs-link"], {
                                [styles["cs-active"]]: activeLink === '/about-us'
                            })} onClick={() => handleLinkClick('/about-us')}>About</Link>
                        </li>
                        <li className={styles["cs-li"]}>
                            <Link to="/blog" className={classNames(styles["cs-link"], {
                                [styles["cs-active"]]: activeLink === '/blog'
                            })} onClick={() => handleLinkClick('/blog')}>Blog</Link>
                        </li>
                        <li className={styles["cs-li"]}>
                            <Link to="/contact-us" className={classNames(styles["cs-link"], {
                                [styles["cs-active"]]: activeLink === '/contact-us'
                            })} onClick={() => handleLinkClick('/contact-us')}>Contact</Link>
                        </li>
                    </ul>

                </div>
                <div className={styles["cs-ul-wrapper"]}>
                    {/* Contact Info */}
                    <span className={styles["cs-header"]}>Contact Information</span>
                    <ul className={styles["cs-ul"]}>

                        <li className={styles["cs-li"]}>
                            <a className={styles["cs-link"]} href={`tel:${phoneNumber}`}>
                                <img className={styles["cs-contact-icon"]} aria-hidden="true" loading="lazy" decoding="async" src={phoneSvg} alt="phone icon" width="20" height="20" />
                                {phoneNumber}
                            </a>
                        </li>
                        <li className={styles["cs-li"]}>
                            <a className={styles["cs-link"]} href={`mailto:${email}`}>
                                <img className={styles["cs-icon"]} aria-hidden="true" loading="lazy" decoding="async" src={mailSvg} alt="email icon" width="20" height="20" />
                                {email}
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    );

}


export default Footer;
