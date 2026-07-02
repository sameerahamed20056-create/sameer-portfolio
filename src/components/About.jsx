import { useState } from "react"
import Skills from "./Skills"
import Education from "./Education"
import Certification from "./Certification"

function About() {

  const [activeTab, setActiveTab] = useState("skills")

  return (
    <div>
    <section
     id="About"
     className="min-h-screen bg-[#0F172A] text-white px-6 py-17 lg:px-20">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-6">About <span className="text-[#38BDF8]">Me</span></h2>

         <p className="text-gray-400 leading-relaxed mb-8">
  Aspiring Python Full Stack Developer skilled in Python, Django, Flask, React.js, REST APIs, and MySQL. Passionate about building responsive web applications, troubleshooting and debugging issues, and writing clean, maintainable code. Continuously learning new technologies while strengthening my full-stack development skills through hands-on projects.
</p>

        <div className="flex gap-6 mb-6 border-b border-gray-700 pb-2">
          <button
            onClick={() => setActiveTab("skills")}
            className={`${activeTab === "skills"
              ? "text-[#38BDF8] border-b-2 border-[#38BDF8]"
              : "text-gray-400"} pb-1`}
          >
            Skills
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`${activeTab === "education"
              ? "text-[#38BDF8] border-b-2 border-[#38BDF8]"
              : "text-gray-400"} pb-1`}
          >
            Education
          </button>

          <button onClick={()=> setActiveTab("Certification")}
            className={`${activeTab === "Certification"
              ? "text-[#38BDF8] border-b-2 border-[#38BDF8]"
              : "text-gray-400"} pb-1`}>
            Certification
          </button>
        </div>

        {activeTab === "skills" && <Skills />}
        {activeTab === "education" && <Education />}
        {activeTab === "Certification" && <Certification />}

      </div>
    </section>
    </div>
  )
}

export default About