function Hero() {
  return (
    <section 
     id="Home"
     className="min-h-screen flex bg-[#0F172A] flex-col items-center 
                        text-center  px-5  sm:px-7 lg:px-20 py-20">

      <img
        src="/assets/me2.jpeg"
        alt="profile"
        className="w-40 h-40 rounded-full border-4 border-[#38BDF8] 
                   object-cover shadow-[0_0_25px_rgba(56,189,248,0.6)] mb-4"
      />

      <h2 className="text-3xl sm:text-4xl text-white">
        Hi, I'm <span className="text-[#38BDF8] font-bold">
          Sameer Ahmed S.A
        </span>
      </h2>

      <h3 className="text-white text-xl sm:text-2xl font-semibold mt-2">
        Python Full Stack Developer
      </h3>

      <p className="text-gray-300 max-w-xl leading-relaxed mx-auto mt-4">
        Aspiring Python Full Stack Developer passionate about web development and modern technologies. I enjoy building responsive applications, learning through projects, and continuously improving my skills to grow as a software developer.
      </p>

      <div className="flex gap-5 flex-wrap justify-center mt-6">
        <button className="text-white border-2 border-[#38BDF8] 
                           px-10 py-2 rounded-md hover:bg-[#38BDF8] transition">
        <a href="#Contact">Contact</a>
        </button>

        <button className="text-white border-2 border-[#38BDF8] 
                           px-5 py-2 rounded-md hover:bg-[#38BDF8] transition">
          <i className="bi bi-download"></i><a href="/assets/SAMEER_RESUME.pdf" target="_blank"> Download CV</a>
        </button>
      </div>

    </section>
  )
}

export default Hero