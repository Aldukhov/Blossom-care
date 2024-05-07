import React from 'react';
import classNames from 'classnames';
import styles from './button.module.css';

interface IButtonProps {
    text: string;
    link?: string; // Сделали link необязательным
    extraClass: string;
    type?: 'submit' | 'button';
}

const Button: React.FC<IButtonProps> = ({ text, link, extraClass, type = 'button' }) => {
    const handleClick = () => {
        if (link) { // Проверяем, что link существует и не пустой
            window.location.href = link;
        }
    };

    return (
        <button className={classNames(styles["cs-button-solid"], styles[`${extraClass}`])} onClick={handleClick} type={type}>
            {text}
        </button>
    );
}

export default Button;
