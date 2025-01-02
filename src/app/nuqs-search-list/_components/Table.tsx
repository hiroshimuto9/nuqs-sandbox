import { createClient } from "@/lib/supabase/server";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export async function SearchTable({ search }: { search: string }) {
  const supabase = await createClient();
  const { data: users, error: usersError } = await supabase
    .from("User")
    .select()
    .ilike("name", `%${search}%`);

  return (
    <>
      <div className="bg-blue-300 my-4 p-2 rounded">
        searchParams : {search}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
