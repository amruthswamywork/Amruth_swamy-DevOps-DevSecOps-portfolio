import PageWrapper from "../components/layout/PageWrapper";

export default function CaseStudies() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-8 py-20 space-y-24">

        <div>
          <p className="uppercase text-sm tracking-widest text-primary">
            Case Study
          </p>
          <h1 className="text-5xl font-bold mt-4">
            CloudCart Mart
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Scalable 3-Tier AWS Deployment with CI/CD & Infrastructure as Code.
          </p>
        </div>

        {/* Problem */}
        <section>
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Required a scalable, secure 3-tier cloud architecture
            capable of handling production traffic with automated
            deployments and monitoring.
          </p>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-2xl font-semibold">Architecture</h2>
          <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>VPC with Public & Private Subnets</li>
            <li>Application Load Balancer</li>
            <li>EC2 Auto Scaling Group</li>
            <li>RDS for persistent storage</li>
            <li>CloudWatch Monitoring & Alerts</li>
          </ul>
        </section>

        {/* Automation */}
        <section>
          <h2 className="text-2xl font-semibold">Automation</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Infrastructure provisioned using Terraform modules.
            CI/CD pipeline built using Jenkins with Docker-based builds
            and Kubernetes rolling updates.
          </p>
        </section>

        {/* Outcome */}
        <section>
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Reduced deployment time by 65% and improved system reliability
            through automated monitoring and scaling policies.
          </p>
        </section>

      </div>
    </PageWrapper>
  );
}