import { IMessageSender } from "./imessage-sender.interface";

/**
 * Implementación concreta de IMessageSender para enviar mensajes por Email.
 */
export class EmailMessageSender implements IMessageSender {
    /**
     * Envía un mensaje por Email.
     * @param {string} Message - El mensaje a enviar.
     * @returns {string} - Confirmación del envío del mensaje por Email.
     */
    SendMessage(Message: string): string {
        return "'" + Message + "'   : This Message has been sent using Email";
    }
}

