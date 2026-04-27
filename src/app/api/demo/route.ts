import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, phone } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const res = await fetch(`${process.env.MC_API_BASE}/api-lead/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.MC_API_KEY!,
    },
    body: JSON.stringify({
      title: name,
      businessId: process.env.MC_BUSINESS_ID,
      funnelId: process.env.MC_FUNNEL_ID,
      clientPhone: phone,
      sourceType: "api",
      sourceId: process.env.MC_SOURCE_ID,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Upstream error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
