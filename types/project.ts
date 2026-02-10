export interface Project {
  id: string;
  title: string;
  slug: string;
  description: {
    kr: string;
    en: string;
    cn: string;
  };
  tags: string[];
  company: string;
  period: {
    start: string | null;
    end: string | null;
  };
  thumbnail: string | null;
  context: {
    type: string; // Startup, Enterprise, etc.
    mau: string; // e.g., "100k+ users"
  };
  role: string;
  status: "Draft" | "Published";
  priority: number;
}

export type Language = "kr" | "en" | "cn";
