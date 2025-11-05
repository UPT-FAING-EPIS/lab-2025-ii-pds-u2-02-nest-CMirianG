/**
 * Interfaz que define el contrato para enviar mensajes.
 * Implementa el patrón Bridge para separar la abstracción de la implementación.
 */
export interface IMessageSender {
  /**
   * Envía un mensaje utilizando el método de envío específico.
   * @param {string} Message - El mensaje a enviar.
   * @returns {string} - Confirmación del envío del mensaje.
   */
  SendMessage(Message: string): string;
}

