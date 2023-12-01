import pet1 from "../../../assets/ctaajpg.jpg"
import pet2 from "../../../assets/cta.jpg"
const Cta = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Join us in creating a brighter tomorrow for our furry friends!
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block text-left">
                  Imagine the joy of a wagging tail, the warmth of a purring
                  companion, and the unconditional love that only a pet can
                  bring. 
                  <br />
                  Now, picture being the hero in their story, the
                  one who makes their dreams of a loving home come true. Every
                  donation, no matter the size, is a step towards transforming
                  the lives of these innocent souls. Your support provides
                  shelter, nourishment, and medical care, ensuring these pets
                  have a second chance at happiness. 
                  <br />
                   Let's break the chains
                  of loneliness and give these precious beings the love they
                  deserve. Together, we can build a haven of warmth and care for
                  those who cannot speak for themselves. <br />
                  Be the change they
                  need, be the guardian angel they've been waiting for. Donate
                  today and be a part of a heartfelt journey that transforms not
                  just the lives of animals, but also the hearts of those who
                  open them to a world of compassion. <br />
                  Your generosity
                  speaks volumes. Click the link below and be the catalyst for a
                  future filled with tail wags, purrs, and unconditional love.
               
                </p>

                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="Student"
                src={pet1}
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <img
                alt="Student"
                src={pet2}
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
