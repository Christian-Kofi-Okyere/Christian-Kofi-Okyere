import ClientLayout from './client-layout';

export const metadata = {
  title: "Christian Okyere",
  description: "Computer Science and Mathematics student at Colby College, with experience in software engineering, teaching, and technical project development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
} 