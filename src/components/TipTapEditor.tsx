'use client'
import React from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import {StarterKit} from '@tiptap/starter-kit'
import TipTapMenuBar from './TipTapMenuBar'
import { ArrowDown } from 'lucide-react'

type Props = {}
const TipTapEditor = (props: Props) => {
const [editorState, setEditorState] = React.useState('');
const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: editorState,
    onUpdate: ({editor}) => {
        setEditorState(editor.getHTML());
    }
});

  return (
    <>
      <div className="flex">
        {editor && <TipTapMenuBar editor={editor} /> }
      </div>
      <div className="h-4"></div>
      <div className="h-4 text-slate-400 text-sm flex flex-row justify-center items-center">Type below <ArrowDown className='mt-[2px] w-4 h-4' /> </div>
      <div className="prose">
          <EditorContent editor={editor} placeholder='Type here ...'/>
      </div>
    </>
  )
}

export default TipTapEditor