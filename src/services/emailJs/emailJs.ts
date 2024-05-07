import emailjs from '@emailjs/browser';

export const sendEmail = (form: HTMLFormElement): Promise<void> => {
    return new Promise((resolve, reject) => {
        emailjs
            .sendForm('service_sz6e2uq', 'template_641qin5', form, {
                publicKey: 'BQp6alMcHd78mRNmy',
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