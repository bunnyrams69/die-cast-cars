import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "shopify-store": DetailedHTMLProps<HTMLAttributes<HTMLElement> & {
        "store-domain"?: string;
      }, HTMLElement>;
      "shopify-context": DetailedHTMLProps<HTMLAttributes<HTMLElement> & {
        type?: string;
        handle?: string;
      }, HTMLElement>;
      "shopify-cart": DetailedHTMLProps<HTMLAttributes<HTMLElement> & {
        id?: string;
      }, HTMLElement>;
    }
  }
}
