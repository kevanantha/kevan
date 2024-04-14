import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ ok: true }, { status: 200 });
}

export async function DELETE() {
  cookies().delete("token");
  cookies().delete("refresh_token");

  cookies().set("token", "{}");
  cookies().set("refresh_token", "");

  cookies().set("token", "{}", { maxAge: 0 });
  cookies().set("refresh_token", "", { maxAge: 0 });

  revalidatePath("/");

  return NextResponse.json(
    {
      ok: true,
      refresh_token: cookies().get("refresh_token")?.value,
      token: cookies().get("token")?.value,
    },
    { status: 200 }
  );
}
