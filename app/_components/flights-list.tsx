import { FlightsItem } from "./flights-item";

interface FlightsListProps{
    flights: Flight[];
}

export function FlightsList({
    flights,
}: FlightsListProps) {
    return (
        <div className="flex flex-col gap-2">
            //mapear los items
            {flights.map((flight) =>(
                <FlightsItem
                    key={flight.NumeroDeVuelo}
                    flight={flight}
                />
            ))}
        </div>
    );
}