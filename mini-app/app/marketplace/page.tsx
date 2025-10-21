import { title, description, url } from "@/lib/metadata";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${title} - Marketplace`,
    description,
    openGraph: {
      title: `${title} - Marketplace`,
      description,
      url: `${url}/marketplace`,
      images: [
        {
          url: `${url}/icon.png`,
          width: 1200,
          height: 630,
          alt: `${title} Marketplace`,
        },
      ],
    },
  };
}

export default function Marketplace() {
  return (
    <main className="flex flex-col gap-3 place-items-center px-4 py-8">
      <h1 className="text-3xl font-bold">{title} - Marketplace</h1>
      <p className="text-muted-foreground">{description}</p>
      <p className="text-muted-foreground">
        Browse Starknet miniapps available on the OpenXAI marketplace.
      </p>
    </main>
  );
}
