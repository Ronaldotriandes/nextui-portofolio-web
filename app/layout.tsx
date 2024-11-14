import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontPoppins, fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/photo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-[#272727] font-poppins antialiased",
          fontPoppins.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow bg-[#272727]">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 gap-x-2">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://triandes.site"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Triandes</p>,
              </Link> 
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://www.figma.com/design/yTxw13ILGIRZAcqawvmauS/Portofolio-Website-Template-(Community)?node-id=813-137&node-type=frame&t=METOgv26byWnkvgq-0"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Design Inspiration from</span>
                <p className="text-primary">Figma Community</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
