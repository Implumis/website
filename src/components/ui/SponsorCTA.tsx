import { Button } from "./button";

export default function SponsorCTA() {
  return (
    <div className="bg-black/45 group backdrop-blur-md flex flex-col items-center gap-4 rounded-md px-3 py-6 md:py-10 overflow-hidden relative border transition-all duration-250 ease-in-out text-center">
      <span className="text-4xl font-semibold">Interested?</span>
      <p className="text-lg">Consider becoming one of our sponsors!</p>
      <Button className="w-min text-black px-4 py-5" disabled>
        Coming soon...
      </Button>
      <aside className="*:brightness-75 group-hover:*:brightness-95 *:transition-all *:duration-250 *:ease-in-out transition-all duration-250 ease-in-out">
        <div className="w-15 group-hover:w-20 h-1 bg-white absolute -rotate-45 bottom-0 -right-3 group-hover:-right-3.5" />
        <div className="w-30 group-hover:w-40 h-1 bg-white absolute -rotate-45 bottom-0 -right-5 group-hover:-right-6" />
        <div className="w-15 group-hover:w-20 h-1 bg-white absolute -rotate-45 top-0 -left-3 group-hover:-left-3.5" />
        <div className="w-30 group-hover:w-40 h-1 bg-white absolute -rotate-45 top-0 -left-5 group-hover:-left-6" />
      </aside>
    </div>
  );
}
