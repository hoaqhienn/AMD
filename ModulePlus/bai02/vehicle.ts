/**
 * Represents a vehicle.
 */
export class Vehicle {
    private _owner: string;
    private _type: string;
    private _value: number;
    private _engineCapacity: number;

    /**
     * Creates a new instance of the Vehicle class.
     * @param owner - The owner of the vehicle.
     * @param type - The type of the vehicle.
     * @param engineCapacity - The engine capacity of the vehicle.
     * @param value - The value of the vehicle.
     */
    constructor(
        owner: string,
        type: string,
        engineCapacity: number,
        value: number
    ) {
        this._owner = owner;
        this._type = type;
        this._engineCapacity = engineCapacity;
        this._value = value;
    }

    /**
     * Gets the owner of the vehicle.
     */
    get owner() {
        return this._owner;
    }

    /**
     * Gets the type of the vehicle.
     */
    get type() {
        return this._type;
    }

    /**
     * Gets the engine capacity of the vehicle.
     */
    get engineCapacity() {
        return this._engineCapacity;
    }

    /**
     * Sets the engine capacity of the vehicle.
     * @param capacity - The engine capacity to set.
     * @throws Error if the capacity is less than 0.
     */
    set engineCapacity(capacity: number) {
        if (capacity < 0) {
            throw new Error("Engine capacity must be greater than 0");
        }
        this._engineCapacity = capacity;
    }

    /**
     * Gets the value of the vehicle.
     */
    get value() {
        return this._value;
    }

    /**
     * Sets the value of the vehicle.
     * @param val - The value to set.
     * @throws Error if the value is less than 0.
     */
    set value(val: number) {
        if (val < 0) {
            throw new Error("Value must be greater than 0");
        }
        this._value = val;
    }

    /**
     * Calculates the tax for the vehicle based on its engine capacity and value.
     * @returns The calculated tax amount.
     */
    calculateTax(): number {
        if (this.engineCapacity < 100) {
            return this.value * 0.01;
        } else if (this.engineCapacity <= 200) {
            return this.value * 0.03;
        } else {
            return this.value * 0.05;
        }
    }
}
