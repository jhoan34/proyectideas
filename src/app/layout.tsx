import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Proyect idea generator",
  description: "Proyect idea generator",
};

const inter = Inter({
  weight: ["400", "500", "600"],
  style: "normal",
  display: "swap",
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen sm:px-4">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
