import React, { ReactEventHandler } from 'react';
import styles from './ContentOval.module.css';
import classNames from 'classnames';
import imgUrl from '../../assets/images/ndis/the girl with down syndrome works at the store..jpg'

const ContentOVal: React.FC = () => {

    return (

        <section className={classNames(styles['content-page-852'])}>
            <div className={classNames(styles['cs-container'])}>
                <div className={classNames(styles['cs-content'])}>
                    <h1 className={classNames(styles['cs-title'], 'cs-title')}>Resources & Useful links</h1>

                    <p className={classNames(styles['cs-text'], 'cs-text')} >
                        <a className={classNames(styles['cs-text'], 'cs-text')} href="https://www.ndiscommission.gov.au/about/ndis-code-conduct">NDIS Code of Conduct</a>
                        <br />
                        <br />
                        <a target="_blank" rel="noopener noreferrer" href="https://www.ndiscommission.gov.au/providers/registered-ndis-providers/provider-obligations-and-requirements/ndis-practice-standards">NDIS Standards</a>
                        <br />
                        <br />
                        <a target="_blank" rel="noopener noreferrer" href="https://www.ndis.gov.au/contact/feedback-and-complaints">Feedback and Complaints</a>
                        <br />
                        <br />
                        <a target="_blank" rel="noopener noreferrer" href="https://www.ndis.gov.au/participants/creating-your-plan/plan-budget-and-rules/transport-funding">Transport</a>
                        <br />
                        <br />
                        <a target="_blank" rel="noopener noreferrer" href="https://ourguidelines.ndis.gov.au/your-plan-menu/creating-your-plan/what-ndis-plan#:~:text=Your%20NDIS%20plan%20sets%20out,as%20long%20as%20you%20want.">How NDIS Creates your plan</a>
                        <br />
                        <br />
                        <a target="_blank" rel="noopener noreferrer" href="https://www.ndis.gov.au/understanding/what-ndis/whos-delivering-ndis/local-area-coordination-partners#:~:text=Implement%20your%20NDIS%20plan%20%E2%80%93%20your,you%20have%20about%20your%20plan.">Who Helps Implement an NDIS plan</a>
                        <br />
                        <br />
                        <a target="_blank" rel="noopener noreferrer"  href="https://www.ndis.gov.au/providers/housing-and-living-supports-and-services/specialist-disability-accommodation">SDA price & eligibility</a>
                        <br />
                        <br />
                        <a target="_blank" rel="noopener noreferrer"  href="https://humanrights.gov.au/">Human Rights</a>

                    </p>

                </div>
                <div className={classNames(styles['cs-image-group'])}>
                    <picture className={classNames(styles['cs-picture'])}>
                        <img decoding="async" src={imgUrl} alt="the girl with down syndrome works at the store" aria-hidden="true" />
                    </picture>
                </div>
            </div>
        </section>
    );

}

export default ContentOVal;