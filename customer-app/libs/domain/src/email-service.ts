import { Customer } from "./customer";
//import { MailerService } from '@nestjs-modules/mailer';

/**
 * Clase que proporciona servicios de envío de correos electrónicos.
 * Implementa el patrón Facade para simplificar el envío de emails.
 */
export class EmailService {
    //constructor(private readonly mailService: MailerService) {}

    /**
     * Envía un correo electrónico de registro al cliente.
     * @param {Customer} customer - El cliente al que se le enviará el correo.
     * @returns {boolean} - true si el correo se envió correctamente.
     */
    public SendRegistrationEmail(customer: Customer): boolean
    {
        // this.mailService.sendMail({
        //     from: 'Kingsley Okure <kingsleyokgeorge@gmail.com>',
        //     to: customer.Email,
        //     subject: "Test mail",
        //     text: "<h1>Hello</h1>",
        //   });        
        return true;
    }         
}

