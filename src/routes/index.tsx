import { createFileRoute } from "@tanstack/react-router";
import { SkinLabLanding } from "@/components/skinlab/SkinLabLanding";
import teamAsset from "@/assets/team.png.asset.json";

export const Route = createFileRoute("/")({
  component: SkinLabLanding,
  head: () => ({
    meta: [
      { property: "og:image", content: teamAsset.url },
      { name: "twitter:image", content: teamAsset.url },
    ],
  }),
});
