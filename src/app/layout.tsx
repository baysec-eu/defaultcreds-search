import type { Metadata } from "next";
import "@/app/globals.css";
import ClientLayout from "@/app/components/layout/client-layout";

export const metadata: Metadata = {
  title: "Baysec - Default Credentials Search Panel",
  description: "Default Creds is a web search panel for default credentials, including a comprehensive dataset of services, vendors, systems, OT and IoT devices, routers, and more.",
  openGraph: {
    images: 'https://defaultcreds.vercel.app/images/defaultcreds.png',
  },
  keywords: ['default credentials', 'search', 'dataset', 'security', 'IoT', 'OT', 'routers'],
  authors: [
    { name: 'Krystian Bajno', url: 'https://github.com/baysec-eu' }, 
  ],
  metadataBase: new URL('https://github.com/baysec-eu/defaultcreds-search'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
