import { defer, useLoaderData, Await } from "react-router-dom";
import { getFriends } from "../api";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdJet } from "react-icons/io";
import { Suspense } from "react";

export async function loader() {
  return defer({ friends: getFriends() });
}

export default function Friend() {
  const dataPromise = useLoaderData();

  function cardFriends(friends) {
    const cardEl = friends.map((friend) => {
      return (
        <div className="card-friend border h-4/5 border-black p-3 flex items-center justify-between">
          <div className="main-info w-1/2 h-2/3 flex items-center flex-col justify-center mr-4">
            <h2 className="font-soehne text-sm uppercase text-center">{friend.name}</h2>
            <h3 className="text-sm text-center">{friend.position}</h3>
          </div>
          <span className="border border-black h-3/4"></span>
          <div className="w-1/2 text-center flex flex-col gap-1">
            <a href={friend.instagram} target="blank_" className="flex items-center gap-2 ml-5 text-md font-sans text-black">
              <FaInstagram className="link-logo cursor-pointer" />
              <span className="link relative cursor-pointer">Instagram</span>
            </a>
            <a href={friend.linkedin} target="blank_" className="flex items-center gap-2 ml-5 text-md font-sans text-black">
              <FaLinkedin className="link-logo cursor-pointer" /> <span className="link relative cursor-pointer">LinkedIn</span>
            </a>
            <a href={friend.url} target="blank_" className="flex items-center gap-2 ml-5 text-md font-sans text-black">
              <IoMdJet className="link-logo cursor-pointer" />
              <span className="link relative cursor-pointer">Portofolio</span>
            </a>
          </div>
        </div>
      );
    });

    return cardEl;
  }
  return (
    <div className="h-screen w-full flex flex-col justify-center">
      <h2 className="font-soehne text-2xl">Friends & Collaborators : Check this out 🚀</h2>
      <div className="box-friends grid grid-cols-3 gap-5 w-full h-2/4 my-7">
        <Suspense>
          <Await resolve={dataPromise.friends}>{cardFriends}</Await>
        </Suspense>
      </div>
    </div>
  );
}
