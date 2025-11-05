import { Customer } from "./customer";
import { DataAccessLayer } from "./data-access-layer";
import { EmailService } from "./email-service";
import { Validator } from "./validator";

/**
 * Clase que implementa el patrón Facade para simplificar el proceso de registro de clientes.
 * Encapsula la lógica compleja de validación, guardado y notificación en un método simple.
 */
export class CustomerRegistration {
    /**
     * Registra un cliente en el sistema.
     * Este método implementa el patrón Facade, ocultando la complejidad de los subsistemas
     * (Validación, Acceso a Datos y Servicio de Email) y proporcionando una interfaz simple.
     * @param {Customer} customer - El cliente a registrar.
     * @returns {boolean} - true si el registro se completó exitosamente.
     * @throws {Error} - Si la validación del cliente falla.
     */
    public RegisterCustomer(customer: Customer): boolean
    {
        //Step1: Validate the Customer
        const validator = new Validator();
        validator.ValidateCustomer(customer);
        //Step2: Save the Customer Object into the database
        const customerDataAccessLayer = new DataAccessLayer();
        customerDataAccessLayer.SaveCustomer(customer);
        //Step3: Send the Registration Email to the Customer
        const email = new EmailService();
        email.SendRegistrationEmail(customer);
        return true;
    }    
}

