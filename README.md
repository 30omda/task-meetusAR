from pathlib import Path

# Create README content
readme_content = """
# 🛡️ Login Task - MeetusVR Auth Page

This is a modern, responsive login interface built for a virtual shopping platform using **React 19**, **Redux Toolkit**, **GSAP animations**, and **TailwindCSS**. It provides a smooth and engaging authentication experience with real-time form validation and animated transitions.

---

## 🚀 Features

- ✅ **Login with email & password**
- ✅ **Redux Toolkit** for global state management
- ✅ **Real-time validation** using `yup` + `react-hook-form`
- ✅ **Authentication persistence** via `localStorage`
- ✅ **GSAP animations** for logo and form transitions
- ✅ **Responsive UI** across all devices
- ✅ **Shadcn UI** components with modern styling
- ✅ **Glassmorphism effect** on inputs
- ✅ **Toasts** for feedback (success/error)
- ✅ **Redirect handling** based on auth state

---

## 🛠️ Tech Stack

| Tool             | Description                                  |
|------------------|----------------------------------------------|
| **React 19**     | UI Library                                    |
| **Vite**         | Fast bundler and dev server                   |
| **Redux Toolkit**| Auth state management                         |
| **React Router** | Routing between login and dashboard           |
| **GSAP**         | Advanced animations                           |
| **Shadcn UI**    | Accessible, headless UI components            |
| **Tailwind CSS** | Utility-first CSS framework                   |
| **Lucide Icons** | Beautiful SVG icons                           |
| **Yup**          | Form validation                               |
| **React Hook Form** | Lightweight form handling                  |
| **React Hot Toast** | Clean toast notifications                 |

---

## 📸 Animation Preview

- 🟣 Main logo: slides in from the **right**
- 🟣 Meetus logo: pops in from the **bottom**
- 🟣 Login form: fades and slides **upward**
- 🔁 All animations **trigger on refresh**
- 🌐 Fully **responsive** with login form animation on small screens too

---

## 🔐 Auth Flow

- On login, credentials are submitted via `axios` to backend API.
- If successful:
  - `user`, `token`, and `isEmployee` are stored in `localStorage`.
  - User is redirected to the dashboard.
- If logged out:
  - LocalStorage is cleared.
  - User is sent back to `/login`.
- Navigation logic is guarded based on user presence in `localStorage`.

---

## 📦 Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/task.git
cd task

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev
