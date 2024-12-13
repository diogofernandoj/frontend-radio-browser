"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/sidebar";
import { QueryClient, QueryClientProvider } from "react-query";
import { RadiosProvider } from "./_contexts/radios-context";
import { Toaster } from "./_components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <QueryClientProvider client={queryClient}>
          <RadiosProvider>
            <div className="flex min-h-full">
              <div className="hidden lg:block">
                <Sidebar />
              </div>
              {children}
            </div>
            <Toaster />
          </RadiosProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
