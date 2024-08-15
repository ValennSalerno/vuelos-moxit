import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default async function cancelPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data } = await supabase
    .from("Flights")
    .select()
    .match({ id: Number(params.id) })
    .single();

  const deleteFlight = async (formData: FormData) => {
    "use server";
    const supabase = createClient();
    await supabase.from("Flights").delete().eq("id", Number(params.id));
    return redirect("/");
  };

  return (
    <form action={deleteFlight} className="pl-4 flex flex-col gap-1">
      <h1 className="text-xl pb-2 font-bold">Delete an existing flight</h1>
      <p> Flight {data.number_of_flight}</p>

      <Button
        type="submit"
        className="w-[70px] h-[30px] flex bg-red-700"
        variant="default"
      >
        Delete
      </Button>
    </form>
  );
}
