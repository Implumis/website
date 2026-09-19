import Logo from "@/components/ui/Logo";

export default function Blog() {
  return (
    <main className="w-full h-full">
      <span className="text-3xl w-full md:text-6xl font-black text-center italic text-white text-shadow z-10 text-shadow-lg absolute left-1/2 top-1/2 -translate-1/2">
        Coming soon...
      </span>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 max-w-lg [&_#Geer]:brightness-100 w-[calc(100%-112px)] brightness-70">
        <Logo className="w-full h-full" />
      </div>
    </main>
  );
}
