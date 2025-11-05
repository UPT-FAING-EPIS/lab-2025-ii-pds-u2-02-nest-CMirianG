/**
 * Clase que representa un cliente en el sistema.
 */
export class Customer {
    /**
     * Nombre del cliente.
     */
    public Name: string;
    
    /**
     * Correo electrónico del cliente.
     */
    public Email: string;
    
    /**
     * Número de teléfono móvil del cliente.
     */
    public MobileNumber: string;
    
    /**
     * Dirección del cliente.
     */
    public Address: string;
    
    /**
     * Contraseña del cliente.
     */
    public Password: string;
    
    /**
     * Método estático para crear una instancia de Customer.
     * @param {string} name - Nombre del cliente.
     * @param {string} email - Correo electrónico del cliente.
     * @param {string} mobileNumber - Número de teléfono móvil del cliente.
     * @param {string} address - Dirección del cliente.
     * @param {string} password - Contraseña del cliente.
     * @returns {Customer} - Nueva instancia de Customer.
     */
    public static Create(name: string, email: string, mobileNumber: string, address: string, password: string): Customer
    {
        const c = new Customer();
        c.Name = name;
        c.Email = email; 
        c.MobileNumber = mobileNumber; 
        c.Address = address; 
        c.Password = password;
        return c;
    }
}

