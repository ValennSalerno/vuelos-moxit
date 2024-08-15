import { FlightsList } from "./_components/flights-list";
import { createClient } from "@/lib/supabase";

export default async function Home() {
  const supabase = createClient();
  const { data: flights } = await supabase.from("Flights").select();

  return (
    <main>
      <h1 className="text-black text-xl font-bold pl-3">Next flights</h1>
      <div>
        <FlightsList flights={flights as unknown as Flight[]} />
      </div>
    </main>
  );
}
