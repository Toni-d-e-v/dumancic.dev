import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export type Team = {
  name: string;
  role: string;
  avatar?: string;
  linkedIn?: string;
  bio?: string;
};

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

export type Post = {
  metadata: Metadata;
  slug: string;
  content: string;
};

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string): { metadata: Metadata; content: string } {
  if (!fs.existsSync(filePath)) notFound();

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt || "",
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || "",
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content };
}

function getMDXData(dir: string): Post[] {
  return getMDXFiles(dir).map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return { metadata, slug, content };
  });
}

/** Read all posts from a content directory ("blog" | "work"), newest first. */
export function getPosts(type: "blog" | "work"): Post[] {
  const dir = path.join(process.cwd(), "content", type);
  return getMDXData(dir).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );
}

export function getPost(type: "blog" | "work", slug: string): Post | undefined {
  return getPosts(type).find((p) => p.slug === slug);
}

/** Number of work/project entries — used for the nav "Work" badge. */
export function getWorkCount(): number {
  return getPosts("work").length;
}
