import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Cloud & AWS",
    skills: [
      "EC2",
      "AMI",
      "VPC",
      "S3",
      "EBS",
      "IAM",
      "Route 53",
      "CloudFront",
      "ALB",
      "Auto Scaling",
      "CloudWatch",
      "CloudTrail",
      "AWS CLI",
    ],
  },
  {
    title: "Serverless & Databases",
    skills: [
      "Lambda",
      "API Gateway",
      "EventBridge",
      "SNS",
      "DynamoDB",
      "Aurora RDS",
      "Serverless Architecture",],
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      "Git",
      "Bitbucket",
      "Jenkins",
      "GitHub Actions",
      "CodeCommit",
      "CodeBuild",
      "CodeDeploy",
      "CodePipeline",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "Containers & Orchestration",
    skills: [
      "Docker",
      "Docker Multi-Stage Builds",
      "Kubernetes",
      "Containerization",
    ],
  },
  {
    title: "Infrastructure as Code",
    skills: [
      "Terraform",
      "Remote State Management",
      "State File Locking",
      "Infrastructure Automation",
    ],
  },
  {
    title: "DevSecOps & Security",
    skills: [
      "SonarQube",
      "Threat Dragon",
      "Pre-Commit Hooks",
      "Shift Left Security",
      "IAM Security",
      "KMS",
      "Secrets Manager",
      "Static Code Analysis",
    ],
  },
  {
    title: "Operating Systems & Scripting",
    skills: [
      "Linux",
      "Ubuntu",
      "CentOS",
      "Shell Scripting",
      "Python",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="uppercase text-sm tracking-widest text-primary font-semibold">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Core Competencies
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expertise across Cloud Infrastructure, DevOps Automation,
            Kubernetes, Terraform, CI/CD, Security, and AWS Services.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:scale-105 transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
