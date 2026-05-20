import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/shared/lib/i18n/I18nProvider";
import { ThemeProvider } from "@/shared/lib/theme/ThemeProvider";
import { AppShell } from "@/shared/components/layout/AppShell";

export const metadata: Metadata = {
  title: "Aleix Ruiz Cuevas — Portfolio",
  description: "Personal portfolio of Aleix Ruiz Cuevas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <I18nProvider>
            <AppShell>{children}</AppShell>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
