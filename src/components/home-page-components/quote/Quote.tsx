import React, { ReactEventHandler } from 'react';
import classNames from 'classnames';
import styles from './Quote.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/types';

const Quote: React.FC = () => {

    const activeGray = useSelector((state: RootState) => state.activeGray.active);

    return (
        <li className={styles["cs-item"]}>

            <svg className={styles["cs-quote"]} aria-hidden="true" width="120" height="99" viewBox="0 0 120 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_24)">
                    <path d="M27.5277 99H0L21.9659 0H66L27.5277 99Z" fill={activeGray ? '#333333' : "#F11D7C"} />
                    <path d="M81.5277 99H54L75.9659 0H120L81.5277 99Z" fill={activeGray ? '#333333' : "#F11D7C"} />
                </g>
                <defs>
                    <clipPath id="clip0_1_24">
                        <rect width="120" height="99" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <p className={styles["cs-item-text"]}>
                Small businesses are the heartbeat of communities, embodying the spirit of entrepreneurship, determination, and local support.
            </p>
            <div className={styles["cs-flex-group"]}>
                <span className={styles["cs-name"]}>
                    Britney Allison
                </span>
            </div>
        </li>
    );

}


export default Quote;
