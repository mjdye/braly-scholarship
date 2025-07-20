import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <GoogleAnalytics gaId="G-SP9SH0JEZQ" />
      <div className=" items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <main className=" w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex w-full flex-col relative">
            <div
              className="w-full h-[480px] bg-cover bg-center"
              style={{ backgroundImage: "url('/heroImage.png')" }}
            />
            <div className="flex flex-col mx-auto gap-8 bg-accent-blue text-off-white max-w-[var(--body-max-width)] lg:w-[var(--content-max-width)] p-8 py-10 text-center mt-[-120px] ">
              <h2 className="md:text-6xl text-4xl font-bold">
                The Dr. S.U. Braly Scholarship
              </h2>
              <p className="md:text-2xl text-lg max-w-[600px] mx-auto">
                The Braly Scholarship Fundraiser aims to raise essential funds
                to support scholarships for aspiring and current healthcare
                workers.
              </p>
              <div className="flex gap-4 mx-auto ">
                <a
                  href="https://www.showclix.com/tickets/the-braly-scholarship-fundraiser-award-dinner--nq7ha42"
                  className="bg-warm-gold text-accent-blue px-8 py-4 rounded-md text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-[var(--body-max-width)] mx-auto grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr] py-8">
            <div className="flex flex-col md:flex-row gap-4 p-4">
              <img
                src="/drBraly.png"
                alt="Dr. Braly"
                className="w-full md:w-1/3"
              />
              <div className="flex flex-col gap-4 px-4 py-2 justify-center">
                <h2 className="text-2xl font-bold md:text-4xl">
                  About Dr. Braly
                </h2>
                <p className="text-lg">
                  Dr. S. U. Braly was a great humanitarian, philanthropist, and
                  friend of Paulding County. His calling for the practice of
                  medicine and his compassion for patients made him a giant
                  among men. Dr. Braly came to Paulding County in 1953 from his
                  home in Henderson, TN.
                </p>
                <Link
                  href="/about-dr-braly"
                  className="text-warm-gold font-bold text-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex flex-col bg-white px-8 py-8 rounded-md items-start">
              <h2 className="text-2xl font-bold mb-4 w-full text-center border-b-2 border-accent-blue pb-4">
                Upcoming Events
              </h2>
              <div className="flex flex-col grow-1 justify-center">
                <p className="text-xl mb-2 font-bold">
                  Braly Scholarship Fundraiser and Award Dinner
                </p>
                <p className="text-xl mb-1">August 23rd, 2025</p>
                <p className="text-xl mb-4">Dallas (Theater) Civic Center</p>
                <a
                  href="https://www.showclix.com/tickets/the-braly-scholarship-fundraiser-award-dinner--nq7ha42"
                  className=" w-full text-center bg-accent-blue text-white px-8 py-4 rounded-md text-lg"
                >
                  Buy Tickets
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
