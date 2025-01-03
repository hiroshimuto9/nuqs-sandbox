"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchUsers } from "../actions";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { User } from "@prisma/client";

export function SearchTable() {
  const [search] = useQueryState("search", { defaultValue: "" });
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers({ search }).then(({ users }) => {
      if (users) {
        setUsers(users);
      }
    });
  }, [search]);

  return (
    <>
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
