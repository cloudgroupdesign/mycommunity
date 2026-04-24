const API_BASE    = "https://api.my-community.pp.ua/api";
const API_KEY     = "addb7de5-cfc7-46fe-adb7-334318253d03";
const BUSINESS_ID = "cmm4mcywl174gnisjy4vdzzii";
const FUNNEL_ID   = "cmmlv06d10015xzvvlfvosdqs";
const SOURCE_ID   = "cmmlv06hb001gxzvv8y4bz3q6";

export async function createDemoLead(name: string, phone: string): Promise<void> {
  await fetch(`${API_BASE}/api-lead/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
    body: JSON.stringify({
      title: name,
      businessId: BUSINESS_ID,
      funnelId: FUNNEL_ID,
      clientPhone: phone,
      sourceType: "api",
      sourceId: SOURCE_ID,
    }),
  });
}
