import { Suspense } from "react";
import { SearchField } from "./_components/SearchField";
import { SearchTable } from "./_components/Table";

export default function Page() {
  return (
    <>
      <div className="mb-4">
        <SearchField />
      </div>
      <Suspense fallback="Loading...">
        <SearchTable />
      </Suspense>
    </>
  );
}
