import { FlightsList } from "./_components/flights-list";
import flights from "./_data/vuelos.json";

export default function Home() {
  return (
    <main>
      <h1 className="text-black text-xl font-bold pl-3">Next flights</h1>
      <div>
        <div></div>
        <FlightsList flights={flights} />
      </div>
    </main>
  );
}
