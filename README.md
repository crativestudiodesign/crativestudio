# Crative Studio

A Neo-Brutalist Branding Agency website featuring a bold design system and bento-grid layout.

## Overview

Crative Studio is a conceptual branding agency website built to demonstrate high-contrast design principles (Neo-Brutalism) combined with modern layout techniques.

## Features

- **Neo-Brutalist Aesthetic**: Hard shadows, thick borders, and vibrant colors.
- **Bento Box Layout**: CSS Grid-based modular component design.
- **Responsive Animations**: Subtle hover effects and marquees.
- **Interactive UI**: Functional forms and navigation elements.

## Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS (via CDN configuration)
- **Icons**: Lucide React
- **Typography**: Syne (Headings) & Plus Jakarta Sans (Body)

## Project Structure

This project uses a browser-native ES Module approach (via `importmap` in `index.html`), making it lightweight and easy to run without a complex build step.

- `components/`: Reusable UI components (Hero, Navigation, BentoGrid, etc.)
- `services/`: Utility services.
- `types.ts`: TypeScript definitions.
- `index.html`: Entry point.
- `App.tsx`: Main application component.

## Usage

Since this project uses ES modules directly in the browser:

1. Clone the repository.
2. Serve the directory using a static file server (e.g., VS Code Live Server, `python -m http.server`, or `npx serve .`).
3. Open the localhost URL in your browser.
