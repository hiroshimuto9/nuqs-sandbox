"use client";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useQueryState } from "nuqs";

export function SearchField() {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <div className="mb-4">
      <Input
        type="text"
        placeholder="name"
        value={search || ""}
        onChange={handleSearchChange}
      />
    </div>
  );
}
