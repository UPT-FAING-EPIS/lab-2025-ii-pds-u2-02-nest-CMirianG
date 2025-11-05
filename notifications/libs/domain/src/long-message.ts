import { AbstractMessage } from "./abstract-message";
import { IMessageSender } from "./imessage-sender.interface";

/**
 * Clase concreta para mensajes largos (sin límite de caracteres).
 * Extiende AbstractMessage sin validaciones adicionales.
 */
export class LongMessage extends AbstractMessage {
    /**
     * Crea una instancia de LongMessage.
     * @param {IMessageSender} messageSender - El mensajero que se utilizará para enviar el mensaje.
     */
    constructor(messageSender: IMessageSender) {
        super();
        this._messageSender = messageSender;
    }
    
    /**
     * Envía un mensaje largo sin restricciones de longitud.
     * @param {string} Message - El mensaje a enviar.
     * @returns {string} - Confirmación del envío del mensaje.
     */
    public SendMessage(Message: string): string {
        return this._messageSender.SendMessage(Message);
    }
}

