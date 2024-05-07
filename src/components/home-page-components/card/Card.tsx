import React, { ReactEventHandler } from 'react';
import classNames from 'classnames';
import styles from './Card.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { setActiveLink } from '../../../services/actions/activeLink';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../services/types';

interface ICard {
    img: string;
    header: string;
    link: string;
    alt: string;
}

const Card: React.FC<ICard> = ({ img, header, link,alt }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const service: ReactEventHandler = (event) => {
        navigate(`${link}`, { replace: false });
        dispatch(setActiveLink(`${link}`));
    };



    return (
        <li className={classNames(styles["cs-item"])}>
            <Link to={link} onClick={service}>

                <div className={classNames(styles["cs-image-group"])}>
                    <picture className={classNames(styles["cs-picture"])}>

                        <img loading="lazy" decoding="async"
                            src={img} alt={alt}
                             aria-hidden="true" />

                    </picture>

                    <svg className={classNames(styles["cs-mask"])} id="Layer_2-1495" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267 209">
                        <defs>
                            <style>
                                {`
                .cls-1 { fill: none; stroke: var(--maskBorder); stroke-width: 8px; }
                .cls-2, .cls-3 { fill: var(--maskBG); stroke-width: 0px; }
                .cls-3 { fill-rule: evenodd; }
            `}
                            </style>
                        </defs>
                        <g id="Layer_1-2-1495">
                            <polygon className={classNames("cls-2")} points="0 0 267 0 267 97.57 261.9 96.44 254.23 31.4 246.08 17.19 239.14 11.22 222 5.16 196.11 5.16 26.01 8.58 15.9 14.37 8.36 53.13 4.98 74.89 3.92 107.77 3.35 113.06 0 113.06 0 0" />
                            <polygon className={classNames("cls-2")} points="0 209 267 209 267 96.06 261.9 96.44 260.17 112.12 259.45 130.79 255.36 164.41 248.83 184.12 245.63 192.64 236.74 196.78 211.04 193.94 180.05 193.57 142.62 192.82 56.27 199.8 38.87 202.95 27.54 204.09 23.82 197.54 14.13 186.76 9.59 164.54 4.98 108.52 0 107.96 0 209" />
                            <path className={classNames("cls-3")} d="m7.98,55.76c1.17-11.05,2.57-21.17,4-29.72C14.68,9.8,19.1,7.55,30.98,7.04H7.98v48.72Zm0,99.31v45.97h15.85c-.31-.29-.6-.62-.85-1-7.58-11.22-12.3-27.06-15-44.97Zm45.14,45.97h205.86v-66.15c-.48,4.57-.99,9.12-1.5,13.68-.17,1.49-.33,2.98-.5,4.47-1.41,12.9-4.14,24.28-8,34-2.17,5.43-5.36,8.48-10,8-62.85-6.44-123.94-2.01-185.86,6ZM258.98,49.82V7.04h-25.8c10.43,4.14,18.6,12.97,22.8,29,1.2,4.59,2.19,9.19,3,13.78Z" />
                            <path className={classNames("cls-1")} d="m11.98,27.07c-7.61,45.4-14.6,135.31,11,172.99,1,1.49,2.58,2.27,4,2.98,1.42.72,2.48,1.22,4,.99,69.54-9.75,137.68-16.11,208-8.95,4.64.48,7.83-2.56,10-7.95,3.86-9.66,6.59-20.97,8-33.8,4.29-38.45,9.25-77.33-1-116.32-6.31-23.95-21.59-31.73-40-31.81-76.24-.28-138.07.98-185,2.98-11.87.51-16.3,2.74-19,18.89Z" />
                        </g>
                    </svg>

                </div>
                <div className={classNames(styles["cs-info"])}>
                    <h3 className={classNames(styles["cs-h3"])}>{header}</h3>
                </div>

            </Link>
        </li>
    );

}


export default Card;
