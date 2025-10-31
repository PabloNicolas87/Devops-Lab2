# 🧩 DevOps Lab 1 – React App Containerization & CI/CD on AWS

This repository is part of the **DevOps Golden Path**, a personal end-to-end learning roadmap designed to build a solid, real-world foundation in modern cloud and DevOps practices.

Each lab in the Golden Path focuses on a different stage of the DevOps lifecycle — from containerization and infrastructure automation to serverless computing, data persistence, and observability.

---

## 🎯 Purpose of the Golden Path

The goal of this DevOps Golden Path is to create a series of modular, production-grade projects that evolve progressively:

1. **Lab 1 – Containerization & CI/CD (this repo)**  
2. **Lab 2 – Serverless Evolution**  
3. **Lab 3 – Persistence & Databases**  
4. **Lab 4 – Orchestration (ECS / Fargate)**  
5. **Lab 5 – CI/CD Advanced & Observability**

Each lab has its own GitHub repository and its own Infrastructure-as-Code (IaC) project in Terraform, enabling full automation and reproducibility.

---

## 🚀 Project Overview

**DevOps Lab 1** introduces a complete **CI/CD pipeline** that builds, publishes, and deploys a Dockerized React application to AWS.

This project demonstrates how a front-end app can move from local development to automated cloud deployment using:
- **Docker** (multi-stage build)
- **GitHub Actions** (CI/CD pipeline)
- **Amazon ECR** (private container registry)
- **Amazon EC2** (runtime environment)
- **Elastic IP** (persistent public endpoint)

---

## ⚙️ How It Works – CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automates the entire delivery process:

1. **Build Phase**
   - Checks out the repository.  
   - Installs dependencies and runs tests.  
   - Builds two Docker images:  
     - `builder` → compile-time stage  
     - `runtime` → production container.

2. **Publish Phase**
   - Pushes both images to:  
     - Docker Hub (for public reference).  
     - Amazon ECR (for AWS deployment).

3. **Deploy Phase**
   - Connects to an **EC2 instance** via **AWS SSM Run Command**.  
   - Pulls the latest runtime image from ECR.  
   - Stops and removes previous containers.  
   - Launches the new version automatically with `docker run -d -p 80:80`.

Every push to the `main` branch triggers the pipeline, updating the production environment with zero manual steps.

---

## 🏗️ Infrastructure as Code (IaC)

The cloud infrastructure required by this pipeline — **ECR**, **EC2**, and **Elastic IP** — is provisioned via Terraform, in a separate repository:

🔗 [Devops-Lab1-Terraform-IaC](https://github.com/PabloNicolas87/Devops-Lab1-Terraform-IaC)

Terraform ensures that the environment is consistent, version-controlled, and can be created or destroyed at any time using:

```bash
terraform init
terraform apply
terraform destroy
```

When executing the Terraform project (`Devops-Lab1-Terraform-IaC`), the output includes the **EC2 instance ID**.  
This value must be manually copied into the **GitHub Secrets** of this repository (`Devops-Lab1`) as `INSTANCE_ID` to allow the CI/CD pipeline to deploy directly into that EC2 instance.

---

## 🧩 Architecture Overview

```text
┌──────────────────────────────┐
│   GitHub Actions (CI/CD)     │
│  ──────────────────────────  │
│  1. Build & Test             │
│  2. Push to DockerHub & ECR  │
│  3. Deploy via AWS SSM       │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ AWS Infrastructure (Terraform)│
│  ───────────────────────────  │
│  • Amazon ECR (Container Repo)│
│  • Amazon EC2 (App Runtime)   │
│  • Elastic IP (Static Access) │
└──────────────────────────────┘
```

---

## 📦 Tech Stack

| Category | Tools & Services |
|-----------|-----------------|
| Front-end | React + Vite |
| CI/CD | GitHub Actions |
| Containers | Docker, Docker Buildx |
| Cloud | AWS (ECR, EC2, Elastic IP, SSM) |
| IaC | Terraform |
| Language | TypeScript |

---

## 🧠 Key Learnings

- Building and publishing multi-stage Docker images.  
- Configuring a dual push strategy (DockerHub + ECR).  
- Automating deployments through AWS SSM.  
- Using Terraform to provision and destroy cloud resources safely.  
- Establishing a reproducible baseline for future DevOps labs.  
- Understanding the manual link between IaC (Terraform outputs) and CI/CD (GitHub Secrets).

---

## 🔜 Next Step
The next module, **[Devops-Lab2 – Serverless Evolution](https://github.com/PabloNicolas87/Devops-Lab2)**, will extend this base project by deploying the runtime into AWS Lambda and serving the static frontend from Amazon S3 via API Gateway.

---

## 🧾 License
MIT License © Pablo Nicolás Girone

