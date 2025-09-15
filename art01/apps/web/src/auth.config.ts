import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  providers: [], // Edge-incompatible providers will be in auth.ts
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to the login page
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
