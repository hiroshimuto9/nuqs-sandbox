import { Suspense } from "react";
import { SearchField } from "./_components/SearchField";
import { SearchTable } from "./_components/Table";
import { Condition } from "./_components/Condition";

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  return (
    <>
      <div className="mb-4">
        <SearchField />
      </div>
      <Suspense fallback="Loading...">
        <SearchTableWrapper searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function SearchTableWrapper({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const search = (await searchParams).search;
  return (
    <>
      <Condition search={search} />
      <SearchTable search={search} />
    </>
  );
}
