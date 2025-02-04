"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Error = () => {
    return ( 
        <div className="h-full flex fkex-col items-center justify-center space-y-4">
            <Image 
                src="/error.png"
                height="300"
                width="300"
                alt="error"
                className="dark:hidden"
            />
            <Image 
                src="/error-dark.png"
                height="300"
                width="300"
                alt="error"
                className="hidden dark:hidden"
            />
            <h2 className="text-xl font-medium">
                Something went wrong!
            </h2>
            <Button asChild>
                <Link href="/documents">
                    Go back
                </Link>
            </Button>
        </div>
     );
}
 
export default Error;