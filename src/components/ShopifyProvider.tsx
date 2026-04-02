"use client";
export default function ShopifyProvider({ children }: { children: React.ReactNode }) {
  return (
    <shopify-store store-domain="manifest-drives.myshopify.com">
      {children}
      <shopify-cart id="cart" />
    </shopify-store>
  );
}
