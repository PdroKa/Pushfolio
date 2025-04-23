export function Hero() {
    return (
        <div className="flex">
            <div className="w-full flex flex-col gap-2 mt-[35vh]">
                <h1 className="text-5xl font-bold leading-[64px]">
                    Seus projetos e redes sociais em um unico link
                </h1>
                <h2 className="text-xl leading-6">Crie sua propria pagina de projetos e compartilhe eles com o mundo</h2>
                <br />
                <p>Acompanhe o engajamento com Analitics</p>
                <div className="flex items-center gap-2 w-full -mt-[10vh]">
                    <span className="text-white text-xl">Pushfolio.com/</span>
                    <input type="text" />
                    <button>Criar agora</button>
                </div>
            </div>
            <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%, #4D2DBB, transparent_55%)}">
                <div className="relative">
                    <h3>
                        UserCard
                    </h3>
                    <div className="absolute -bottom-[7%] -right-[]">
                        <h3>TotalVisits</h3>
                    </div>
                    <div className="absolute top-[20%] -left-[45%] -z-10">
                        <h3>ProjectCard</h3>
                    </div>
                    <div className="absolute -top-[5%] -left-[55%] -z-10">
                        <h3>ProjectCard</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}