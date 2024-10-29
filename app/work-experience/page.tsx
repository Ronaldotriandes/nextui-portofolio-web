import { CardExperience } from "@/components/CardExperience";
import { subtitle, title } from "@/components/primitives";
import { workConfig } from "@/config/workExperience";

export default function WorkExperiece() {
  return (
    <section className="flex flex-col gap-4">
    <div>
      <div className={subtitle({ class: "mt-4 font-bold text-left text-xl" })}>
        Project History
      </div>
    </div>    
    {workConfig.map((item: any) => {
        return (
          <>
           <CardExperience data={item}/>
          </>
        )
      })}
  </section>
  );
}
