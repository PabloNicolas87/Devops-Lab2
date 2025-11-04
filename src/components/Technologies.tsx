type Tech = { name: string; logo: string }

const technologies: Tech[] = [
    {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "GitHub Actions",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "ECR ECS & Fargate en AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "IaC Terraform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
  }
];

interface TechnologiesProps {
  className?: string;
}

const Technologies = ({ className = '' }: TechnologiesProps) => {
  return (
    <section className={`py-10 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Tecnologías del Proyecto
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center transition transform hover:scale-105"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-sm text-center text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;