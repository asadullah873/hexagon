import { notFound } from "next/navigation";
import ProductPage from "@/components/products/ProductPage";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { PRODUCT_SLUGS, PRODUCTS_BY_SLUG } from "@/lib/products";

export async function generateStaticParams() {
  // Return slugs for static generation
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS_BY_SLUG[slug];
  if (!product) return notFound();
  
  return {
    title: `${product.name} | Hexagon Scaffolding Inc.`,
    description: product.tagline,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS_BY_SLUG[slug];
  if (!product) return notFound();

  return (
    <>
      <Header />
      <ProductPage product={product} />
      <Footer />
    </>
  );
}
