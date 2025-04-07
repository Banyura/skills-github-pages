import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Banyura - Digital Designer & Developer",
  description: "Personal portfolio website showcasing creative digital solutions",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-12">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}

