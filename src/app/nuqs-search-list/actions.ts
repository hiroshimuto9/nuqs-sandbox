"use server";
import { createClient } from "@/lib/supabase/server";
type User = {
  id: number;
  name: string;
};
export async function fetchUsers({ search }: { search: string }): Promise<{
  users: User[] | null;
  usersError: any;
}> {
  const supabase = await createClient();
  const { data: users, error: usersError } = await supabase
    .from("User")
    .select()
    .ilike("name", `%${search}%`);

  return { users, usersError };
}
