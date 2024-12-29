import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
export default async function Page() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const { data: users, error: usersError } = await supabase
    .from("User")
    .select("*");

  return (
    <>
      <p>Hello {data.user.email}</p>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <pre>{JSON.stringify(usersError, null, 2)}</pre>
    </>
  );
}
