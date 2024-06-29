import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl">
            <div className="relative w-[300px] h-[300px] sm:w-[250px] sm:h-[250px] md:h-[400px] md:w-[400px]">
                <Image 
                    src = "/notion-parade.webp"
                    layout = "fill"
                    className="object-contain dark:hidden"
                    alt="Documents"                    
                />
                <Image 
                    src = "/notion-parade-dark.webp"
                    layout = "fill"
                    className="object-contain hidden dark:block"
                    alt="Documents"                    
                />
            </div>
            <div className="relative h-[300px] w-[400px] hidden md:block">
                <Image 
                    src = "/skools-student__1_.png"
                    layout = "fill"
                    className="object-contain dark:hidden"
                    alt="Reading"
                />
                <Image 
                    src = "/skools-student__1_dark.png"
                    layout = "fill"
                    className="object-contain hidden dark:block"
                    alt="Reading"
                />
            </div>
        </div>
    );
}