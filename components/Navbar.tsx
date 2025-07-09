"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const user = session?.user;
  return (
    <div className="navbar border-b-1 border-pink-100">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={32}
            height={32}
          />
          <h1>Snapit</h1>
        </Link>
        {user ? (
          <figure className="flex gap-5 record">
            <button onClick={() => router.push(`/profile/${user?.id}`)}>
              <Image
                src={user.image || ""}
                alt="User"
                width={45}
                height={45}
                className="rounded-full"
              />
            </button>
            <button
              onClick={async () => {
                return await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      redirect("/sign-in");
                    },
                  },
                });
              }}
              className="cursor-pointer flex gap-2 text-base items-center primary-btn"
            >
              Logout
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={20}
                height={20}
                className="rotate-180"
              />
            </button>
          </figure>
        ) : (
          <div className="record flex gap-2">
            <Link href={"/sign-in"}>
              <button className="primary-btn text-base">
                Login
              </button>
            </Link>
            <Link href={"/sign-in"}>
              <button className="secondary-btn text-base text-white hover:text-pink-100">
                Sign up
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
