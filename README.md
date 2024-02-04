1. install dependencies - npm install @trpc/server@next @trpc/client@next @trpc/react-query@next @trpc/next@next @tanstack/react-query@latest zod

2. file structure : 
src
 - app
  - _trpc
   - client.ts //createTRPCReact
  - api
   - trpc
    - [trpc]
     - route.ts //refer to docs as "next app router"
  - components
   - Providers.tsx //client component 
 - trpc
  - index.ts //appRouter
  - trpc.ts //initTRPC

3. wrap body in layout.tsx with Provider
