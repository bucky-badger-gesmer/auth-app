import Link from "next/link";
import React from "react";
import SignOut from '../../components/sign-out';
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const session = await supabase.auth.getSession();
  const user = session.data?.session?.user;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>Welcome, <strong>Guest</strong>!</div>

        <div className="flex gap-2 text-sm mt-1">
          {user 
            ? <SignOut/>
            : <LinkButton href="/login">Login</LinkButton>
          }
        </div>
      </div>            
    </main>
  );
}

const LinkButton = ({href, children}: {href: string, children: React.ReactNode}) => {
  return <Link href={href} className="text-white/30 hover:text-white transition duration-100 ease-in-out">{children}</Link>
}