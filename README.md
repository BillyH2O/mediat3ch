# mediat3ch

Public tech media site styled like Windows XP (TECH.EXE): home, articles, domains, tools, newsletter, favorites, and the legacy `/blog` redirects.

This app is static content. It does not talk to the mlxp backend. The newsletter form uses `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` when that variable is set.

```bash
npm install
npm run dev
```

The dev server listens on port 3001 so it can run next to mlxp on port 3000.
