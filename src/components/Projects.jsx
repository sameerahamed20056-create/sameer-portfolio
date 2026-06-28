const projects = [

    {
    id: 1,
    title: "Developer Growth Dashboard",
    description: "A dashboard to track developer activity and visualize productivity using charts.",
    image: "/assets/dev.jpeg",
    skills: ["Python", "Flask", "SQLite", "SQLAlchemy", "Matplotlib", "HTML","Jinja", "Bootstrap"],
    link: "https://developer-growth-dashboard.onrender.com"
  },

  {
    id: 2,
    title: "SalesVision Dashboard",
    description: "A Streamlit-based dashboard for monitoring and visualizing real-time data.",
    image: "/assets/dash.jpeg",
    skills: ["Python", "Flask", "Streamlit", "Pandas"],
    link: "https://real-timedashboard-iv5oxxg5xdwgxoogbszhhl.streamlit.app/"
  },

  {
    id: 3,
    title: "  Expense Tracker",
    description: "A simple web application for tracking income, expenses, and financial records.",
    image: "/assets/exp.jpeg",
    skills: ["Python", "Flask", "MySQL", "SQLAlchemy", "HTML", "Jinja", "Bootstrap"],
    link: "https://expense-tracker-zjue.onrender.com/"

  },

  {
    id: 4,
    title: "Server Health Monitor",
    description: "A responsive web application for monitoring real-time CPU, RAM, Disk usage, system information, network statistics, and running processes.",
    image: "/assets/server.jpeg",
    skills: ["Python", "Django", "HTML", "CSS", "Bootstrap", "JavaScript", "psutil", "Git", "GitHub"],
    link: "https://server-health-monitor-s2jo.onrender.com"

  },
];

const Projects = () => {
  return (
    <section id="Project" className="bg-[#0F172A] py-16">
      
      <h2 className="text-3xl font-bold text-[#38BDF8] text-center mb-5">
        My <span className="text-white">Projects</span>
      </h2>

      <div className="w-[96%] mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-[#1E293B] border border-[#334155]
                         rounded-xl p-4
                         hover:scale-105 hover:shadow-xl
                         transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h3 className="font-semibold text-lg text-[#38BDF8] mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full
                                bg-[#0F172A] text-[#38BDF8]
                                border border-[#38BDF8]">
                      {skill}
                    </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2
                          bg-[#38BDF8] text-[#0F172A]
                          font-medium rounded-lg
                          hover:bg-sky-400
                          transition"
              >
                  View Project
                  <i className="bi bi-arrow-right"></i>
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;