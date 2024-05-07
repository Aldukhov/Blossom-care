import React, { useState, useRef } from 'react';
import styles from './Form.module.css';
import classNames from 'classnames';
import { email, phoneNumber } from '../../utils/constants';
import Button from '../button/button';
import { sendEmail } from '../../services/emailJs/emailJs';
import phoneSvg from '../../assets/images/svg/phone.svg';
import mailSvg from '../../assets/images/svg/mail.svg';

const Form: React.FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const formRef = useRef<HTMLFormElement>(null);
    const [messageStatus, setMessageStatus] = useState<string | null>(null);



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formRef.current) {
            sendEmail(formRef.current)
            .then(() => {
                setMessageStatus('Message sent successfully!');
            })
            .catch(() => {
                setMessageStatus('Failed to send message.');
            });
        }

        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (

        <section className={classNames(styles['contact-1388'])}>
            <div className={classNames(styles['cs-container'])}>
                <div className={classNames(styles['cs-content'])}>
                    <h2 className={classNames(styles['cs-title'], 'cs-title')}>Get in Touch</h2>
                    <p className={classNames(styles['cs-text'], 'cs-text')}>
                        Welcome to a community where passion meets purpose, experience meets innovation,
                        and compassion knows no bounds. Welcome to Blossom Care Disability Services.</p>

                    <ul className={classNames(styles['cs-ul'])}>
                        <li className={classNames(styles['cs-li'])}>
                            <picture className={classNames(styles['cs-icon-wrapper'])}>
                                <img aria-hidden="true" src={phoneSvg} alt="phone icon" className={classNames(styles['cs-icon'])} width="40" height="40" decoding="async" />
                            </picture>
                            <div className={classNames(styles['cs-flex-group'])}>
                                <span className={classNames(styles['cs-header'])}>Phone</span>
                                <a href="tel:888-4565-789" className={classNames(styles['cs-link'])}>{phoneNumber}</a>
                            </div>
                        </li>
                        <li className={classNames(styles['cs-li'])}>
                            <picture className={classNames(styles['cs-icon-wrapper'])}>
                                <img aria-hidden="true" src={mailSvg} alt="address icon" className={classNames(styles['cs-icon'])} width="40" height="40" decoding="async" />
                            </picture>
                            <div className={classNames(styles['cs-flex-group'])}>
                                <span className={classNames(styles['cs-header'])}>Email</span>
                                <a href="mailto:Email@stitch.com" className={classNames(styles['cs-link'])}>{email}</a>
                            </div>
                        </li>

                    </ul>
                </div>
                {/* Form */}
                <form className={classNames(styles['cs-form'])} id="cs-form" name="Contact Form" onSubmit={handleSubmit} ref={formRef}>
                    <h3 className={classNames(styles['cs-h3'])}>Make Appointment</h3>
                    <label className={classNames(styles['cs-label'])}>
                        Name
                        <input className={classNames(styles['cs-input'])} required type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name"
                        />
                    </label>
                    <label className={classNames(styles['cs-label'], styles['cs-email'])}>
                        Email
                        <input className={classNames(styles['cs-input'])} required type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"
                        />
                    </label>
                    <label className={classNames(styles['cs-label'], styles['cs-phone'])}>
                        Phone
                        <input className={classNames(styles['cs-input'])} required type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone"
                        />
                    </label>
                    <label className={classNames(styles['cs-label'])}>
                        Message
                        <textarea className={classNames(styles['cs-input'], styles['cs-textarea'])} required name="message" id="message"
                            value={formData.message} onChange={handleChange} placeholder="Write message..."></textarea>
                    </label>
                    
                        <Button text="Send Message" extraClass='cta-button' type="submit" />

                        {messageStatus && (
                            <span style={{ color: messageStatus.includes('successfully') ? '#00CA89' : 'red' }}>
                                {messageStatus}
                            </span>
                        )}
                        
                    
                </form>
            </div>
        </section>

    );

}


export default Form;
