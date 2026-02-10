
import { NextResponse } from "next/server";
import { getProjects } from "@/lib/notion";

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    console.error("Notion API Error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
