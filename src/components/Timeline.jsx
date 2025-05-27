export default function Timeline() {
  const experiences = [
    {
      title: "Associate Cloud Support", 
      company: "Amazon Web Services",
      period: "Incoming",
      description:
        "incoming",
    },
    {
      title: "Application Developer Intern", 
      company: "Calsoft Systems",
      period: "Fall 2024",
      description:
        "Develop and debugg WSM enterphrise application using .NET and C#",
    },
    {
      title: "Cloud Support Associate",
      company: "Amazon Web Services",
      period: "Summer 2024",
      description:
        "Learned about fundamental AWS services and troubleshot customer issues on AWS.",
    },
    {
      title: "Backend Developer Intern",
      company: "Open Source",
      period: "Spring 2024",
      description:
        "Built RESTful APIs and implemented mentor-matching logic using Django and PostgreSQL.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Timeline</h2>
      <div className="relative border-l border-gray-600 pl-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 relative">

            {/* Content */}
            <div className="pl-4">
              <p className="text-sm text-gray-400 mb-1">{exp.period}</p>
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-sm text-gray-300 italic mb-1">{exp.company}</p>
              <p className="text-gray-200">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
