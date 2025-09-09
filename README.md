# Better.com Replica – React + Next.js Assignment

## 📌 Project Overview
This project is a multi-page web application built with **Next.js (React + TypeScript)**.  
It replicates the **design, layout, and basic functionality** of four specific pages from [Better.com](https://better.com):

- **Home:** `/` → [Better.com](https://better.com)  
- **About Us:** `/about-us` → [Better.com/about-us](https://better.com/about-us/)  
- **Mortgage Calculator:** `/mortgage-calculator` → [Better.com/mortgage-calculator](https://better.com/mortgage-calculator?taxes=265&zip=421005)  
- **Start Page:** `/start` → [Better.com/start](https://better.com/start)  

The purpose of this assignment is to demonstrate **React development, Git workflow, and deployment skills**.

---

## 🚀 Features
- ⚛️ Built with **React + Next.js (App Router)**  
- 🖌️ Styled with **Tailwind CSS** (responsive, mobile-first)  
- 🧩 Reusable components: `Navbar`, `Hero`, `Button`, `Input`, `Card`, `Footer`  
- 📱 Fully responsive design across devices  
- 🎭 Smooth animations & transitions with **Framer Motion**  
- 🧮 **Mortgage Calculator** with real-time monthly payment breakdown  
- 🌐 Deployed on **Vercel** for instant preview  

---

## 🛠 Tech Stack
- [Next.js 14+](https://nextjs.org/)  
- [React 18](https://react.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Framer Motion](https://www.framer.com/motion/)  
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)  

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** v18+  
- **npm** or **yarn**  

### Steps
```bash
# Step 1: Clone the repo
git clone <YOUR_REPO_URL>

# Step 2: Navigate to the project
cd better-clone

# Step 3: Install dependencies
npm install
# or
yarn install

# Step 4: Start the development server
npm run dev
# or
yarn dev



🧮 Mortgage Calculator Logic

The monthly payment is calculated using the standard mortgage formula:
M = P[r(1+r)^n] / [(1+r)^n – 1]

