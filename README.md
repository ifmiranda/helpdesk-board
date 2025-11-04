This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

npx create-next-app@latesthelpdesk-board 

2. Install dependencies 
cd helpdesk-board
npm install 

3.Run development server 
npm run dev 

4. Ensure this folder structure 
src/
 ├── app/
 │   ├── page.jsx                 # Server Component
 │   ├── api/
 │   │   └── tickets/route.js     # API route returning JSON tickets
 │   └── components/
 │       ├── Board.jsx            # Parent: state, effects, lifting
 │       ├── TicketList.jsx
 │       ├── TicketCard.jsx
 │       ├── StatusFilter.jsx
 │       ├── PriorityFilter.jsx
 │       ├── SearchBox.jsx
 │       ├── MyQueueSummary.jsx
 │       └── StatusMessage.jsx
 └── lib/
     └── severity.js              # Utilities (priority/status maps) 

-Each component must start with, 'use client'. 



