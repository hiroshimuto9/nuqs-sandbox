"use client";
import { usePathname } from "next/navigation";

export function Condition({ search }: { search: string }) {
  const pathname = usePathname();

  return (
    <div className="bg-blue-300 p-2 rounded ">
      <p>path : {pathname}</p>
      <p>searchParams : {search}</p>
    </div>
  );
}
