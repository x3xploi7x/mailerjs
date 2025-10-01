import nodemailer from "nodemailer";
import { MAIL_OPTIONS } from "../../helpers/constants.js";

const postContact = async(request, response) => {
    const { name, last, mail, description } = request.body;
    const transporter = nodemailer.createTransport(MAIL_OPTIONS);
    const mail_options = {
        from: process.env.MAIL_USER,
        to: mail,
        subject: process.env.MAIL_SUBJECT,
        html: /*html*/`
            <span style="text-align: center;">Mail Send Successfully!!!</span>
            <table border="1">
                <thead align="center">
                    <tr>
                        <th>Name</th>
                        <th>Mail</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody align="center">
                    <tr>
                        <td>${name + " " + last}</td>
                        <td>${mail}</td>
                        <td>${description}</td>
                    </tr>
                </tbody>
            </table>
        `
    };

    await transporter.sendMail(mail_options, (error, info) => {
        if(!error) {
            response.status(200);
            response.send("<h1>Server Successfully. . .</h1>");
        }
        
        response.status(500);
        response.send("<h1>Server Error. . .</h1>");
    });
};

export default postContact;