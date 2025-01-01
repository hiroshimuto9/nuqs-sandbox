"use client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export function SearchField() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    router.push(`?search=${value}`);
  };

  return (
    <div className="mb-4">
      <Input
        type="text"
        placeholder="name"
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
}
