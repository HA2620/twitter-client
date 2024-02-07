import Image from "next/image";
import { Inter } from "next/font/google";
import { FaXTwitter } from "react-icons/fa6";
import { GoHome, GoBell } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { FeedCard } from "@/components/FeedCard";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";




const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSidebarButton[] = [

  {
    title: "Home",
    icon: <GoHome />

  },
  {
    title: "Explore",
    icon: <IoIosSearch />
  },
  {
    title: "Notifications",
    icon: <GoBell />
  },
  {
    title: "Messages",
    icon: <BiMessageSquareDetail />

  },
  {
    title: "Bookmark",
    icon: <FaRegBookmark />
  },
  {
    title: "Profile",
    icon: <IoPersonOutline />
  },
  {
    title: "More",
    icon: <CiCircleMore />
  },

]

export default function Home() {

  const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential
    if (!googleToken)
      return toast.error(`google error not found`);

    const { verifyGoogleToken } = await graphqlClient.request(verifyUserGoogleTokenQuery, { token: googleToken })

    toast.success("Verified Success!");
    console.log(verifyGoogleToken);

    if(verifyGoogleToken)
      window.localStorage.setItem("__twitter_clone_token", verifyGoogleToken);
    
  }, [])

  return (
    <div>
      <div className="font-inter grid grid-cols-12 px-40 overflow-hidden relative">
        <div className="col-span-3 justify-start pt-2 " >
          <div className="text-3xl h-fit w-fit hover:bg-gray-900 rounded-full p-3 cursor-pointer transition-all" >
            <FaXTwitter />
          </div>
          <div className="mt-4" >
            <ul>
              {sideBarMenuItems.map((item) => (
                <li className="flex items-center gap-4 mt-3 text-xl hover:bg-gray-900 px-4 w-fit rounded-full  py-2" key={item.title}>

                  <span>{item.icon}</span>
                  <span>{item.title}</span>

                </li>
              ))}
            </ul>
          </div>
          <div className=" text-lg font-semibold bg-[#1d9bf0] px-4 py-2.5 rounded-full my-3 mr-20 items-center text-center"  >
            <button className="">Post</button>
          </div>
        </div>
        <div className="col-span-6  h-screen no-scrollbar overflow-auto  border border-gray-600 border-t-0 border-b-0  " >

          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
        </div>
        <div className="col-span-3" >
          <div className="p-5 bg-slate-700 rounded-lg" >
            <GoogleLogin onSuccess={handleLoginWithGoogle}></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
}