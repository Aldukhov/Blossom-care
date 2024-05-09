import React, { useState, createContext, useEffect } from 'react';
import classNames from 'classnames';
import styles from '../Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveGray } from '../../../services/actions/activeGray';
import { setcurrentSize } from '../../../services/actions/currentSize';
import { RootState } from '../../../services/types';
import { fontSize, colors } from '../../../utils/constants';

const Disability: React.FC = () => {

    const dispatch = useDispatch();
    const activeGray = useSelector((state: RootState) => state.activeGray.active);
    const activeSize = useSelector((state: RootState) => state.size.number);
    const root = document.documentElement;
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const increaseFontSize = () => {

        setButtonDisabled(true);


        if (activeSize <= 6) {
            root.style.setProperty
                ('--topperFontSize',
                    `clamp(${fontSize.topper.first += fontSize.topper.onePix}rem,${1.6}vw,${fontSize.topper.second += fontSize.topper.onePix}rem)`);
            root.style.setProperty
                ('--headerFontSize',
                    `clamp(${fontSize.header.first += fontSize.header.onePix}rem,${3.9}vw,${fontSize.header.second += fontSize.header.onePix}rem)`);
            root.style.setProperty
                ('--bodyFontSize',
                    `${fontSize.body.first += fontSize.body.onePix}rem`);
            root.style.setProperty
                ('--pTextSize',
                    `clamp(${fontSize.p.first += fontSize.p.onePix}rem,${2.3}vw,${fontSize.p.second += fontSize.p.onePix}rem)`);
            root.style.setProperty
                ('--buttonTextSize',
                    `${fontSize.button.first += fontSize.button.onePix}rem`);
            root.style.setProperty
                ('--topperTextSize',
                    `clamp(${fontSize.topperTextSize.first += fontSize.topperTextSize.onePix}rem,${1.6}vw,${fontSize.topperTextSize.second += fontSize.topperTextSize.onePix}rem)`);
            root.style.setProperty
                ('--hTextSize',
                    `clamp(${fontSize.hText.first += fontSize.hText.onePix}rem,${6.4}vw,${fontSize.hText.second += fontSize.hText.onePix}rem)`);
            root.style.setProperty
                ('--ctaText',
                    `clamp(${fontSize.ctaText.first += fontSize.ctaText.onePix}rem,${1.5}vw,${fontSize.ctaText.second += fontSize.ctaText.onePix}rem)`);
            root.style.setProperty
                ('--ctaHeader',
                    `clamp(${fontSize.ctaHeader.first += fontSize.ctaHeader.onePix}rem,${2.4}vw,${fontSize.ctaHeader.second += fontSize.ctaHeader.onePix}rem)`);
            root.style.setProperty
                ('--inputSmallText',
                    `clamp(${fontSize.input.first += fontSize.input.onePix}rem,${1.5}vw,${fontSize.input.second += fontSize.input.onePix}rem)`);
            root.style.setProperty
                ('--contactHeader',
                    `${fontSize.contact.first += fontSize.contact.onePix}rem`);

                    dispatch(setcurrentSize(activeSize+1));
        }

        setTimeout(() => {
            setButtonDisabled(false);
        }, 200);
    };

    const decreaseFontSize = () => {

        setButtonDisabled(true);
        // Уменьшаем размер шрифта на пол единицыconst root = document.documentElement;
        if (activeSize >= 0) {
            root.style.setProperty
                ('--topperFontSize',
                    `clamp(${fontSize.topper.first -= fontSize.topper.onePix}rem,${1.6}vw,${fontSize.topper.second -= fontSize.topper.onePix}rem)`);
            root.style.setProperty
                ('--headerFontSize',
                    `clamp(${fontSize.header.first -= fontSize.header.onePix}rem,${3.9}vw,${fontSize.header.second -= fontSize.header.onePix}rem)`);
            root.style.setProperty
                ('--bodyFontSize',
                    `${fontSize.body.first -= fontSize.body.onePix}rem`);
            root.style.setProperty
                ('--pTextSize',
                    `clamp(${fontSize.p.first -= fontSize.p.onePix}rem,${2.3}vw,${fontSize.p.second -= fontSize.p.onePix}rem)`);
            root.style.setProperty
                ('--buttonTextSize',
                    `${fontSize.button.first -= fontSize.button.onePix}rem`);
            root.style.setProperty
                ('--topperTextSize',
                    `clamp(${fontSize.topperTextSize.first -= fontSize.topperTextSize.onePix}rem,${1.6}vw,${fontSize.topperTextSize.second -= fontSize.topperTextSize.onePix}rem)`);
            root.style.setProperty
                ('--hTextSize',
                    `clamp(${fontSize.hText.first -= fontSize.hText.onePix}rem,${6.4}vw,${fontSize.hText.second -= fontSize.hText.onePix}rem)`);
            root.style.setProperty
                ('--ctaText',
                    `clamp(${fontSize.ctaText.first -= fontSize.ctaText.onePix}rem,${1.5}vw,${fontSize.ctaText.second -= fontSize.ctaText.onePix}rem)`);
            root.style.setProperty
                ('--ctaHeader',
                    `clamp(${fontSize.ctaHeader.first -= fontSize.ctaHeader.onePix}rem,${2.4}vw,${fontSize.ctaHeader.second -= fontSize.ctaHeader.onePix}rem)`);
            root.style.setProperty
                ('--inputSmallText',
                    `clamp(${fontSize.input.first -= fontSize.input.onePix}rem,${1.5}vw,${fontSize.input.second -= fontSize.input.onePix}rem)`);
            root.style.setProperty
                ('--contactHeader',
                    `${fontSize.contact.first -= fontSize.contact.onePix}rem`);

                    dispatch(setcurrentSize(activeSize-1));
        }

        setTimeout(() => {
            setButtonDisabled(false);
        }, 200);
    };

    const toggleContrastMode = () => {

        setButtonDisabled(true);

            dispatch(setActiveGray(!activeGray));

            if (!activeGray) {
                root.style.setProperty('--primary', '#666666');
                root.style.setProperty('--secondary', '#333333');
                root.style.setProperty('--secondaryLight', '#999999');
                root.style.setProperty('--backgroundColor', '#CCCCCC');

            } else {
                root.style.setProperty('--primary', `${colors.primary.color}`);
                root.style.setProperty('--secondary', `${colors.secondary.color}`);
                root.style.setProperty('--secondaryLight', `${colors.secondaryLight.color}`);
                root.style.setProperty('--backgroundColor', `${colors.backgroundColor.color}`);

            }

            setTimeout(() => {
                setButtonDisabled(false);
            }, 1500); // 3 секунды
    };

    return (

        <>
            <div className={classNames(styles["cs-container"], styles["cs-container_window"])}>

                <div className={classNames(styles["cs-window"])}>

                    <div>

                        <div className={styles.textControl}>
                            <h2 className={classNames("cs-text", styles.textb)}>
                                Larger Text
                            </h2>
                            <button className={styles.textToggleButton} onClick={decreaseFontSize} disabled={buttonDisabled}>
                                -
                            </button>
                            <button className={styles.textToggleButton} onClick={increaseFontSize} disabled={buttonDisabled}>
                                +
                            </button>
                        </div>

                    </div>

                    <div>
                        <h2 className={classNames("cs-text", styles.textb)}>High Contrast</h2>
                        <label className={styles["switch"]}>
                            <input type="checkbox" checked={activeGray} onChange={toggleContrastMode} disabled={buttonDisabled}/>
                            <span className={styles["slider"]}></span>
                        </label>
                    </div>
                </div>
            </div>
        </>

    );
}


export default Disability;