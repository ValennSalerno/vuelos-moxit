import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function AltaPage() {
  return (
    <div className="pl-4 flex flex-col gap-1">
      <h1 className="text-xl pb-2 font-bold">Register a new flight</h1>
      <p>Arrival time</p>
      <Input type="text" placeholder="Horario de llegada" />
      <label className="text-gray-400 pb-4 text-xs">
        We'll never share your email with anyone else
      </label>
      <p>Flight</p>
      <Input type="text" placeholder="Numero de vuelo p. ej: AU2399" />
      <p className="pt-4">Airline</p>
      <Input type="text" placeholder="Linea Aerea p. ej: Latam" />
      <div className="flex gap-2 py-4">
        <Checkbox id="delayed" />
        <label
          htmlFor="delayed"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Delayed
        </label>
      </div>

      <Button variant="default">Save</Button>
    </div>
  );
}
