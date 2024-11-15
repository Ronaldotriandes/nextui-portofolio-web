import { subtitle, title } from "@/components/primitives";
import {ProjectHistory} from "@/components/projectHistory";
import { portoConfig } from "@/config/portofolio";
import { Button } from "@nextui-org/button";

export default function PortofolioPage() {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <div className={subtitle({ class: "mt-4 font-bold text-left text-xl" })}>
          Project History
        </div>
      </div>    
      {portoConfig.map((item: any) => {
        return (
          <>
           <ProjectHistory data={item}/>
          </>
        )
      })}
    </section>
  );
}
