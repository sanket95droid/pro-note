'use client'
import React from 'react'
import { Button } from './ui/button'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'


type Props = {
    noteId: number
}

const DeleteNote = ({noteId}: Props) => {
    const router = useRouter()
    const deleteNote = useMutation({
        mutationFn: async ()=>{
            const response = await axios.post('/api/deleteNote', {noteId})
        }
    })
  return (
    <Button size="sm" className="hover:scale-110 transition ease-in-out delay-75 bg-white text-black font-semibold rounded-[8px] hover:bg-[#bd0e32] hover:text-white duration-200 p-2" variant={'destructive'} onClick={()=>{
        const confirm = window.confirm("Sure you want to delete this note?")
        if(!confirm) return
        deleteNote.mutate(undefined, {
            onSuccess: () => {
                router.push('/dashboard')
            },
            onError: (err) => {
                console.error(err);
            }
        })
    }}>
        <Trash2 className='w-5 h-5'/>
    </Button>
  )
}

export default DeleteNote