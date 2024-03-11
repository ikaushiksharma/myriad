import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ModalProvider } from "@/components/providers/ModalProvider";
import { Toaster as SonnarToaster } from "@/components/ui/sonner";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Myriad | Website Builder",
  description: "Myriad is a website builder for the modern web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className + " max-w-screen-2xl mx-auto"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            <SonnarToaster richColors position="bottom-left" />
            {children}
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
