import { Editor } from '@tiptap/react';
import { Bold } from 'lucide-react';
import React from 'react'

//using tiptap library for the editor

type Props = {
  editor: Editor;
}

const TipTapMenuBar = ({ editor }: Props) => {
  return (
    <div className='flex flex-wrap gap-2'>
      <button onClick={()=>{editor.chain().focus().toggleBold().run()}} disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? "is-active": " "}>
        <Bold className='w-8 h-8 bg-gray-400 hover:bg-[#BC6FF1] hover:text-white rounded-[6px] p-1' />
      </button>
    </div>
  )
}

export default TipTapMenuBar