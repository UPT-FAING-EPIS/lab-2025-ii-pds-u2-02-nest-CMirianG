import { AbstractMessage } from "./abstract-message";
import { IMessageSender } from "./imessage-sender.interface";

/**
 * Clase concreta para mensajes cortos (máximo 25 caracteres).
 * Extiende AbstractMessage e implementa validación de longitud.
 */
export class ShortMessage extends AbstractMessage {
    /**
     * Mensaje de error que se lanza cuando el mensaje excede los 25 caracteres.
     */
    public LARGE_ERROR_MESSAGE: string = "Unable to send the message as length > 25 characters";

    /**
     * Crea una instancia de ShortMessage.
     * @param {IMessageSender} messageSender - El mensajero que se utilizará para enviar el mensaje.
     */
    constructor(messageSender: IMessageSender) {
        super();
        this._messageSender = messageSender;
    }
    
    /**
     * Envía un mensaje corto. Valida que el mensaje no exceda 25 caracteres.
     * @param {string} Message - El mensaje a enviar.
     * @returns {string} - Confirmación del envío del mensaje.
     * @throws {Error} - Si el mensaje excede los 25 caracteres.
     */
    public SendMessage(Message: string): string {
        if (Message.length <= 25)
            return this._messageSender.SendMessage(Message);
        else
            throw new Error(this.LARGE_ERROR_MESSAGE);
    }
}

