import emailjs from '@emailjs/browser';

export const sendEmail = (form: HTMLFormElement): Promise<void> => {
    return new Promise((resolve, reject) => {
        emailjs
            .sendForm('service_25ao8p7', 'template_zroa2dl', form, {
                publicKey: 'n-A_bM-qewHlF7yhb',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    resolve();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    reject();
                }
            );
    });
};