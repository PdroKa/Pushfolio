import { Button } from "../ui/button";

export function Header() {
    return (
        <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
            <div className="flex items-center gap-4">
                <img className="size-10" src="./logo.svg" alt="Convoca logo" />
                <h3 className="text-white text-2xl font-bold">ProjectInBio</h3>
            </div>

            <div className="flex items-center gap-4">
                <Button>Minha Página</Button>
                <Button>Sair</Button>
            </div>

        </div>


    );


}