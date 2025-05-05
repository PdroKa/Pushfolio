import { Facebook, Github, Instagram, Linkedin, Twitter, Plus, LucideIcon } from "lucide-react"
import { Button } from "../ui/button"

type Icon = {
    label?: String;
    Icon: LucideIcon;
};
export function UserCard() {

    const icons: Icon[] = [
        { Icon: Github },
        { Icon: Instagram },
        { Icon: Linkedin },
        { Icon: Twitter },
        { Icon: Plus },
    ]
    return (

        <div className="w-[340px] flex flex-col gap-5 items-center p-5 border border-white 
        border-opacity-10 bg-[#121212] rounded-3xl text-white"
        >
            <div className="size-48">
                <img
                    src="https://github.com/pdroka.png"
                    alt="Kauan Reis"
                    className="rounded-full w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                    <h2 className="text-3xl font-bold min-w-0 overflow-hidden">Kauan Reis</h2>
                </div>
                <p className="opacity-40">
                    "Eu faço produtos para a internet"
                </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <span className="uppercase text-xs font-medium">Links</span>
                <div className="flex gap-3">

                    {icons.map(({ Icon }, index) =>
                        <button key={index} className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
                            <Icon />
                        </button>)}
                </div>
            </div>
            
            <div className="flex flex-col gap-3 w-full h-44">
                <div className="w-full flex flex-col items-center gap-3">
                    <Button className="w-full">
                        Template Saas - Compre agora
                    </Button>
                    <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]">
                        <Plus />
                    </button>
                </div>
            </div>
        </div>)
}