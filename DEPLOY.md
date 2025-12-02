# Deployment Guide: Vercel via GitHub Actions

This guide explains how to deploy the **Client** (Next.js) and **Server** (Express) to Vercel using GitHub Actions.

## Prerequisites

1.  **GitHub Repository**: Ensure this code is pushed to a GitHub repository.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com).
3.  **Database**: You need a hosted PostgreSQL database.
    *   **Option A**: Vercel Postgres (easiest integration).
    *   **Option B**: Neon, Supabase, or Railway.
    *   **Required Info**: You need the connection string (e.g., `postgres://user:pass@host:port/db`).

## Step 1: Set up Vercel Projects

You need to create **two** separate projects in Vercel: one for the Client and one for the Server.

### 1.1 Server Project
1.  Go to the Vercel Dashboard and click **"Add New..."** -> **"Project"**.
2.  Import your GitHub repository.
3.  **Framework Preset**: Select **Other**.
4.  **Root Directory**: Click "Edit" and select `server`.
5.  **Environment Variables**: Add the following:
    *   `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`, `DB_DIALECT` (or a single connection string if your app supports it, but your config uses individual vars).
    *   `APP_PORT`: `3000` (optional, Vercel handles ports, but good to have).
6.  Click **Deploy**. It might fail initially if secrets aren't perfect, that's okay. We just need the Project ID.

### 1.2 Client Project
1.  Go to the Vercel Dashboard and click **"Add New..."** -> **"Project"**.
2.  Import the **same** GitHub repository.
3.  **Framework Preset**: Select **Next.js**.
4.  **Root Directory**: Click "Edit" and select `client`.
5.  **Environment Variables**:
    *   `NEXT_PUBLIC_API_URL`: The URL of your deployed Server (e.g., `https://your-server-project.vercel.app`).
6.  Click **Deploy**.

## Step 2: Get Vercel IDs and Token

You need to gather 4 pieces of information to give to GitHub Actions.

1.  **VERCEL_TOKEN**:
    *   Go to Account Settings -> Tokens -> Create Token.
    *   Copy the token.

2.  **VERCEL_ORG_ID**:
    *   Go to Account Settings (or Team Settings) -> General.
    *   Copy "Team ID" (or Account ID if personal).

3.  **VERCEL_PROJECT_ID_SERVER**:
    *   Go to your **Server** project -> Settings -> General.
    *   Copy "Project ID".

4.  **VERCEL_PROJECT_ID_CLIENT**:
    *   Go to your **Client** project -> Settings -> General.
    *   Copy "Project ID".

## Step 3: Configure GitHub Secrets

1.  Go to your GitHub Repository -> Settings -> Secrets and variables -> Actions.
2.  Click **"New repository secret"**.
3.  Add the following secrets using the values from Step 2:
    *   `VERCEL_TOKEN`
    *   `VERCEL_ORG_ID`
    *   `VERCEL_PROJECT_ID_SERVER`
    *   `VERCEL_PROJECT_ID_CLIENT`

## Step 4: Deploy

1.  Push changes to the `deploy` branch:
    ```bash
    git add .
    git commit -m "Setup Vercel deployment"
    git push origin deploy
    ```
2.  Go to the **Actions** tab in your GitHub repository.
3.  You should see the "Deploy to Vercel" workflow running.
4.  Once finished, your Client and Server will be deployed!

## Troubleshooting

*   **Database Connection**: If the server fails, check the "Logs" tab in the Vercel Server project. It's usually a database connection issue. Ensure your database allows connections from anywhere (0.0.0.0/0) or look up Vercel's IP ranges (though 0.0.0.0/0 is easier for testing).
*   **CORS**: If the client can't talk to the server, check the console logs in the browser. You might need to update the `corsMiddleware` in `server/src/middlewares/corsMiddleware.js` to allow your Vercel Client URL.
