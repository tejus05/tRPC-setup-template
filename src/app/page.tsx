"use client";

import { trpc } from "./_trpc/client";

export default function Home() {

  const { data } = trpc.test.useQuery();

  console.log(data)

  return (
    <p>
      { data }
    </p>
  );
}
