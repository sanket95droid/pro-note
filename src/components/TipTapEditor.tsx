'use client'
import React from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import {StarterKit} from '@tiptap/starter-kit'
import TipTapMenuBar from './TipTapMenuBar'

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
      <div>
          <EditorContent editor={editor} />
      </div>
    </>
  )
}

export default TipTapEditor