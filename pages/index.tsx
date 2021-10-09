import Image from "next/image"
import Head from "next/head"
import React from "react"
import JoinModal from "~/components/join-modal"
import bg from "../public/mc.webp"

export default function Landing() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{"Kal's Set - Vanilla Minecraft Server"}</title>
        <meta name="description" content={"香港人嘅 Minecraft 伺服器"} />
      </Head>
      <div className="relative min-h-screen flex flex-col justify-end antialiased">
        <div className="m-8 lg:m-32 z-10">
          <div>
            <h1 className="text-5xl lg:text-7xl font-extralight tracking-wide text-white">
              {"Kal's Set"}
            </h1>
            <h2 className="inline text-lg sm:text-xl lg:text-3xl font-medium leading-3 text-white">
              香港人嘅{" "}
            </h2>
            <h2 className="inline text-lg sm:text-xl lg:text-3xl font-bold tracking-wider leading-3 text-lime-400">
              Minecraft
            </h2>
            <h2 className="inline text-lg sm:text-xl lg:text-3xl font-medium  leading-3 text-white">
              {" "}
              伺服器
            </h2>
          </div>
          <div className="mt-4 lg:mt-8">
            <JoinModal />
          </div>
        </div>

        <Image
          className="z-[-1]"
          alt="background"
          quality={100}
          placeholder="blur"
          src={bg}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
    </>
  )
}
