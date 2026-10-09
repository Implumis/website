import type { MDXComponents } from "mdx/types";
import ImageViewer from "./components/ui/ImageViewer";
import { cn, parseImageAlt } from "./lib/client/utils";

export function useMDXComponents(): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-3xl first:mt-0! mt-5 py-0.5 font-medium">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h2 className="text-xl md:text-2xl first:mt-0! mt-4 py-0.5 font-medium">
        {children}
      </h2>
    ),
    p: ({ children }) => <p className="mt-3">{children}</p>,
    a: (props) => (
      <a
        {...props}
        className={cn("inline-anchor break-words", props.className)}
      ></a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-white/30 pl-4 my-2 italic text-white/70">
        {children}
      </blockquote>
    ),
    img: ({ src, alt, ...props }) => {
      const { text, align, width, caption } = parseImageAlt(alt || "");

      const wrapperAlignClass =
        align === "left"
          ? "justify-start"
          : align === "right"
            ? "justify-end"
            : "justify-center";

      const isAuto = width === "auto";
      const hasExplicitWidth = width && !isAuto;
      const sizeClass = width ? "" : "w-full";
      const imgClassName = `rounded-md border h-auto ${sizeClass}`;

      /* eslint-disable @next/next/no-img-element */
      const image = isAuto ? (
        <img
          src={src}
          alt={text}
          loading="lazy"
          decoding="async"
          className="rounded-md border h-auto"
          {...props}
        />
      ) : (
        <img
          src={src}
          alt={text}
          loading="lazy"
          decoding="async"
          className={imgClassName}
          style={hasExplicitWidth ? { width } : undefined}
          {...props}
        />
      );
      /* eslint-enable @next/next/no-img-element */

      return (
        <span className={`flex my-4 w-full ${wrapperAlignClass}`}>
          <span className="inline-flex flex-col items-center">
            <ImageViewer src={src || ""} alt={text} caption={caption}>
              {image}
            </ImageViewer>
            {caption && (
              <span className="text-sm text-white/50 mt-1.5 italic">
                {caption}
              </span>
            )}
          </span>
        </span>
      );
    },
  };
}
