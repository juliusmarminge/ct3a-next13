"use client";

import { use } from "react";
import { signIn, signOut } from "next-auth/react";
import { trpc } from "../utils/trpc";

export const AuthShowcase: React.FC = () => {
  const session = use(trpc.auth.getSession.query());
  const secretMsg = use(trpc.auth.getSecretMessage.query());

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {session && (
        <p className="text-2xl text-blue-500">
          Logged in as {session.user?.name}
        </p>
      )}
      {secretMsg && <p className="text-2xl text-blue-500">{secretMsg}</p>}
      <button
        className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg hover:bg-violet-100"
        onClick={session ? () => signOut() : () => signIn()}
      >
        {session ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
