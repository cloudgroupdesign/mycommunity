export async function createDemoLead(name: string, phone: string): Promise<void> {
  const res = await fetch("/api/demo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone }),
  });

  if (!res.ok) throw new Error("Failed to submit");
}
