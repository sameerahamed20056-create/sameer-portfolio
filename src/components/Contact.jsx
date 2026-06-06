
const Contact = () => {
  return (
    <section id="Contact" className="bg-[#0F172A] text-white min-h-screen flex items-center">

      <div className="w-[96%] mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="mb-35">

          <h2 className="text-4xl font-bold mb-6">
            CONTACT <span className="text-[#38BDF8]">ME</span>
          </h2>

          <div className="space-y-4 text-lg">

            <div className="flex items-center gap-3">
              <i className="bi bi-envelope-fill text-[#38BDF8] text-xl"></i>
              <a href="mailto:sameerahamed20056@gmail.com"><span>sameerahamed20056@gmail.com</span></a>
            </div>

            <div className="flex items-center gap-3">
              <i className="bi bi-telephone-fill text-[#38BDF8] text-xl"></i>
              <a href="tel:+919342758148"><span>+91 9342758148</span></a>
            </div>

          </div>

          <div className="flex gap-4 mt-6 text-2xl">

            <a href="https://www.linkedin.com/in/sameer-ahmed-s-a-434a91376"><i className="bi bi-linkedin hover:text-[#38BDF8] cursor-pointer"></i></a>
            <a href="https://wa.me/919342758148"><i class="bi bi-whatsapp hover:text-[#38BDF8] cursor-pointer"></i></a>
            <a href="https://github.com/sameerahamed20056-create"><i class="bi bi-github hover:text-[#38BDF8] cursor-pointer"></i></a>
          </div>

        </div>

        <div>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 bg-[#1E293B] rounded-md outline-none focus:ring-2 focus:ring-[#38BDF8]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-[#1E293B] rounded-md outline-none focus:ring-2 focus:ring-[#38BDF8]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 bg-[#1E293B] rounded-md outline-none focus:ring-2 focus:ring-[#38BDF8]"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-2 bg-[#38BDF8] text-black rounded-md font-semibold hover:bg-white"
            >
              Submit
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;