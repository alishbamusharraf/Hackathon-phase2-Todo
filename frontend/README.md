# ✨ TaskFlow Frontend

A state-of-the-art, premium task management interface built with **Next.js 15+**. Featuring a signature **TaskFlow Design System**, it combines high-end glassmorphism with vibrant, animated gradients for a truly elite user experience.

## 🌟 Key Features

- 🎨 **Premium Aesthetic**: Signature Purple-Pink-Blue animated gradient flow.
- 🧊 **Elite Glassmorphism**: 20px backdrop blur with inner-glow gradient borders.
- ⚡ **Kinetic UI**: Fluid micro-animations and spring-based transitions via Framer Motion.
- 📱 **Adaptive Architecture**: Flawless experience across mobile, tablet, and desktop.
- 📊 **Productivity Analytics**: Real-time stats dashboard for at-a-glance management.
- 🎯 **Tactile Interactions**: Delightful hover and click states with kinetic feedback.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Design System**: Tailwind CSS + Custom Design Tokens
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Typography**: Outfit & Inter (Google Fonts)
- **Feedback**: React Hot Toast

## 🚀 Getting Started

1. Clone the repository and navigate to the frontend:
```bash
cd frontend
```

2. Install the production dependencies:
```bash
npm install
```

3. Configure your environment:
```bash
# Create .env.local and set your backend URL
NEXT_PUBLIC_API_URL=http://localhost:8000
```

4. Launch the development workspace:
```bash
npm run dev
```

The TaskFlow interface will be available at [http://localhost:3000](http://localhost:3000).

## 📂 Project Architecture

```
frontend/
├── app/                  # TaskFlow Pages & Layouts
│   ├── layout.tsx        # Global design wrapper
│   ├── page.tsx          # Animated loading gateway
│   ├── dashboard/page.tsx# Main productivity workspace
│   ├── signin/page.tsx   # Premium authentication
│   └── terms-and-conditions/page.tsx # Formal guidelines
├── components/           # Atomic UI Components
│   ├── GlassCard.tsx     # The base of our glassmorphism
│   ├── TaskCard.tsx      # Interactive task item
│   ├── TaskForm.tsx      # Workflow creation node
│   └── Navbar.tsx        # High-end navigation
├── styles/               # Design Tokens
│   └── globals.css       # Core animations & CSS variables
└── lib/                  # Backend Synchronizers
    └── api.ts            # Secure API orchestration
```

## 💎 Design System Details

- **Gradients**: Custom `btn-gradient` and `gradient-text` utility classes.
- **Backgrounds**: `particle-bg` for depth and movement.
- **Glassmorphism**: `glass` and `glass-card` utilities for depth and transparency.
- **Focus States**: High-contrast glow effects for better accessibility and style.

---

*Designed for high-performance productivity.*