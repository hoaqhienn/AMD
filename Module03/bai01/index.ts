/**
 * Represents a trip.
 */
class Trip {
    tripCode: number;
    driverName: string;
    licensePlate: number;
    revenue: number;

    /**
     * Creates a new instance of the Trip class.
     * @param tripCode - The trip code.
     * @param driverName - The driver's name.
     * @param licensePlate - The license plate number.
     * @param revenue - The revenue generated from the trip.
     */
    constructor(tripCode: number, driverName: string, licensePlate: number, revenue: number) {
        this.tripCode = tripCode;
        this.driverName = driverName;
        this.licensePlate = licensePlate;
        this.revenue = revenue;
    }
}

/**
 * Represents a city trip, which is a type of trip.
 */
class CityTrip extends Trip {
    routeNumber: number;
    distance: number;

    /**
     * Creates a new instance of the CityTrip class.
     * @param tripCode - The trip code.
     * @param driverName - The driver's name.
     * @param licensePlate - The license plate number.
     * @param routeNumber - The route number.
     * @param distance - The distance of the trip.
     * @param revenue - The revenue generated from the trip.
     */
    constructor(tripCode: number, driverName: string, licensePlate: number, routeNumber: number, distance: number, revenue: number) {
        super(tripCode, driverName, licensePlate, revenue);
        this.routeNumber = routeNumber;
        this.distance = distance;
    }
}

/**
 * Represents an outbound trip, which is a type of trip.
 */
class OutboundTrip extends Trip {
    destination: string;
    numberOfDays: number;

    /**
     * Creates a new instance of the OutboundTrip class.
     * @param tripCode - The trip code.
     * @param driverName - The driver's name.
     * @param licensePlate - The license plate number.
     * @param destination - The destination of the trip.
     * @param numberOfDays - The number of days for the trip.
     * @param revenue - The revenue generated from the trip.
     */
    constructor(tripCode: number, driverName: string, licensePlate: number, destination: string, numberOfDays: number, revenue: number) {
        super(tripCode, driverName, licensePlate, revenue);
        this.destination = destination;
        this.numberOfDays = numberOfDays;
    }
}

/**
 * The main function that calculates and displays the total revenue of all trips,
 * as well as the total revenue of city trips and outbound trips separately.
 */
function main() {
    let trips: Trip[] = [];

    trips.push(new CityTrip(1, "Hiện", 123, 56, 200, 1000000));
    trips.push(new CityTrip(2, "Tuấn", 456, 22, 150, 1200000));

    trips.push(new OutboundTrip(3, "Nhân", 789, "Ha Noi", 3, 1500000));
    trips.push(new OutboundTrip(4, "Sang", 963, "Da Nang", 5, 2500000));

    let totalRevenue = 0;
    for (let trip of trips) {
        totalRevenue += trip.revenue;
    }
    console.log("- Tổng doanh thu tất cả chuyến xe: " + totalRevenue);

    let cityTripsRevenue = 0;
    let outboundTripsRevenue = 0;

    for (let trip of trips) {
        if (trip instanceof CityTrip) {
            cityTripsRevenue += trip.revenue;
        } else if (trip instanceof OutboundTrip) {
            outboundTripsRevenue += trip.revenue;
        }
    }

    console.log("- Tổng doanh thu chuyến nội thành: " + cityTripsRevenue);
    console.log("- Tổng doanh thu chuyến ngoại thành: " + outboundTripsRevenue);
}

main();
