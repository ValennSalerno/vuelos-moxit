"use client";

import { useRouter } from "next/navigation";

export function Navbar() {
  const { push } = useRouter();

  return (
    <div className="flex justify-left items-center pt-2.5 gap-8 pl-8 pb-4  bg-black text-white font-bold ">
      <p role="button" onClick={() => push(`/`)}>
        Flights
      </p>
      <div onClick={() => push(`/register`)}>
        <button>Register</button>
      </div>
      <div onClick={() => push(`/cancel`)}>
        <button>Cancel</button>
      </div>
      <div onClick={() => push(`/modify`)}>
        <button>Modification</button>
      </div>
    </div>
  );
}
