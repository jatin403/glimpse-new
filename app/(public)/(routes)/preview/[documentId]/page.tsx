"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toolbar";
import { Cover } from "@/components/cover";

import dynamic from "next/dynamic";
import { useMemo } from "react";

interface DocumentIdPageProps {
    params: {
        documentId: Id<"documents">;
    };
};

const DocumentIdPage = ({
    params
}: DocumentIdPageProps) => {

    const Editor = useMemo(
        () => dynamic(() => import("@/components/editor"), { ssr: false }),
        []
    );

    const document = useQuery(api.documents.getById, {
        documentId: params.documentId
    });

    const update = useMutation(api.documents.update);

    const onChange = (content: string) => {
        update({
          id: params.documentId,
          content,
        });
    };

    if(document===undefined){
        return(
            <div>
                Loading...
            </div>
        );
    }

    if(document===null){
        return(
            <div>
                Not found.
            </div>
        );
    }

    return ( 
        <div className="pb-40">
            <Cover preview url={document.coverImage}/>
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
                <Toolbar preview initialData={document}/>
                <Editor editable={false} onChange={onChange} initialContent={document.content} />
            </div>
        </div>
     );
}
 
export default DocumentIdPage;