import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { Button } from "@/components/ui/button"

interface CancelPageProps {
    flights: Flight[]; // Lista de números de vuelo
}

export default function CancelPage({ 
    flights
}: CancelPageProps) {
    return (
        <div className="pl-4 font-bold flex flex-col gap-1">
            <h1 className="text-xl pb-2 flex">Cancel a flight</h1>
            <div className="flex gap-4">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Flight" />
                    </SelectTrigger>
                    <SelectContent>
                        {flights && flights.length > 0 ? (
                            flights.map((flight) => (
                                <SelectItem
                                    key={flight.NumeroDeVuelo}
                                    value={flight.NumeroDeVuelo}
                                >
                                    {flight.NumeroDeVuelo}
                                </SelectItem>
                            ))
                        ) : (
                            <SelectItem value="no-flights" disabled>
                                No flights available
                            </SelectItem>
                        )}
                    </SelectContent>
                </Select>
                <Button variant="default">Delete</Button>
            </div>
        </div>
    );
}