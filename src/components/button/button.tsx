import React from 'react';
import classNames from 'classnames';
import styles from './button.module.css';
import { scrollToTop } from '../../services/scrollToTop/scrollToTop';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveLink } from '../../services/actions/activeLink';

interface IButtonProps {
    text: string;
    link?: string; // Сделали link необязательным
    extraClass: string;
    type?: 'submit' | 'button';
}

const Button: React.FC<IButtonProps> = ({ text, link, extraClass, type = 'button' }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        if (link) {
            localStorage.setItem('activeLink', link);
            dispatch(setActiveLink(link));
            window.location.href = link;
            scrollToTop();
        }
    };

    return (
        <button className={classNames(styles["cs-button-solid"], styles[`${extraClass}`])} onClick={handleClick} type={type}>
            {text}
        </button>
    );
}

export default Button;
