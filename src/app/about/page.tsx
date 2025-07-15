import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 bg-[url('/hero.png')] bg-cover bg-center rounded-2xl p-8 md:p-32 shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About the Braly Scholarship
          </h1>
          <p className="text-xl  max-w-3xl mx-auto text-white">
            Empowering the next generation of leaders through education and
            opportunity
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-accent-blue mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg  mb-6 text-center w-full md:w-1/2 mx-auto">
              The Braly Scholarship Fundraiser aims to raise
              essential funds to support scholarships for aspiring and current
              healthcare workers. The scholarship gives preference to residents
              of Paulding County who have a passion for patient care.
            </p>
          </div>

        </div>
        {/* Impact Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-20">
          <h2 className="text-3xl font-bold text-accent-blue text-center mb-12">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold  text-warm-gold mb-2">
                42
              </div>
              <div className="">
                Years of Support
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-warm-gold mb-2">
                80+
              </div>
              <div className="">
                Scholarships Awarded
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold  text-warm-gold mb-2">
              60+
              </div>
              <div className="">
                Recipients
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-accent-blue mb-6">
            Ready to Apply?
          </h2>
          <p className="text-lg  mb-8 max-w-2xl mx-auto">
            If you&apos;re a dedicated student with a passion for learning and
            making a difference, we encourage you to apply for the Braly
            Scholarship in the fall of 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link
              href="https://wellstar.academicworks.com/scholarships/12"
              className="bg-accent-blue hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
            >
              Apply Now
            </Link> */}
            <Link
              href="https://wellstar.org/give"
              className="border border-accent-blue  hover:bg-light-gray font-semibold py-3 px-8 rounded-full transition-colors duration-200"
            >
              Give Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
