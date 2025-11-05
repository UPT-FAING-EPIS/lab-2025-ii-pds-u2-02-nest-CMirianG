import { Customer } from "./customer";

/**
 * Clase que proporciona métodos de validación para clientes.
 */
export class Validator {
    /**
     * Valida que un cliente tenga todos los campos requeridos y no estén vacíos.
     * @param {Customer} customer - El cliente a validar.
     * @returns {boolean} - true si el cliente es válido.
     * @throws {Error} - Si algún campo requerido está vacío o es nulo.
     */
    public ValidateCustomer(customer: Customer): boolean
    {
        //Need to Validate the Customer Object
        if (typeof customer.Name === 'string' && customer.Name.trim().length === 0) throw new Error("Name can't be null or empty");
        if (typeof customer.Email === 'string' && customer.Email.trim().length === 0) throw new Error("Email can't be null or empty");
        if (typeof customer.MobileNumber === 'string' && customer.MobileNumber.trim().length === 0) throw new Error("MobileNumber can't be null or empty");
        if (typeof customer.Address === 'string' && customer.Address.trim().length === 0) throw new Error("Address can't be null or empty");
        return true;
    }    
}

