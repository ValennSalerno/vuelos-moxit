import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default async function EditPage({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data } = await supabase
    .from("Flights")
    .select()
    .match({ id: Number(params.id) })
    .single();

  const saveFlight = async (formData: FormData) => {
    "use server";
    const supabase = createClient();
    const arrivalTime = formData.get("arrivalTime") as string;
    const airline = formData.get("airline") as string;
    const numberOfFlight = formData.get("numberOfFlight") as string;
    const delayed = formData.get("delayed") as unknown as boolean;
    await supabase
      .from("Flights")
      .update({
        arrival_time: arrivalTime,
        airline,
        number_of_flight: numberOfFlight,
        delayed,
      })
      .eq("id", Number(params.id));
    return redirect("/");
  };

  return (
    <form action={saveFlight} className="pl-4 flex flex-col gap-1">
      <h1 className="text-xl pb-2 font-bold">Edit a new flight</h1>
      <p>Arrival time</p>
      <Input
        required
        defaultValue={data.arrival_time}
        name="arrivalTime"
        type="text"
        placeholder="--:--"
      />
      <label className="text-gray-400 pb-4 text-xs">
        We'll never share your email with anyone else
      </label>
      <p>Flight</p>
      <Input
        required
        defaultValue={data.number_of_flight}
        name="numberOfFlight"
        type="text"
        placeholder="Number of flight f. ex: AU2399"
      />
      <p className="pt-4">Airline</p>
      <Input
        required
        defaultValue={data.airline}
        name="airline"
        type="text"
        placeholder="Airline f. ex: Latam"
      />
      <div className="flex gap-2 py-4">
        <Checkbox defaultChecked={data.delayed} name="delayed" id="delayed" />
        <label
          htmlFor="delayed"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Delayed
        </label>
      </div>

      <Button type="submit" className="w-1/5" variant="default">
        Save
      </Button>
    </form>
  );
}
