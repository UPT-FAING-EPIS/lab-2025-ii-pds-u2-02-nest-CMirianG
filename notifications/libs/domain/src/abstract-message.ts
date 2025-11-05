import { IMessageSender } from "./imessage-sender.interface";

/**
 * Clase abstracta que define la estructura base para los mensajes.
 * Implementa el patrón Bridge para separar la abstracción de la implementación.
 */
export abstract class AbstractMessage {
    /**
     * Instancia del mensajero que se utilizará para enviar el mensaje.
     */
    protected _messageSender: IMessageSender;
    
    /**
     * Método abstracto para enviar un mensaje.
     * @param {string} Message - El mensaje a enviar.
     * @returns {string} - Confirmación del envío del mensaje.
     */
    public abstract SendMessage(Message: string): string;
}

