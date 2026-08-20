import { Helmet } from "react-helmet-async";
import { site } from "@/data/site";
import { useTheme } from "@/hooks/useTheme";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { HowIBuild } from "@/components/HowIBuild";
import { ToolsAndFocus } from "@/components/ToolsAndFocus";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import AskSpoorthiAI from "@/components/AskSpoorthiAI";
import { CommandCenter } from "@/components/CommandCenter";

const pageTitle = `${site.name} — AI & Software Developer`;

const pageDescription =
  "Portfolio of Spoorthi K P — AI, computer vision and full-stack software, featuring MediMind AI and other real, shipped projects.";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        <link
          rel="canonical"
          href={site.siteUrl}
        />

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
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={pageDescription}
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

        <Experience />

        <About />

        <Contact />
      </main>

      <Footer />

      {/* Ask Spoorthi AI */}
      <AskSpoorthiAI />

      {/* Command Center */}
      <CommandCenter />
    </>
  );
}

export default App;