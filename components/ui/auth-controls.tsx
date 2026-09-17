"use client";

import React from "react";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export const AuthControls: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button
            type="button"
            className="text-sm font-medium text-neutral-700 hover:text-neutral-950 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button
            type="button"
            className="text-sm font-medium px-4 py-1.5 rounded-lg bg-primary-500 text-white hover:bg-primary-600 shadow-xs transition-all cursor-pointer"
          >
            Sign Up
          </button>
        </SignUpButton>
      </Show>

      <Show when="signed-in">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-9 h-9 ring-1 ring-neutral-200 hover:ring-primary-400 transition-all",
            },
          }}
        />
      </Show>
    </div>
  );
};
