"use client";

import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css"
import { useCallback } from "react";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });

    return response.url;
  };

  const editor: BlockNoteEditor | null = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });
  const uploadToDatabase = useCallback(() => {
    if (onChange) {
      setTimeout(() => {
        onChange(JSON.stringify(editor.document));
      }, 1000);
    }
  }, [editor, onChange]);

  return (
    <div>
      <BlockNoteView
        onChange={uploadToDatabase}
        editable={editable}
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default Editor;