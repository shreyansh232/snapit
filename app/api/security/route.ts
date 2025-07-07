import { NextRequest } from "next/server";
import aj from "@/lib/arcjet";
import { shield, detectBot } from "@arcjet/next";

const validate = aj.withRule(shield({ mode: "LIVE" })).withRule(
  detectBot({
    mode: "LIVE", 
    allow: ["CATEGORY:SEARCH_ENGINE", "GOOGLE_CRAWLER"],
  })
);

export async function POST(request: NextRequest) {
  const decision = await validate.protect(request);
  
  if (decision.isDenied()) {
    return Response.json({ blocked: true }, { status: 403 });
  }
  
  return Response.json({ allowed: true });
}
