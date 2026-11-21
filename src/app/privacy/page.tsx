import Hero from "@/components/page/privacy/Hero";
import H2 from "@/components/ui/H2";
import P from "@/components/ui/P";

export default function Privacy() {
  return (
    <main className="limit-width">
      <Hero />
      <H2 className="text-3xl md:text-4xl xl:text-5xl font-semibold mt-6 lg:mt-8 xl:mt-12 mb-6">
        Overall
      </H2>
      <P>
        You&apos;re looking at a static website. There is no reason for us to
        collect any personal information about you.
      </P>
      <H2 className="text-3xl md:text-4xl xl:text-5xl font-semibold mt-6 lg:mt-8 xl:mt-12 mb-6">
        What we collect
      </H2>
      <P>
        The only data that is being stored about you is your IP and the requests
        you send to our hosting provider. This data is collected by them.
      </P>
    </main>
  );
}
