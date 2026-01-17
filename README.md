# Omura Waitlist (v1)

> The first Search Engine built on the **Walrus Protocol**. Decentralized, censorship-resistant, and powered by you.

This is the official waitlist and landing page for the Omura Protocol, featuring a premium 3D-interactive aesthetic, dark mode UI, and seamless Supabase integration for email capture.

## 🚀 Features

- **3D Interactive Hero**: Built with `react-three-fiber` and custom shaders for a "living blob" effect.
- **Cybernetic Aesthetic**: Glassmorphism, mono typography, and granular noise textures.
- **Supabase Backend**: Secure email collection with direct database integration.
- **SEO Optimized**: JSON-LD Structured Data for "Search Engine" and full Open Graph support.
- **Responsive**: Fully immersive experience on Mobile and Desktop.

## 🛠 Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Variables
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Backend**: [Supabase](https://supabase.com/)

## 📦 Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/imortaltatsu/omura_waitlist.git
    cd omura_waitlist
    ```

2. Install dependencies (using Bun is recommended):

    ```bash
    bun install
    # or
    npm install
    ```

3. Configure environment variables:
    Create a `.env` file in the root directory:

    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
    ```

    *(Note: Using `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY` is also supported)*

4. Start the development server:

    ```bash
    bun dev
    ```

## 🏗 Build

To build for production:

```bash
bun run build
```

## 📜 License

MIT License. See [LICENSE](./LICENSE) for details.

## 🔗 Socials

- Follow us on X: [@OmuraHQ](https://x.com/OmuraHQ)
