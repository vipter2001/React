import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
  {
  return (
    <html lang="en">
<body className={`${inter.className} antialiased`}>{children}</body>
      
    </html>
  );
}

//But wait a second, you didn't add any CSS rules, where did the styles come from?
//take a look inside global.css, you'll notice some @tailwind directives
