import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import {Avatar} from "@nextui-org/avatar";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, IgIcon } from "@/components/icons";
import { CardImage } from "../CardImage";
import { FC } from "react";

export const WorkExperience: FC<{
  data: {
    jobTitle: string;
    description: string;
    image: string;
    title: string;
  };
  
}> = ({
  data
}) => {
  return (
    <div >
       <div className="flex flex-col text-center justify-center w-full gap-x-16">
        <div className="lg:flex flex-row gap-x-20">
            <div className="w-full">
                <CardImage image={data.image}/>
            </div>
            <div className="flex flex-col w-full">
                <div className='mt-4  text-left font-[300] text-lg'>
               {data.jobTitle}
                </div>
                <div className='mt-4 font-semibold text-left text-2xl'>
                    {data.title}
                </div>
                <div className='mt-4 font-light text-left text-md'>
                  {data.description}
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
    </div>
  );
}
