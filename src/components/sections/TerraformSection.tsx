import { motion } from "framer-motion";

export default function TerraformSection() {
  return (
    <section className="py-28 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-20">
          <p className="uppercase text-sm tracking-widest text-primary">
            Infrastructure as Code
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4">
            Portfolio Deployed Using Terraform
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Fully automated AWS infrastructure provisioning with reproducible,
            production-ready deployments using Infrastructure as Code principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-gray-600 dark:text-gray-400"
          >
            <p>✔ Private S3 Static Website Hosting</p>
            <p>✔ CloudFront Global CDN Distribution</p>
            <p>✔ Route53 DNS Management</p>
            <p>✔ ACM SSL Certificate Integration</p>
            <p>✔ IAM Roles & Least Privilege Policies</p>
            <p>✔ Modular & Reusable Terraform Configuration</p>
          </motion.div>

          {/* Right Code Editor Style Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-2xl overflow-hidden border border-gray-700 bg-[#0f172a]"
          >
            {/* Editor Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1e293b] border-b border-gray-700">
              <div className="flex gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <p className="text-xs text-gray-400 font-mono">
                terraform/main.tf
              </p>
              <div />
            </div>

            {/* Code Body */}
            <div className="p-6 overflow-x-auto text-sm font-mono text-gray-300 leading-relaxed whitespace-pre">
{`provider "aws" {
  region = "ap-south-1"
}

resource "aws_s3_bucket" "portfolio" {
  bucket = "amruthcloud-dev-portfolio"

  tags = {
    Project     = "amruthcloud"
    Environment = "production"
  }
}

resource "aws_cloudfront_distribution" "cdn" {
  enabled             = true
  default_root_object = "index.html"

  origin {
    domain_name = aws_s3_bucket.portfolio.bucket_regional_domain_name
    origin_id   = "s3-portfolio-origin"
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
`}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}