import { Client } from "@notionhq/client";
import type {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { Project } from "@/types/project";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

// Helper functions
function getRichText(property: { rich_text: RichTextItemResponse[] } | undefined): string {
  return property?.rich_text?.[0]?.plain_text ?? "";
}

function getTitle(property: { title: RichTextItemResponse[] } | undefined): string {
  return property?.title?.[0]?.plain_text ?? "";
}

function getSelect(property: { select: { name: string } | null } | undefined): string {
  return property?.select?.name ?? "";
}

function getMultiSelect(property: { multi_select: { name: string }[] } | undefined): string[] {
  return property?.multi_select?.map((item) => item.name) ?? [];
}

function getNumber(property: { number: number | null } | undefined): number {
  return property?.number ?? 0;
}

function getFiles(property: { files: Array<{ file?: { url: string }; external?: { url: string } }> } | undefined): string | null {
  const file = property?.files?.[0];
  return file?.file?.url ?? file?.external?.url ?? null;
}

function getDate(property: { date: { start: string | null; end: string | null } | null } | undefined): { start: string | null; end: string | null } {
  return {
    start: property?.date?.start ?? null,
    end: property?.date?.end ?? null,
  };
}

// Map Notion response to Project type
export function mapPageToProject(page: PageObjectResponse): Project {
  // Safe cast with fallback to empty object if properties is missing
  const props = (page.properties as Record<string, unknown>) || {};

  return {
    id: page.id,
    title: getTitle(props.Title as { title: RichTextItemResponse[] }) || "Untitled Project",
    slug: getRichText(props.Slug as { rich_text: RichTextItemResponse[] }) || page.id,
    description: {
      kr: getRichText(props.Description_KR as { rich_text: RichTextItemResponse[] }),
      en: getRichText(props.Description_EN as { rich_text: RichTextItemResponse[] }),
      cn: getRichText(props.Description_CN as { rich_text: RichTextItemResponse[] }),
    },
    tags: getMultiSelect(props.Tags as { multi_select: { name: string }[] }),
    company: getRichText(props.Company as { rich_text: RichTextItemResponse[] }),
    period: getDate(props.Period as { date: { start: string | null; end: string | null } | null }),
    thumbnail: getFiles(props.Thumbnail as { files: Array<{ file?: { url: string }; external?: { url: string } }> }),
    context: {
      type: getSelect(props.Context_Type as { select: { name: string } | null }) || "Project",
      mau: getRichText(props.Context_MAU as { rich_text: RichTextItemResponse[] }),
    },
    role: getRichText(props.Role as { rich_text: RichTextItemResponse[] }),
    status: (getSelect(props.Status as { select: { name: string } | null }) as "Draft" | "Published") || "Draft",
    priority: getNumber(props.Priority as { number: number | null }),
  };
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        select: {
          equals: "Published",
        },
      },
      sorts: [
        {
          property: "Priority",
          direction: "ascending",
        },
      ],
    });

    return response.results
      .filter((page: unknown): page is PageObjectResponse =>
        typeof page === "object" && page !== null && "properties" in page
      )
      .map(mapPageToProject);
  } catch (error) {
    console.error("Failed to fetch projects from Notion:", error);
    return []; // Return empty array instead of crashing
  }
}

export async function getDatabase() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        select: {
          equals: "Published",
        },
      },
      sorts: [
        {
          property: "Priority",
          direction: "ascending",
        },
      ],
    });
    return response.results;
  } catch (error) {
    console.error("Failed to fetch database:", error);
    return [];
  }
}

export async function getPage(pageId: string) {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
}

export async function getBlocks(blockId: string) {
  const blocks = [];
  let cursor;

  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
    });
    blocks.push(...results);
    if (!next_cursor) break;
    cursor = next_cursor;
  }

  return blocks;
}

// Get project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
          {
            property: "Status",
            select: {
              equals: "Published",
            },
          },
        ],
      },
    });

    const page = response.results[0];
    if (!page || !("properties" in page)) {
      return null;
    }

    return mapPageToProject(page as PageObjectResponse);
  } catch (error) {
    console.error("Failed to fetch project by slug:", error);
    return null;
  }
}

// Get project content (blocks)
export async function getProjectContent(pageId: string) {
  try {
    const blocks = await getBlocks(pageId);
    return blocks;
  } catch (error) {
    console.error("Failed to fetch project content:", error);
    return [];
  }
}

// Get all project slugs for static generation
export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getProjects();
  return projects.map((p) => p.slug);
}
