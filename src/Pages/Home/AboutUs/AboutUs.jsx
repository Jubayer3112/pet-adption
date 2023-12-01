import catt from "../../../assets/aboutCat.png";
import AboutCard from "./AboutCard";
const AboutUs = () => {
  return (
    <div>
      <section className=" bg-gray-50 flex justify-around items-center container mx-auto">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-xl font-bold text-gray-900 md:text-3xl">
              Why You Choose Us
            </h2>

            <p className="text-5xl md:mt-4 md:block">
              We are the experts on your pets.
            </p>
            <p className="text-lg md:mt-4 md:block py-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.{" "}
            </p>
            <div>
              <AboutCard />
            </div>
            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>

        <div>
          <img alt="Student" src={catt} className="  ml-auto" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
