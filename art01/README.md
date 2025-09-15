# Art01 - Artist Empowerment Platform

Full-stack platform connecting volunteers with homeless artists through digital art sales and mental health tracking. Built with:

- Next.js (TypeScript, Tailwind CSS)
- Prisma + SQLite/PostgreSQL
- FastAPI ML service
- Dockerized deployment

## Features

- Artist profile galleries
- Artwork catalog management
- Volunteer engagement tracking
- PHQ-9/GAD-7 mental health assessments
- Outcome analytics using machine learning
- Static site exports for artist portfolios

## Getting Started

```bash
# Install dependencies
cd apps/web && npm install

# Configure environment variables
cp ../../../.env.example .env.local

# Run development server
npm run dev
```

## ML Service Setup

```bash
cd ml-service
docker-compose build
docker-compose up
```

## Deployment

### Netlify

1.  **Fork this repository.**
2.  **Create a new site on Netlify.**
3.  **Connect your forked repository.**
4.  **Set the build command:** `pnpm build`
5.  **Set the publish directory:** `apps/web/.next`
6.  **Add the following environment variables:**
    *   `DATABASE_URL`
    *   `AUTH_SECRET`
    *   `EMAIL_SERVER`
    *   `EMAIL_FROM`
    *   `ADMIN_SECRET`

### Static Artist Site Export

```bash
node scripts/export-artist.js ARTIST_ID output/ --zip
```

## Documentation

- [Metrics Definitions](/docs/METRICS.md)
- [API Documentation](/docs/API.md)
- [Developer Workflow](/docs/DEVELOPMENT.md)
