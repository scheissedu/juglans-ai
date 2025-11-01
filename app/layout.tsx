import type { Metadata } from "next";
import "./globals.css";

// 这是 Next.js 推荐的方式，用于定义网站的元数据
export const metadata: Metadata = {
  title: "Juglans | The Future of Trading. Just Ask.",
  description: "Juglans is the world's first Vibe Trading app, enabling you to make investment decisions through natural language.",
  // --- 添加下面的 'icons' 属性 ---
  icons: {
    icon: '/logo.svg', // 用于标准的 favicon
    shortcut: '/logo.svg', // 用于一些旧版浏览器
    apple: '/logo.svg', // 用于苹果设备的 "添加到主屏幕" 图标
  },
  // ------------------------------------
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}