/**
 * Represents the main class of the application.
 */
import { Vehicle } from "./vehicle";

class Main {
    /**
     * The entry point of the application.
     */
    public static main() {
        // Create vehicles
        const vehicles = [
            new Vehicle("John", "Future Neo", 100, 35000000),
            new Vehicle("Mary", "Ford Ranger", 3000, 250000000),
            new Vehicle("Peter", "Landscape", 1500, 1000000000)
        ];

        // Print tax table
        console.log("Tax Report:");
        
        console.table(
            vehicles.map(vehicle => ({
                Owner: vehicle.owner,
                Type: vehicle.type, 
                Engine: `${vehicle.engineCapacity}cc`,
                Value: vehicle.value,
                Tax: vehicle.calculateTax()  
            }))
        );
    }
}

Main.main();
