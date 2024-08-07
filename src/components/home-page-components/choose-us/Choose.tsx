import React from 'react';
import classNames from 'classnames';
import styles from './Choose.module.css';
import Button from '../../../components/button/button';
import imageUrl from '../../../assets/images/home/hands.jpg'
import directionSvg from '../../../assets/images/home/svg/direction.svg';
import directionBlackSvg from '../../../assets/images/home/svg-black/directionBlack.svg';
import targetBlackSvg from '../../../assets/images/home/svg-black/targetBlack.svg';
import targetSvg from '../../../assets/images/home/svg/target.svg';
import { useSelector} from 'react-redux'
import { RootState } from '../../../services/types';


const Choose: React.FC = () => {
    const activeGray = useSelector((state: RootState) => state.activeGray.active);

    return (

       
            <section className={classNames(styles["why-choose-1485"])}>
                <div className={classNames(styles["cs-container"])}>
                    <div className={classNames(styles["cs-image-group"])}>
                        <picture className={classNames(styles["cs-picture"], styles["cs-picture1"],  activeGray && 'black-pic')}>
                       
                            <img loading="lazy" decoding="async" src={imageUrl} alt="kid" width="647" height="600" />
                        </picture>

                        <svg className={classNames(styles["cs-mask"])} width="647" height="600" viewBox="0 0 647 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={classNames(styles["cs-outer-mask"])} fillRule="evenodd" clipRule="evenodd" d="M0 0H647V600H0V0ZM38 110C64.0297 75.766 102.579 52.0824 143 
                            37C144.788 36.3365 146.555 35.5378 148.324 34.7378C150.529 
                            33.7407 152.738 32.7417 155 32C251.273 0.380304 364.071 
                            -8.26436 457 38C514.621 66.6831 553.453 118.152 591.339 
                            168.368C596.562 175.29 601.767 182.188 607 189C657.382 
                            254.558 650.888 352.089 614 422C585.347 476.308 539.036 
                            519.481 487 552C403.358 604.274 320.729 610.296 236 554C116.994 
                            474.921 -74.8032 258.339 38 110Z" fill="#FFF8F5" />

                            <path className={classNames(styles["cs-mask-border"])} d="M609.578 419.667L614 422L609.578 419.667C645.882 350.863 651.85 255.566 603.035 192.047L603.035 192.046C597.763 185.184 592.537 178.261 587.308 171.335C549.335 121.032 
                            511.26 70.5951 454.772 42.4761L454.772 42.476C363.478 -2.9739 
                            252.173 5.34746 156.56 36.7504L156.558 36.7511C154.801 37.3273 
                            153.023 38.1029 151.033 39.0003C150.82 39.0965 150.603 39.1945 
                            150.384 39.2937C148.637 40.0841 146.708 40.9569 144.748 
                            41.6845C104.889 56.5573 67.259 79.7797 41.9802 113.026L38 110L41.98
                             113.027C-12.5389 184.72 5.99713 273.442 54.3776 355.432C102.668
                              437.269 179.806 510.656 238.767 549.836C280.403 577.499 
                              321.25 589.69 361.787 588.715C402.372 587.739 443.075 
                              573.556 484.35 547.76C535.868 515.565 581.448 472.984 
                              609.578 419.667Z" strokeWidth="10" />
                        </svg>
                    </div>
                    
                    <div className={classNames(styles["cs-content"])}>
                        <h2 className={classNames(styles["cs-title"], 'cs-title')}>Why Choose us</h2>

                        <ul className={classNames(styles["cs-ul"])}>
                            <li className={classNames(styles["cs-li"])}>
                                <picture className={classNames(styles["cs-li-picture"])}>
                                    <img className={classNames(styles["cs-li-icon"])} aria-hidden="true" src={activeGray ? directionBlackSvg : directionSvg} decoding="async" alt="icon" width="36" height="36" loading="lazy" />
                                </picture>
                                <div className={classNames(styles["cs-flex"])}>
                                    <h3 className={classNames(styles["cs-h3"])}>Our Mission</h3>
                                    <p className={classNames(styles["cs-li-text"], 'cs-text')}>
                                        To serve as the most respected provider of disability services, placing people at the heart of our operations,
                                        while ensuring accessibility and delivering unparalleled quality.
                                        We commit to treating everyone with the utmost respect and dignity.</p>
                                </div>
                            </li>
                            <li className={classNames(styles["cs-li"])}>
                                <picture className={classNames(styles["cs-li-picture"])}>
                                    <img className={classNames(styles["cs-li-icon"])} aria-hidden="true" decoding="async" alt="icon" src={activeGray ? targetBlackSvg : targetSvg} width="36" height="36" />
                                </picture>
                                <div className={classNames(styles["cs-flex"])}>
                                    <h3 className={classNames(styles["cs-h3"])}>Our Vision</h3>
                                    <p className={classNames(styles["cs-li-text"], 'cs-text')}>
                                        Our vision is a world where every individual is valued and respected,
                                        and where our organisation sets the standard for compassion and integrity in all interactions. </p>
                                </div>
                            </li>
                        </ul>
                        <Button text="Learn more" link="/about-us" extraClass='link-button'/>
                    </div>
                </div>

                <svg className={classNames(styles["cs-top"])} width="1920" height="39" viewBox="0 0 1920 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 0H0V15.8216L4.95532 13.3966L18.1455 15.2801L28.6394 22.5944L42.0481 24.423L54.0723 27.0599L66.8979 21.3623L78.7034 23.6147L90.9463 27.8134L102.533 21.5742L114.776 24.5329L126.654 25.2314L138.605 24.7997L148.881 29.1554L160.759 28.6217L171.18 33.354L183.569 27.1698L194.573 29.9637L207.69 30.0186L219.277 25.7179L228.531 18.9373L240.556 16.0335L253.017 13.3966L265.989 13.0748L279.033 14.5267L292.296 16.1983L305.413 12.5333L317.437 17.0537L331.065 15.0682L342.943 19.157L354.749 23.0261L366.773 26.1496L378.943 29.2652L391.331 31.6903L405.469 28.0802L417.274 32.067L428.57 35.1277L440.375 35.2925L451.598 38.4631L463.622 37.7097L475.208 38.8947L487.087 35.7241L498.455 36.7993L510.115 38.1413L522.285 34.2173L536.058 32.012L547.864 26.3065L561.928 29.2652L574.171 20.7658L587.434 22.0058L599.604 24.0463L611.191 21.5192L623.215 24.6428L634.947 25.2863L646.607 23.9443L658.413 20.499L670.437 17.7051L681.805 24.423L694.048 20.7658L706.072 20.1223L728.226 29.43L741.197 24.6428H753.221L761.31 35.6692L773.771 34.1624L785.65 29.8067L796.29 31.2586L809.261 34.594L818.37 26.7382L828.864 22.1628L842.418 22.9711L852.329 17.0537L866.248 19.314L875.722 11.7877L887.673 9.95128L900.28 11.2462L911.94 8.2875L924.474 10.328L937.373 8.17763L949.98 7.15739L961.931 10.3123L966.887 7.8951L980.077 15.1545L990.57 22.4689L1003.98 24.2974L1016 26.9344L1028.83 21.2367L1040.63 23.4891L1052.88 27.6878L1064.46 21.4486L1076.71 24.4073L1088.59 25.1058L1100.54 24.6741L1110.81 29.0298L1122.69 28.4961L1133.11 33.2285L1145.5 27.0442L1156.5 29.8381L1169.62 29.8931L1181.21 25.5924L1190.46 18.8117L1202.49 15.9079L1214.95 13.271L1227.92 12.9492L1240.96 14.4011L1254.23 16.0727L1267.34 12.4077L1279.37 16.9282L1293 14.9426L1304.87 19.0236L1316.68 22.9005L1328.7 26.024L1340.87 29.1397L1353.26 31.5647L1367.4 27.9546L1379.21 31.9414L1390.5 35.0021L1402.31 35.1669L1413.53 38.3375L1425.55 37.5841L1437.14 38.7692L1449.02 35.5986L1460.39 36.6738L1472.05 38.0158L1484.22 34.0918L1497.99 31.8865L1509.79 26.181L1523.86 29.1397L1536.1 20.6403L1549.37 21.8803L1561.54 23.9207L1573.12 21.3937L1585.15 24.5172L1596.88 25.1607L1608.54 23.8187L1620.34 20.3734L1632.37 17.5717L1643.74 24.2974L1655.98 20.6403L1668 19.9967L1690.16 29.3045L1703.13 24.5172H1715.15L1723.24 35.5436L1735.7 34.0368L1747.58 29.6812L1758.22 31.1331L1771.19 34.4685L1780.3 26.6126L1790.79 22.0372L1804.35 22.8456L1814.26 16.9282L1828.18 19.1884L1837.65 11.6543L1849.6 9.82571L1862.21 11.1206L1873.87 8.16193L1886.41 10.2024L1899.3 8.05206L1911.91 7.03182L1920 7.78523V0Z" fill="white" />
                </svg>

                <svg className={classNames(styles["cs-bottom"])} width="1920" height="39" viewBox="0 0 1920 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 38.8948H0V23.0732L4.95532 25.4982L18.1455 23.6147L28.6394 16.3004L42.0481 14.4718L54.0723 11.8348L66.8979 17.5325L78.7034 15.2801L90.9463 11.0814L102.533 17.3206L114.776 14.3619L126.654 13.6634L138.605 14.0951L148.881 9.73941L160.759 10.2731L171.18 5.54073L183.569 11.725L194.573 8.93107L207.69 8.87613L219.277 13.1768L228.531 19.9575L240.556 22.8613L253.017 25.4982L265.989 25.82L279.033 24.3681L292.296 22.6965L305.413 26.3615L317.437 21.841L331.065 23.8266L342.943 19.7378L354.749 15.8687L366.773 12.7452L378.943 9.62954L391.331 7.20451L405.469 10.8146L417.274 6.8278L428.57 3.76708L440.375 3.60227L451.598 0.431672L463.622 1.18508L475.208 3.12403e-05L487.087 3.17063L498.455 2.09545L510.115 0.75344L522.285 4.67745L536.058 6.88274L547.864 12.5882L561.928 9.62954L574.171 18.1289L587.434 16.889L599.604 14.8485L611.191 17.3755L623.215 14.252L634.947 13.6085L646.607 14.9505L658.413 18.3958L670.437 21.1897L681.805 14.4718L694.048 18.1289L706.072 18.7725L728.226 9.46473L741.197 14.252H753.221L761.31 3.22556L773.771 4.73238L785.65 9.08803L796.29 7.63615L809.261 4.30074L818.37 12.1566L828.864 16.732L842.418 15.9236L852.329 21.841L866.248 19.5807L875.722 27.107L887.673 28.9435L900.28 27.6486L911.94 30.6073L924.474 28.5668L937.373 30.7172L949.98 31.7374L961.931 28.5825L966.887 31.0007L980.077 23.7412L990.57 16.4268L1003.98 14.5983L1016 11.9613L1028.83 17.659L1040.63 15.4066L1052.88 11.2079L1064.46 17.4471L1076.71 14.4884L1088.59 13.7899L1100.54 14.2216L1110.81 9.86595L1122.69 10.3997L1133.11 5.66832L1145.5 11.8526L1156.5 9.05872L1169.62 9.0038L1181.21 13.3045L1190.46 20.0852L1202.49 23.989L1214.95 26.6259L1227.92 26.9477L1240.96 25.4958L1254.23 23.8242L1267.34 27.4892L1279.37 22.9687L1293 24.9543L1304.87 20.8733L1316.68 16.9964L1328.7 13.8729L1340.87 10.7572L1353.26 8.33216L1367.4 11.9423L1379.21 7.95546L1390.5 3.99479L1402.31 3.82998L1413.53 0.659377L1425.55 1.41278L1437.14 0L1449.02 3.17063L1460.39 2.09545L1472.05 0.75344L1484.22 4.67745L1497.99 6.88274L1509.79 12.5882L1523.86 9.62954L1536.1 18.1289L1549.37 16.8889L1561.54 14.8485L1573.12 17.3755L1585.15 14.252L1596.88 13.6085L1608.54 14.9505L1620.34 18.3958L1632.37 21.1976L1643.74 14.4718L1655.98 18.1289L1668 18.7725L1690.16 9.46473L1703.13 14.252H1715.15L1723.24 3.22556L1735.7 4.73238L1747.58 9.08798L1758.22 7.6361L1771.19 4.30074L1780.3 12.1566L1790.79 16.732L1804.35 15.9236L1814.26 21.841L1828.18 19.5807L1837.65 27.1143L1849.6 28.9428L1862.21 27.6479L1873.87 30.6066L1886.41 28.5661L1899.3 30.7165L1911.91 31.7367L1920 31.0002V38.8948Z" fill="white" />
                </svg>
            </section>


           
        
    );

}


export default Choose;
