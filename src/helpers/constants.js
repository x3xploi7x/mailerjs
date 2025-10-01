export const MAIL_OPTIONS = {
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: process.env.SMTP_PORT ?? 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER ?? "test.dummy@gmail.com",
        pass: process.env.MAIL_PASS ?? "12345678",
    }
};