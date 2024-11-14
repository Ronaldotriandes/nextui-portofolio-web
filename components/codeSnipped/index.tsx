'use client'
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import { CardIcons } from "../CardIcons";
import { GithubIcon, StartIcon } from "../icons";
import { codeConfig } from "@/config/codeSnipped";
import { Link } from "@nextui-org/link";

export const CodeSnipped = () => {
    return (
        <>
    <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-10">
      {codeConfig.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => window.open('https://github.com/ronaldotriandes', '_blank')}>
          <CardBody className="overflow-visible w-full object-cover h-full bg-[#323443]">
            <div className="flex flex-col p-6 pb-0 gap-y-3">
                <div className='mt-4 font-semibold text-left text-2xl'>
                   {item.title}
                </div>
                <div className='mt-4 font-light text-left text-md'>
                  {item.description}
                </div>
                <div className="flex flex-row mt-4">
                    <div className="flex flex-row w-full gap-x-3 flex-wrap gap-y-4">
                        {
                                item.icons.map((item:string, i:number) => (
                                    <CardIcons key={i}  icon={item} size={25}/>
                                ))
                        }  
                    </div>
                    <div className="flex flex-row w-[100px] justify-end self-center gap-x-3">
                        <StartIcon size={20}/>
                        <div>{item.likes} Like</div>
                    </div>
                </div>
                <div className='mt-4 font-light text-right text-md  justify-end flex gap-x-2'>
                 Visit on Github  
                 <Link
                  isExternal
                  className="text-white"
                  href={'https://github.com/ronaldotriandes'}
                >
                  <GithubIcon size={25} />
                </Link>
                </div>
            </div>
          </CardBody>
          {/* <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter> */}
        </Card>
      ))}
    </div>
        </>
    )
}