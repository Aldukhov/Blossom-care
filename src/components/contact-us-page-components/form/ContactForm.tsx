import React, { ReactEventHandler, useState, useRef } from 'react';
import styles from './ContactForm.module.css';
import classNames from 'classnames';
import Button from '../../button/button';
import { sendEmail } from '../../../services/emailJs/emailJs';

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const formRef = useRef<HTMLFormElement>(null);
    const [messageStatus, setMessageStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formRef.current) {
            sendEmail(formRef.current).then(() => {
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

        <section className={classNames(styles["contact-323"])}>
            <div className={classNames(styles["cs-container"])}>
                <div className={classNames(styles["cs-content"])}>
                    <h2 className={classNames(styles["cs-title"], "cs-title")}>Get in Touch</h2>
                    <p className={classNames(styles["cs-text"], "cs-text")}>
                        Welcome to a community where passion meets purpose, experience meets innovation,
                        and compassion knows no bounds. Welcome to Blossom Care Disability Services.
                    </p>
                    {/* Form */}
                    <form onSubmit={handleSubmit} ref={formRef} className={classNames(styles["cs-form"])} id="cs-form-323" name="Contact Form" method="post">
                        <label className={classNames(styles["cs-label"])}>
                            Name
                            <input className={classNames(styles["cs-input"])} required type="text" id={classNames(styles["name-323"])} name="name" placeholder="Name" value={formData.name}
                                onChange={handleChange} />
                        </label>
                        <label className={classNames(styles["cs-label"], styles["cs-email"])}>
                            Email
                            <input className={classNames(styles["cs-input"])} required type="text" id={classNames(styles["email-323"])} name="email" placeholder="Email" value={formData.email}
                                onChange={handleChange} />
                        </label>
                        <label className={classNames(styles["cs-label"], styles["cs-phone"])}>
                            Phone
                            <input className={classNames(styles["cs-input"])} required type="text" id={classNames(styles["phone-323"])} name="phone" placeholder="Phone" value={formData.phone}
                                onChange={handleChange} />
                        </label>
                        <label className={classNames(styles["cs-label"])}>
                            Message
                            <textarea className={classNames(styles["cs-input"], styles["cs-textarea"])} required name="message" id={classNames(styles["message-323"])} placeholder="Write message..." value={formData.message}
                                onChange={handleChange}></textarea>
                        </label>
                        <Button text="Send Message" extraClass='cta-button' type="submit" />
                        {messageStatus && (
                            <span style={{ color: messageStatus.includes('successfully') ? '#00CA89' : 'red' }}>
                                {messageStatus}
                            </span>
                        )}
                    </form>
                </div>
                {/* Map Image, pin is made in the Figma then export as one image */}
                <picture className={classNames(styles["cs-map"])}>
                    <source media="(max-width: 600px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/map+pin.png" />
                    <source media="(min-width: 601px)" srcSet="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/map+pin.png" />
                    <img decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/map+pin.png" alt="map" width="610" height="425" aria-hidden="true" />
                </picture>
            </div>
        </section>


    );

}


export default ContactForm;
