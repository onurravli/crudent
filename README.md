# Crudent Monorepo

This monorepo contains both backend and frontend code of Crudent.

## Requirements

Follow these steps to start the application:

1. Node.js
2. Docker & Docker Compose

## Getting Started

There are some steps to produce to start the application.

1. Clone the repo

```bash
git clone https://github.com/onurravli/crudent
```

2. Change directory to the repo

```bash
cd crudent
```

3. Install dependencies

```bash
npm run install
#or
pnpm run install
```

4. Start the development server

```bash
docker-compose up -f docker-compose.dev.yml up --build
```

5. Or, start the production ready server

```bash
docker-compose up -f docker-compose.yml up --build
```
