import React, { ReactEventHandler, useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import styles from './Header.module.css';
import { phoneNumber } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveLink } from '../../services/actions/activeLink';
import { useNavigate, Link } from 'react-router-dom';
import { RootState } from '../../services/types';
import logo from '../../assets/images/svg/logo_with_Shadow.svg';
import down from '../../assets/images/header/svg/down.svg';

const Header: React.FC = () => {

    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isToggleActive, setIsToggleActive] = useState(false);
    const activeLink = useSelector((state: RootState) => state.activeLink.activeLink);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const savedActiveLink = localStorage.getItem('activeLink');
        if (savedActiveLink) {
            dispatch(setActiveLink(savedActiveLink)); // Восстанавливаем активную ссылку из localStorage при загрузке страницы
        }
    }, []);

    useEffect(() => {
        const savedScrollPosition = localStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition));
            setIsScrolled(parseInt(savedScrollPosition) >= 100);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    const handleMenuClick = () => {
        setIsMenuActive(!isMenuActive);
    };

    const handleToggleClick = () => {
        setIsToggleActive(!isToggleActive);
    };


    const handleScroll = () => {
        const scroll: number = window.scrollY;
        setIsScrolled(scroll >= 100);
        localStorage.setItem('scrollPosition', scroll.toString());
    };

    
    const handleLinkClick = (link: string) => {
        navigate(link, { replace: false });
        localStorage.setItem('activeLink', link);
        dispatch(setActiveLink(link));
    };

    return (
        <header className={classNames(styles["cs-navigation"], { [styles.scroll]: isScrolled })}>

            <div className={classNames(styles["cs-container"])}>
                <Link to="/" className={classNames(styles["cs-logo"])} aria-label="back to home" onClick={() => handleLinkClick('/')}>
                    <img src={logo} alt="logo" aria-hidden="true" decoding="async" />
                </Link>

                <nav className={classNames(styles["cs-nav"], { [styles['cs-active']]: isMenuActive })} role="navigation">
                    <button className={classNames(styles["cs-toggle"])} aria-label="mobile menu toggle" onClick={handleMenuClick}>
                        <div className={classNames(styles["cs-box"])} aria-hidden="true">
                            <span className={classNames(styles["cs-line"], styles['cs-line1'])} aria-hidden="true"></span>
                            <span className={classNames(styles["cs-line"], styles['cs-line2'])} aria-hidden="true"></span>
                            <span className={classNames(styles["cs-line"], styles['cs-line3'])} aria-hidden="true"></span>
                        </div>
                    </button>

                    <div className={classNames(styles["cs-ul-wrapper"])}>
                        <ul className={classNames(styles["cs-ul"], styles["cs-expanded"])}>
                            <li className={classNames(styles["cs-li"])}>
                                <Link to="/" className={classNames(styles["cs-li-link"], {
                                    [styles["cs-active-link"]]: activeLink === '/'
                                })} onClick={() => handleLinkClick('/')}>Home</Link>
                            </li>
                            <li className={classNames(styles["cs-li"])}>
                                <Link to="/about-us" className={classNames(styles["cs-li-link"], {
                                    [styles["cs-active-link"]]: activeLink === '/about-us'
                                })} onClick={() => handleLinkClick('/about-us')}>About</Link>
                            </li>
                            <li className={classNames(styles["cs-li"], styles["cs-dropdown"], { [styles['cs-active']]: isToggleActive })} onClick={handleToggleClick} tabIndex={0}>
                                <span className={classNames(styles["cs-li-link"], {
                                    [styles["cs-active-link"]]: activeLink.startsWith('/services'),
                                })}>
                                    Services
                                    <img className={classNames(styles["cs-drop-icon"])} src={down} alt="dropdown icon" width="15" height="15" decoding="async" aria-hidden="true" />
                                </span>
                                <ul className={classNames(styles["cs-drop-ul"])}>
                                    <li className={classNames(styles["cs-drop-li"])}>
                                        <Link to="/services/independent-living" className={classNames(styles["cs-li-link"], styles["cs-drop-link"], {
                                            [styles["cs-active-link"]]: activeLink === '/services/independent-living'
                                        })} onClick={() => handleLinkClick('/services/independent-living')}>Supported Independent Living</Link>
                                    </li>
                                    <li className={classNames(styles["cs-drop-li"])}>
                                        <Link to="/services/community-nursing-care" className={classNames(styles["cs-li-link"], styles["cs-drop-link"], {
                                            [styles["cs-active-link"]]: activeLink === '/services/community-nursing-care'
                                        })} onClick={() => handleLinkClick('/services/community-nursing-care')}>Community Nursing Care</Link>
                                    </li>
                                    <li className={classNames(styles["cs-drop-li"])}>
                                        <Link to="/services/community-participation" className={classNames(styles["cs-li-link"], styles["cs-drop-link"], {
                                            [styles["cs-active-link"]]: activeLink === '/services/community-participation'
                                        })} onClick={() => handleLinkClick('/services/community-participation')}>Community Participation</Link>
                                    </li>
                                    <li className={classNames(styles["cs-drop-li"])}>
                                        <Link to="/services/individualised-living-options" className={classNames(styles["cs-li-link"], styles["cs-drop-link"], {
                                            [styles["cs-active-link"]]: activeLink === '/services/individualised-living-options'
                                        })} onClick={() => handleLinkClick('/services/individualised-living-options')}>Individualised Living Options</Link>
                                    </li>
                                    <li className={classNames(styles["cs-drop-li"])}>
                                        <Link to="/services/dissability-accommodation" className={classNames(styles["cs-li-link"], styles["cs-drop-link"], {
                                            [styles["cs-active-link"]]: activeLink === '/services/dissability-accommodation'
                                        })} onClick={() => handleLinkClick('/services/dissability-accommodation')}>Specialist Disability Accommodation</Link>
                                    </li>
                                    <li className={classNames(styles["cs-drop-li"])}>
                                        <Link to="/services/transport" className={classNames(styles["cs-li-link"], styles["cs-drop-link"], {
                                            [styles["cs-active-link"]]: activeLink === '/services/transport'
                                        })} onClick={() => handleLinkClick('/services/transport')}>Transport</Link>
                                    </li>
                                    <li className={classNames(styles["cs-drop-li"])}>
                                        <Link to="/services/support-coordination" className={classNames(styles["cs-li-link"], styles["cs-drop-link"], {
                                            [styles["cs-active-link"]]: activeLink === '/services/support-coordination'
                                        })} onClick={() => handleLinkClick('/services/support-coordination')}>Specialist Support Coordination</Link>
                                    </li>
                                    <li className={classNames(styles["cs-drop-li"])}>
                                        <Link to="/services/plan-management" className={classNames(styles["cs-li-link"], styles["cs-drop-link"], {
                                            [styles["cs-active-link"]]: activeLink === '/services/plan-management'
                                        })} onClick={() => handleLinkClick('/services/plan-management')}>Plan Management</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={classNames(styles["cs-li"])}>
                                <Link to="/blog" className={classNames(styles["cs-li-link"], {
                                    [styles["cs-active-link"]]: activeLink === '/blog'
                                })} onClick={() => handleLinkClick('/blog')}>Blog</Link>
                            </li>
                            <li className={classNames(styles["cs-li"])}>
                                <Link to="/contact-us" className={classNames(styles["cs-li-link"], {
                                    [styles["cs-active-link"]]: activeLink === '/contact-us'
                                })} onClick={() => handleLinkClick('/contact-us')}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={classNames(styles["cs-contact-group"])}>
                    <a href={`tel:${phoneNumber}`} className={classNames(styles["cs-phone"])}>
                        <img className={classNames(styles["cs-phone-icon"])} src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-1a.svg" alt="logo" width="24" height="24" aria-hidden="true" decoding="async" />
                        {phoneNumber}
                    </a>
                </div>
            </div>
        </header>
    );
}


export default Header;
