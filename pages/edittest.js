import { useState } from "react";
import { useForm } from "react-hook-form";
import  Button  from "../components/button";
import Input from "../components/input";
import useMutation from "../libs/client/useMutation";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from  "next/dynamic";
import { EditorState } from "draft-js";

const Editor = dynamic(
    () => import("react-draft-wysiwyg").then((module) => module.Editor),
    {
        ssr: false,
    }
);



export default function Forms() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    console.log(editorState);

    return (
        <div  >
            <div className="bg-[#07090a] min-h-screen pb-16">
                <Editor
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    toolbarClassName="flex sticky top-0 z-50 justify-center mx-auto" 
                    editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
                    />
            </div>
        </div>
    )
}