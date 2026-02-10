"use client";

import Image from "next/image";
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface NotionRendererProps {
  blocks: BlockObjectResponse[];
}

type RichTextItem = {
  plain_text: string;
  href: string | null;
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
  };
};

function renderRichText(richTexts: RichTextItem[]): React.ReactNode {
  if (!richTexts || richTexts.length === 0) return null;

  return richTexts.map((text, i) => {
    let content: React.ReactNode = text.plain_text;

    if (text.annotations.bold) content = <strong key={`b-${i}`}>{content}</strong>;
    if (text.annotations.italic) content = <em key={`i-${i}`}>{content}</em>;
    if (text.annotations.strikethrough) content = <del key={`s-${i}`}>{content}</del>;
    if (text.annotations.underline) content = <u key={`u-${i}`}>{content}</u>;
    if (text.annotations.code) {
      content = <code key={`c-${i}`} className="bg-dark-gray px-1.5 py-0.5 rounded text-lime text-sm">{content}</code>;
    }
    if (text.href) {
      content = (
        <a
          key={`a-${i}`}
          href={text.href}
          className="text-lime hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return <span key={i}>{content}</span>;
  });
}

export default function NotionRenderer({ blocks }: NotionRendererProps) {
  if (!blocks || blocks.length === 0) {
    return (
      <p className="text-text-sub">No content available.</p>
    );
  }

  return (
    <div className="notion-content">
      {blocks.map((block) => {
        const { id, type } = block;
        const blockData = block as BlockObjectResponse & Record<string, unknown>;

        switch (type) {
          case "paragraph": {
            const paragraph = blockData.paragraph as { rich_text: RichTextItem[] };
            if (!paragraph?.rich_text?.length) return <br key={id} />;
            return (
              <p key={id} className="mb-4 text-text-sub leading-relaxed">
                {renderRichText(paragraph.rich_text)}
              </p>
            );
          }

          case "heading_1": {
            const heading = blockData.heading_1 as { rich_text: RichTextItem[] };
            return (
              <h2 key={id} className="text-h1 text-white mt-12 mb-4 font-bold">
                {renderRichText(heading.rich_text)}
              </h2>
            );
          }

          case "heading_2": {
            const heading = blockData.heading_2 as { rich_text: RichTextItem[] };
            return (
              <h3 key={id} className="text-h2 text-white mt-8 mb-3 font-semibold">
                {renderRichText(heading.rich_text)}
              </h3>
            );
          }

          case "heading_3": {
            const heading = blockData.heading_3 as { rich_text: RichTextItem[] };
            return (
              <h4 key={id} className="text-lg font-semibold text-white mt-6 mb-2">
                {renderRichText(heading.rich_text)}
              </h4>
            );
          }

          case "bulleted_list_item": {
            const listItem = blockData.bulleted_list_item as { rich_text: RichTextItem[] };
            return (
              <li key={id} className="ml-6 mb-2 text-text-sub list-disc">
                {renderRichText(listItem.rich_text)}
              </li>
            );
          }

          case "numbered_list_item": {
            const listItem = blockData.numbered_list_item as { rich_text: RichTextItem[] };
            return (
              <li key={id} className="ml-6 mb-2 text-text-sub list-decimal">
                {renderRichText(listItem.rich_text)}
              </li>
            );
          }

          case "quote": {
            const quote = blockData.quote as { rich_text: RichTextItem[] };
            return (
              <blockquote key={id} className="border-l-4 border-lime pl-4 my-6 italic text-text-sub">
                {renderRichText(quote.rich_text)}
              </blockquote>
            );
          }

          case "code": {
            const code = blockData.code as { rich_text: RichTextItem[]; language?: string };
            const codeText = code.rich_text.map((t) => t.plain_text).join("");
            return (
              <pre key={id} className="bg-dark-gray p-4 rounded-lg overflow-x-auto my-4 border border-stroke">
                <code className="text-sm text-lime font-mono whitespace-pre-wrap">
                  {codeText}
                </code>
              </pre>
            );
          }

          case "image": {
            const image = blockData.image as {
              type: "external" | "file";
              external?: { url: string };
              file?: { url: string };
              caption?: RichTextItem[];
            };
            const imageUrl = image.type === "external"
              ? image.external?.url
              : image.file?.url;

            if (!imageUrl) return null;

            return (
              <figure key={id} className="my-8">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-dark-gray">
                  <Image
                    src={imageUrl}
                    alt={image.caption?.[0]?.plain_text || "Project image"}
                    fill
                    className="object-contain"
                  />
                </div>
                {image.caption && image.caption.length > 0 && (
                  <figcaption className="text-center text-caption text-text-sub mt-2">
                    {renderRichText(image.caption)}
                  </figcaption>
                )}
              </figure>
            );
          }

          case "divider":
            return <hr key={id} className="border-stroke my-8" />;

          case "callout": {
            const callout = blockData.callout as {
              rich_text: RichTextItem[];
              icon?: { emoji?: string }
            };
            return (
              <div key={id} className="flex gap-3 bg-dark-gray/50 border border-stroke rounded-lg p-4 my-4">
                <span className="text-xl">{callout.icon?.emoji || "💡"}</span>
                <div className="text-text-sub flex-1">
                  {renderRichText(callout.rich_text)}
                </div>
              </div>
            );
          }

          case "toggle": {
            const toggle = blockData.toggle as { rich_text: RichTextItem[] };
            return (
              <details key={id} className="my-4 bg-dark-gray/30 rounded-lg border border-stroke">
                <summary className="cursor-pointer p-4 text-white font-medium hover:bg-dark-gray/50 rounded-lg">
                  {renderRichText(toggle.rich_text)}
                </summary>
              </details>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
