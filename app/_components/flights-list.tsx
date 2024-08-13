import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { format } from "date-fns";

interface FlightsListProps {
  flights: Flight[];
}

export function FlightsList({ flights }: FlightsListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Arrival time</TableHead>
          <TableHead>Flight</TableHead>
          <TableHead>Airline</TableHead>
          <TableHead>Delayed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {flights.map((flight) => (
          <TableRow key={flight.NumeroDeVuelo}>
            <TableCell className="font-medium">
              {format(new Date(flight.HorarioDeLlegada), "HH:mm")}
            </TableCell>
            <TableCell>{flight.NumeroDeVuelo}</TableCell>
            <TableCell>{flight.LineaAerea}</TableCell>
            <TableCell>
              {flight.Demorado !== undefined
                ? flight.Demorado
                  ? "Yes"
                  : "No"
                : "No info"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
