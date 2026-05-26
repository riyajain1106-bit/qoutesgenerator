import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://zenquotes.io/api/random", {
      next: { revalidate: 0 },
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    const { q: content, a: author } = data[0];
    return NextResponse.json({ content, author });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch quote" },
      { status: 500 }
    );
  }
}
