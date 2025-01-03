"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useQueryState } from "nuqs";

export function Condition() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="bg-blue-300 p-2 rounded ">
      <p>path : {pathname}</p>
      <p>searchParams : {searchParams.toString()}</p>
    </div>
  );
}
