import Hero from "@/components/page/privacy/Hero";

export default function Privacy() {
  return (
    <main className="limit-width">
      <Hero />
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold mt-6 lg:mt-8 xl:mt-12 mb-6">
        Overall
      </h2>
      <p>
        You&apos;re looking at a static website. There is no reason for us to
        collect any personal information about you.
      </p>
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold mt-6 lg:mt-8 xl:mt-12 mb-6">
        What we collect
      </h2>
      <p>
        The only data that is being stored about you is your IP and the requests
        you send to our hosting provider. This data is collected by them.
      </p>
    </main>
  );
}
