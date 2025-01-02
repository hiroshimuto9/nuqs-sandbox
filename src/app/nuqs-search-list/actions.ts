"use server";
import { createClient } from "@/lib/supabase/server";

export async function fetchUsers({ search }: { search: string }) {
  const supabase = await createClient();
  const { data: users, error: usersError } = await supabase
    .from("User")
    .select()
    .ilike("name", `%${search}%`);

  return { users, usersError };
}
