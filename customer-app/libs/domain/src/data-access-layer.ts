import { Customer } from "./customer";

/**
 * Clase que simula la capa de acceso a datos para clientes.
 * En una implementación real, esta clase interactuaría con una base de datos.
 */
export class DataAccessLayer {
    /**
     * Lista de clientes almacenados en memoria.
     */
    public Customers: Array<Customer>;
    
    /**
     * Crea una instancia de DataAccessLayer.
     */
    constructor() {
        this.Customers = [];
    }
    
    /**
     * Guarda un cliente en la lista de clientes.
     * @param {Customer} customer - El cliente a guardar.
     * @returns {boolean} - true si el cliente se guardó correctamente.
     */
    public SaveCustomer(customer: Customer): boolean
    {
        this.Customers.push(customer);
        return true;
    }           
}

