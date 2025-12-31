import { DM_Sans } from "next/font/google";
import "funuicss/css/fun.css";
import { ThemeProvider } from "funuicss";

const font = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "App Title",
  description: "App's description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={font.className}>
          <ThemeProvider theme="light" projectId="funui_qXFjaupI8k2T5QxwWk63">
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}