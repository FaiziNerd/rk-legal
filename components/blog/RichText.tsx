import Image from "next/image";
import {
  documentToReactComponents,
  type Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS, type Document } from "@contentful/rich-text-types";

/** Renders a Contentful rich-text document with the RK type ramp. */
export function RichText({ document }: { document: Document }) {
  return <>{documentToReactComponents(document, options)}</>;
}

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <span className="font-semibold text-ink">{text}</span>
    ),
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => (
      <p className="t-body-l mt-5 text-body">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => (
      <h2 className="t-h3 mt-10">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node, children) => (
      <h3 className="t-question mt-8">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (_node, children) => (
      <ul className="mt-5 space-y-3 [&_li]:flex [&_li]:gap-3">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node, children) => (
      <ol className="mt-5 list-decimal space-y-3 pl-6 marker:font-semibold marker:text-brand">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node, children) => (
      <li className="t-body-l text-body [&>p]:mt-0">{children}</li>
    ),
    [BLOCKS.QUOTE]: (_node, children) => (
      <blockquote className="mt-6 border-l-2 border-brand pl-5 text-body [&>p]:t-body-l [&>p]:italic">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-divider" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const file = node.data?.target?.fields?.file;
      const url: string | undefined = file?.url;
      const alt: string =
        node.data?.target?.fields?.description ??
        node.data?.target?.fields?.title ??
        "";
      if (!url) return null;
      const src = url.startsWith("//") ? `https:${url}` : url;
      const w = file?.details?.image?.width ?? 1200;
      const h = file?.details?.image?.height ?? 750;
      return (
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          className="mt-8 h-auto w-full rounded-card object-cover"
        />
      );
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="font-medium text-brand underline"
        target={node.data.uri?.startsWith("http") ? "_blank" : undefined}
        rel={node.data.uri?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
};
