import { format } from "date-fns";

interface FlightsItemProps{
    flight: Flight;
}

export function FlightsItem({
    flight,
}: FlightsItemProps) {
    return (
        <div className="flex flex-col items-center font-bold text-black">
        //agregar condicional para el bground
            <div className="flex items-center gap-4">
                <p className="p-16">{format(new Date(flight.HorarioDeLlegada),"HH:mm")}</p>
                <p>{flight.NumeroDeVuelo}</p>
                <p>{flight.LineaAerea}</p>
                <p>{flight.Demorado}</p>
            </div>
        </div>
    );
}