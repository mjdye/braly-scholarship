export default function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8 max-w-[var(--body-max-width)]">
        <div className="w-[300px]">
          <img
            src="/drBraly.png"
            alt="Dr. Braly"
            className="max-w-[300px] h-auto"
          />
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <p>
            Dr. S. U. Braly was a great humanitarian, philanthropist, and friend
            of Paulding County. His calling for the practice of medicine and his
            compassion for patients made him a giant among men. Dr. Braly came
            to Paulding County in 1953 from his home in Henderson, TN. He became
            one of the founders of Paulding Memorial Hospital and Medical
            Nursing Unit, the predecessor to Wellstar Paulding Medical Center
            and Wellstar Paulding Nursing Center.
          </p>
          <p>
            During the early years of Dr. Braly’s practice, Paulding County had
            a dire need for physicians. He welcomed several new doctors into his
            practice including Dr. Joseph Scott MD (1955), Dr. John Covington MD
            (1958), Dr. Jerry Worthy MD (1958), and Dr. Darius Smith MD (1963).
            These physicians later developed their own successful practices and
            as a group, met the healthcare needs of the community. During this
            time, it was common for physicians to make house calls, cover the
            ER, practice general surgery, and deliver babies. This generation of
            doctors did it all.
          </p>
          <p>
            Dr. Braly’s love for the well-being of the community extended beyond
            his medical practice as a philanthropist and advocate for Paulding
            County. He donated land for a public park which included the first
            swimming pool in the county, and later donated the land for the
            first contemporary library in the county.
          </p>
          <p>
            Dr. Braly held additional responsibilities within the community
            including lay speaker for the First Methodist Church, Georgia State
            Senator, member of the Georgia Medical Board of Examiners, Vice
            Chairman of the Paulding Memorial Hospital Authority, Chief of Staff
            of Paulding Memorial Hospital Authority, and team physician for the
            Paulding County football team. Dr. Braly served the Paulding County
            community for over twenty-five years as a servant leader and a
            friend to his patients
          </p>
        </div>
      </div>
    </div>
  );
}
