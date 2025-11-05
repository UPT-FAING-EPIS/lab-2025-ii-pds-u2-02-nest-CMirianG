import { IMessageSender } from "./imessage-sender.interface";

/**
 * Implementación concreta de IMessageSender para enviar mensajes por SMS.
 */
export class SmsMessageSender implements IMessageSender {
    /**
     * Envía un mensaje por SMS.
     * @param {string} Message - El mensaje a enviar.
     * @returns {string} - Confirmación del envío del mensaje por SMS.
     */
    SendMessage(Message: string): string {
        return "'" + Message + "' : This Message has been sent using SMS";
    }
}

