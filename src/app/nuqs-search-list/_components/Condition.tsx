"use client";
import { usePathname } from "next/navigation";
import { useQueryState } from "nuqs";

export function Condition() {
  const pathname = usePathname();
  const [search] = useQueryState("search", { defaultValue: "" });

  return (
    <div className="bg-blue-300 p-2 rounded ">
      <p>path : {pathname}</p>
      <p>searchParams : {search}</p>
    </div>
  );
}
