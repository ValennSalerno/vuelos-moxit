"use client";

import { useRouter } from "next/navigation";

export function Navbar() {
    const { push } =useRouter();

    return (
        <div className="flex justify-left pt-2.5 gap-16 pl-8">
            <div onClick={() => push(`/`)}>
                <button>
                    Vuelos
                </button>
            </div>
            <div onClick={() => push(`/alta`)}>
                <button>
                    Alta
                </button>
            </div>
            <div onClick={() => push(`/baja`)}>
                <button>
                    Baja
                </button>
            </div>
            <div onClick={() => push(`/modificacion`)}>
                <button>
                    Modificacion
                </button>
            </div>
        </div>
    );
  }