import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import { CardIcons } from "../CardIcons";
import { StartIcon } from "../icons";
const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
   ]
export const CodeSnipped = () => {
    return (
        <>
    <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-10">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable >
          <CardBody className="overflow-visible w-full object-cover h-full bg-[#323443]">
            {/* <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[240px]"
              src={item.img}
            /> */}
            <div className="flex flex-col p-6 gap-y-3">
                <div className='mt-4 font-semibold text-left text-2xl'>
                    Web PT. Mencari Cinta Sejati
                </div>
                <div className='mt-4 font-light text-left text-md'>
                Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.
                </div>
                <div className="flex flex-row mt-4">
                    <div className="flex flex-row w-full gap-x-3">
                        {/* <CardIcons/>
                        <CardIcons/> */}
                    </div>
                    <div className="flex flex-row w-full justify-end self-center gap-x-3">
                        <StartIcon size={20}/>
                        <div>12 Like</div>
                    </div>
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