import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import {Avatar} from "@nextui-org/avatar";
import {Button} from "@nextui-org/button";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, IgIcon, TwitterIcon } from "@/components/icons";
import ProjectHistory from "@/components/projectHistory";
import { SeeMore } from "@/components/icon/seeMore";
import { CodeSnipped } from "@/components/codeSnipped";

export default function Home() {
  return (
    <>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
       <div className="flex flex-row text-center  w-full gap-x-16">
        <div className="flex gap-4 items-center">
          <Avatar isBordered color="primary" src="/image/foto.jpg" className="w-40 h-40 text-large" />
        </div>
        <div className="flex flex-col max-w-xl w-full">
          <div className={subtitle({ class: "mt-4 font-bold text-left text-lg" })}>
            Summary
          </div>
          <div className="text-left font-[300]">
            <p>
            Software developer with more than 4 years of experience and using several 
            familiar tech stacks such as <span className="text-[#62D9FF]"> javascript </span> , Php, <span className="text-[#80FFA3]">Node Js</span>, <span className="text-[#62D9FF]"> React Native </span>, C++, <span className="text-[#80FFA3]"> Go</span> and 
            <span className="text-[#4CA9FF]"> Database</span>. 
            </p>
          </div>
        </div>
      <div className="flex gap-3">
        <div className="flex flex-col">
          <div className={subtitle({ class: "mt-4 font-bold" })}>
            Lets Connect!
          </div>
          <div className="flex flex-row w-full self-center gap-x-5 justify-center">
            {/* <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })} 
              href={siteConfig.links.docs}
            >
              Documentation
            </Link> */}
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <IgIcon size={25} />
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <TwitterIcon size={25} />
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={25} />
            </Link>
          </div>
        </div>
      </div>
      </div>
      {/* <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })} 
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div> */}

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <div>
        <div className={subtitle({ class: "mt-4 font-bold text-left text-xl" })}>
          Project History
        </div>
      </div>    
      <ProjectHistory/>
      <ProjectHistory/>
      <ProjectHistory/>
      <ProjectHistory/>
          <div className="w-28 flex flex-row w-full gap-x-5 ">
              {/* <Link
                isExternal
                className={buttonStyles({ variant: "bordered", radius: "full" })}
                href={siteConfig.links.github}
              >
                <GithubIcon size={25} />
              </Link> */}
              <Button startContent={<SeeMore/>} className="bg-[#323443] text-[#C4C4C4]" radius="md" size="sm"> See More</Button>

          </div>
    </section>
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <div>
        <div className={subtitle({ class: "mt-4 font-bold text-left text-xl" })}>
         Code Snipped
        </div>
      </div> 
      <CodeSnipped/>   
          <div className="w-28 flex flex-row w-full gap-x-5 ">
              {/* <Link
                isExternal
                className={buttonStyles({ variant: "bordered", radius: "full" })}
                href={siteConfig.links.github}
              >
                <GithubIcon size={25} />
              </Link> */}
              <Button startContent={<SeeMore/>} className="bg-[#323443] text-[#C4C4C4]" radius="md" size="sm"> See More</Button>

          </div>
    </section>
    </>

  );
}
