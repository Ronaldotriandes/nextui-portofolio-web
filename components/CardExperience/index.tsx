import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import { FC } from "react";
import { Avatar } from "@nextui-org/avatar";
import { CardIcons } from "../CardIcons";
export const CardExperience: FC<{
    data: {
        jobTitle: string;
        company : string;
        image: string;
        status: string;
        duration : string;
        description:string;
        icons: string[]
    }
}> = ({data}) => {
    return (
        <Card
          isHoverable
          className="w-full h-full"
        >
          <CardBody className="justify-center overflow-hidden">
            <div className="lg:flex flex-row p-3 gap-x-12 gap-y-10">
                <div className="w-20 content-center">
                    <Avatar isBordered color="primary" className="w-16 h-16" radius="lg" src={data.image} />
                </div>
                <div className="w-full flex flex-col gap-y-0">
                    <h1 className="text-xl">{data.company}</h1>
                    <h1 className="text-md font-[300]">{data.jobTitle}</h1>
                    <p className="text-md font-[200] mt-2">
                        {data.description}
                    </p>
                    <div className="flex flex-row mt-5">
                        <div className="w-full ">
                            <h1 className="text-md font-[300]">{data.status}  ({data.duration})</h1>
                        </div>
                        <div className="flex flex-row w-full text-right justify-end gap-x-2">
                            {
                                data.icons.map((item:string, i:number) => (
                                    <CardIcons key={i}  icon={item} size={25}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
          </CardBody>
        </Card>
      );
}