import "./globals.css";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "./../components/theme-provider";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Steve Reads",
  description: "A showcase of books that inspire Steve Jobs",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <body
          className={`${opensans.className} bg-slate-300  dark:bg-slate-600 lg:bg-slate-400 dark:lg:bg-slate-800`}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
