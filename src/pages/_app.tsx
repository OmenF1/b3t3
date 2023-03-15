import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";

//  Honestly, I didn't write this navbar example, I took it from another post so that I could focus on getting
//  all the components working together so that I can get a full view of everything as fast as possible before 
//  going into finer detail.  This will be the only thig I copy from elsewhere though.
import NavBar from "../components/navbar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <NavBar />
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
