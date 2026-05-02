# SunCart - Summer Essentials Store 🌅

Welcome to **SunCart**, a modern, responsive eCommerce platform designed for your summer essentials. Whether you're looking for UV protection sunglasses, beach totes, or soothing skincare, SunCart offers a premium shopping experience with a stunning UI.

## 🚀 Live URL
*(Replace with deployed URL later)*  
[https://assignment-08-sigma.vercel.app](https://assignment-08-sigma.vercel.app)

## 🎯 Purpose
The purpose of this project is to build a robust, dynamic, and visually appealing Single Page Application (SPA) using Next.js. It features a unique, glassmorphism-inspired design with a dark-themed aesthetic, securely handles user authentication, and provides seamless navigation across protected and public routes without full page reloads.

## ✨ Key Features
- **Responsive Layout:** Fully optimized for mobile, tablet, and desktop viewing.
- **Glassmorphism UI:** Unique floating navbar and sleek UI components inspired by modern design trends.
- **Dynamic Routing:** Next.js App Router for smooth, SPA-like navigation.
- **Authentication:** Secure Credentials (Email/Password) and Social Login (Google) via BetterAuth.
- **Protected Routes:** Access to Product Details and User Profile pages is restricted to logged-in users.
- **Database Integration:** Seamlessly handles user accounts and sessions with MongoDB and Prisma.
- **Static Data Fetching:** Beautiful product display powered by local JSON data.
- **Profile Management:** View and update user information seamlessly.

## 🛠️ Tech Stack & npm Packages Used
- **Framework:** Next.js 14/15 (App Router)
- **Styling:** Tailwind CSS & DaisyUI
- **Icons:** `react-icons`
- **Animations:** `animate.css`
- **Authentication:** `better-auth`
- **Database ORM:** `@prisma/client` & `prisma` (MongoDB Provider)
- **Fonts:** Geist Sans & Geist Mono (next/font)

## ⚙️ Environment Variables
Ensure you have the following environment variables set up in your `.env` file before running the project:

```env
DATABASE_URL="your_mongodb_connection_string"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
BETTER_AUTH_SECRET="generate-a-random-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## 💻 Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Initialize Prisma Database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
