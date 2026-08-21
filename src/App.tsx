import { Helmet } from "react-helmet-async";
import { site } from "@/data/site";
import { useTheme } from "@/hooks/useTheme";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { HowIBuild } from "@/components/HowIBuild";
import { ToolsAndFocus } from "@/components/ToolsAndFocus";
import { CommandCenter } from "@/components/CommandCenter";
import { BuildLog } from "@/components/BuildLog";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AskSpoorthiAI } from "@/components/AskSpoorthiAI";

const pageTitle = `${site.name} — AI & Software Developer`;

const pageDescription =
  "Portfolio of Spoorthi K P — AI, intelligent systems and full-stack software developer building practical products including MediMind AI, SafetyNet AI and medical imaging projects.";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        <meta
          name="author"
          content={site.name}
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="theme-color"
          content="#0a0a0a"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={site.siteUrl}
        />

        {/* Open Graph — LinkedIn / WhatsApp / Facebook */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={pageDescription}
        />

        <meta
          property="og:url"
          content={site.siteUrl}
        />

        <meta
          property="og:site_name"
          content={site.name}
        />

        <meta
          property="og:image"
          content={`${site.siteUrl}og-image.png`}
        />

        <meta
          property="og:image:width"
          content="1200"
        />

        <meta
          property="og:image:height"
          content="630"
        />

        <meta
          property="og:image:alt"
          content="Spoorthi K P — Building Intelligence for the Real World"
        />

        {/* X / Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={pageDescription}
        />

        <meta
          name="twitter:image"
          content={`${site.siteUrl}og-image.png`}
        />

        <meta
          name="twitter:image:alt"
          content="Spoorthi K P — Building Intelligence for the Real World"
        />
      </Helmet>

      <Nav
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />

        <SelectedWork />

        <HowIBuild />

        <ToolsAndFocus />

        <CommandCenter />

        <BuildLog />

        <Experience />

        <Certifications />

        <About />

        <Contact />
      </main>

      <Footer />

      <AskSpoorthiAI />
    </>
  );
}

export default App;