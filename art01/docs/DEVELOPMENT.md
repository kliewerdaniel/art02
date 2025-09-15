# Developer Workflow & Contributing Guide

This document outlines the developer workflow for the art01 project and provides a guide for contributing.

## Getting Started

1.  **Fork the repository.**
2.  **Clone your fork:** `git clone https://github.com/<your-username>/art01.git`
3.  **Install dependencies:**
    *   Frontend: `cd apps/web && pnpm install`
    *   ML Service: `cd ml-service && pip install -r requirements.txt`
4.  **Set up environment variables:**
    *   Copy `.env.example` to `.env` and fill in the required values.
5.  **Run the development servers:**
    *   Frontend: `cd apps/web && pnpm dev`
    *   ML Service: `cd ml-service && uvicorn app:app --reload`

## Contributing

1.  **Create a new branch:** `git checkout -b my-feature-branch`
2.  **Make your changes.**
3.  **Commit your changes:** `git commit -m "feat: add my new feature"`
4.  **Push to your branch:** `git push origin my-feature-branch`
5.  **Create a pull request.**

## Coding Style

*   **Frontend:** We use ESLint and Prettier to enforce a consistent coding style. Please run `pnpm lint` and `pnpm format` before committing your changes.
*   **Backend:** We follow the PEP 8 style guide for Python.

## Testing

*   **Frontend:** We use Vitest for unit and integration testing. Please add tests for any new features or bug fixes. Run tests with `pnpm test`.
*   **Backend:** We use pytest for testing the ML service. Please add tests for any new endpoints or models.
