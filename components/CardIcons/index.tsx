import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import { ReactJsIcon } from "../icons";
export const CardIcons = () => {
    return (
    <>
       <Card className="w-10 rounded-lg">
          <CardBody className="overflow-visible w-full object-cover h-[35px] bg-white p-0 justify-center items-center">
               <ReactJsIcon size={25}/>
          </CardBody>
        </Card>
    </>)
}