# CodeStreams - Real-Time Collaborative Code Editor (Frontend)

## Overview

CodeStreams is a real-time collaborative code editor that supports multiple programming languages. The application provides live collaboration features powered by Socket.io, type safety with TypeScript, and a clean, responsive UI built with Tailwind CSS and Shadcn UI.

## Features

- **Real-Time Collaboration:** Share code instantly with others using Socket.io.
- **Multi-Language Support:** Edit and run code in several programming languages.
- **Type Safety:** Developed with TypeScript to reduce errors and improve maintainability.
- **Modern UI:** Styled using Tailwind CSS and Shadcn UI for a smooth user experience.

## Tech Stack

- **React.js** – Frontend framework
- **TypeScript** – Static type checking
- **Socket.io-client** – Real-time communication
- **Tailwind CSS** – Styling framework
- **Shadcn UI** – UI component library

## Live Demo

[Live Demo Link](https://codestreams.vercel.app/)

## Project Structure

```
/src
  ├── components/     # Reusable UI components
  ├── assets/         # Static assets stored
  ├── pages/          # Main application pages
  ├── hooks/          # Custom React hooks
  ├── lib/            # Utility functions and API calls
  ├── types/          # Typescript types define
  ├── App.tsx         # Root component
  ├── Router.tsx      # Routing is defined
  └── main.tsx        # Application entry point
```

## Getting Started

### Prerequisites

- Node.js installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kishan-kareliya/Code-Stream-Client
   cd codestreams-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory with the following content:

   ```
    VITE_CODE_EXECUTION_API=https://emkc.org/api/v2/piston/execute
    VITE_BACKEND_URL=http://localhost:3000/
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will run at [http://localhost:5173](http://localhost:5173).
