import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import { NextjsIcon, ReactJsIcon } from "../icons";
import { FC } from "react";
export const CardIcons :FC<{
    icon: string;
    size: number
}> = ({icon, size}) => {
    let compIcon = ''
    switch (icon) {
        case 'react':
            compIcon = '/icon/reactjs.png'
            break;
        case 'nextjs':
            compIcon = '/icon/next.png'
            break;
        case 'expressjs':
            compIcon = '/icon/express.png'
            break;
        default:
            break;
    }
    return (
    <>
       <Card className="min-w-10 rounded-lg bg-white items-center">
          <CardBody className="overflow-visible w-[30px] object-cover  h-[35px] bg-white p-0 justify-center items-center">
          <Image
                alt="Relaxing app background"
                className="z-0 w-[80px] h-[90px] object-contain"
                src={`/icon/${icon}.png`}
            />
          </CardBody>
        </Card>
    </>)
}