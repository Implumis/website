import Logo from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="w-screen h-dvh flex justify-center items-center bg-linear-to-b from-[#415AFF] to-[#4758C7] relative">
      <span className="text-3xl md:text-6xl font-black text-center italic text-white text-shadow z-10 text-shadow-lg">
        Coming soon...
      </span>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 max-w-lg [&_#Geer]:brightness-100 w-[calc(100%-112px)] brightness-70">
        <Logo className="w-full h-full" />
      </div>
    </main>
  );
}
