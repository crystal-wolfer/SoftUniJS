class FlightBookingSystem {
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    let existingFlight = this.flights.find(flight => flight.flightNumber === flightNumber);

    if(existingFlight){
      return `Flight ${flightNumber} to ${destination} is already available.`
    }

    this.flights.push(
      {
        flightNumber,
        destination,
        departureTime,
        price,
      }
    );

    return `Flight ${flightNumber} to ${destination} has been added to the system.`
  }

  bookFlight (passengerName, flightNumber){
    let existingFlight = this.flights.find(flight => flight.flightNumber === flightNumber);

    if(!existingFlight){
      return `Flight ${flightNumber} is not available for booking.`
    }

    this.bookings.push({
      passengerName,
      flightNumber
    })
    this.bookingsCount += 1;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
  }

  cancelBooking (passengerName, flightNumber){
    let exsistingPassenger = this.bookings.find(passenger => passenger.passengerName === passengerName);
    let existingFlight = this.bookings.find(flight => flight.flightNumber === flightNumber);

    if(!exsistingPassenger || !existingFlight){
      throw new Error (`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
    }

    this.bookings = this.bookings.filter(passenger => passenger.passengerName !== passengerName);
    this.bookingsCount -= 1;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
  }

  showBookings (criteria){
    if(this.bookings.length === 0){
      throw new Error (`No bookings have been made yet.`)
    }

    let result = [];
    if(criteria === "all"){
      result.push(`All bookings(${this.bookingsCount}):`);

      this.bookings.forEach(booking => {
        result.push(
          `${booking.passengerName} booked for flight ${booking.flightNumber}.`
        );
      });

      return result.join('\n')
    }

    if(criteria === "cheap"){
      let cheapBookings =this.bookings.filter(
        (booking) => {
          const flight = this.flights.find((f) => f.flightNumber === booking.flightNumber);
          return flight && flight.price <= 100;
        })
        
      if(cheapBookings.length === 0){
        return "No cheap bookings found."
      }

      result.push("Cheap bookings:");
      cheapBookings.forEach(booking => {
        result.push(
          `${booking.passengerName} booked for flight ${booking.flightNumber}.`
        );
      });

      return result.join("\n");
    }

    if(criteria === "expensive"){
      let expensiveBookings =this.bookings.filter(
        (booking) => {
          const flight = this.flights.find((f) => f.flightNumber === booking.flightNumber);
          return flight && flight.price > 100;
        })
        
      if(expensiveBookings.length === 0){
        return "No cheap bookings found."
      }

      result.push("Expensive bookings:");
      expensiveBookings.forEach(booking => {
        result.push(
          `${booking.passengerName} booked for flight ${booking.flightNumber}.`
        );
      });

      return result.join("\n");
    }

  }
}

  const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("expensive"));
  console.log(system.showBookings("cheap"));

  // Flight AA101 to Los Angeles has been added to the system.
  // Flight BB202 to New York has been added to the system.
  // Booking for passenger Alice on flight AA101 is confirmed.
  // Booking for passenger Bob on flight BB202 is confirmed.
  // Expensive bookings:
  // Alice booked for flight AA101.
  // Bob booked for flight BB202.
  // No cheap bookings found.

// 15:16 done 54min


