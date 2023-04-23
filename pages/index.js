import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>aa</h1>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Next.js + Tailwind CSS</h1>
      </div>
    </main>
  );
}
