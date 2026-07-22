import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marginalia",
  description: "Notes on books, systems, places, and whatever else stays with me.",
};

export default function Home() {
  return (
    <main>
      <h1>Marginalia</h1>
      <p>GitHub Pages source is available in the repository root.</p>
    </main>
  );
}
