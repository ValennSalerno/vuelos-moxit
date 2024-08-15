"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface FlightsListProps {
  flights: Flight[];
}

export function FlightsList({ flights }: FlightsListProps) {
  const { push } = useRouter();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Arrival time</TableHead>
          <TableHead>Flight</TableHead>
          <TableHead>Airline</TableHead>
          <TableHead>Delayed</TableHead>
          <TableHead>Settings</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {flights.map((flight) => (
          <TableRow key={flight.number_of_flight}>
            <TableCell className="font-medium">{flight.arrival_time}</TableCell>
            <TableCell>{flight.number_of_flight}</TableCell>
            <TableCell>{flight.airline}</TableCell>
            <TableCell>{flight.delayed ? "Yes" : "No"}</TableCell>
            <TableCell className="flex gap-4">
              <Button
                type="button"
                className="w-[70px] h-[30px] flex"
                variant="default"
                onClick={() => push(`/edit/${flight.id}`)}
              >
                Edit
              </Button>
              <Button
                type="button"
                className="w-[70px] h-[30px] flex bg-red-700"
                variant="default"
                onClick={() => push(`/cancel/${flight.id}`)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {flights?.length ? null : (
        <TableFooter>
          <p>No results.</p>
        </TableFooter>
      )}
    </Table>
  );
}
