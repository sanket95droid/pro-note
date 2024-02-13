'use client'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Loader2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from "@/components/ui/input"
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type Props = {}


// I still struggle with tanstack/mutation :(
const CreateNote = (props: Props) => {
    const router = useRouter()
    const [input, setInput] = React.useState('');
    // mutate function will hit the endpoint createNoteBook and pass in name of the NoteBook as 'input'
    const createNotebook = useMutation({
        mutationFn: async () =>{
            const response = await axios.post('/api/createNotebook', {
                name: input,
            });
            return response.data;
        }
    })
    //once create button clicked it will trigger handleSubmit() then it will call the mutate function
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input == '' || input == ' ')
        {
            window.alert('Enter name for your note')
            return;
        }

        createNotebook.mutate(undefined, {
            onSuccess: ({note_id}) => {
                console.log('note created', {note_id})
                router.push(`/notebook/${note_id}`)
            },  
            onError: (error) => {
                console.log(error);
                window.alert("Failed to create")
            },
        });
    };

  return (
    <Dialog>
        <DialogTrigger>
            <div className="border-dashed flex border-2 border-[#d34848] h-full rounded-xl item-center justify-center sm:flex-row hover:shadow-lg gap-2 transition hover:-translate-y-2 duration-200 flex-row p-4">
                <Plus className="w-5 h-5 text-white lg:mt-2 sm:mt-1 md:mt-2" strokeWidth={2}/>
                <h2 className="font-semibold sm:mt-[6px] text-white">New Note</h2>
            </div>
        </DialogTrigger>
        <DialogContent className="bg-white">
            <DialogHeader className="justify-center items-center">
                <DialogTitle>
                    New Notebook
                </DialogTitle>
                <DialogDescription>
                    You can create a new note
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <Input value={input} className='rounded-[8px]' onChange={(e)=>{setInput(e.target.value)}} placeholder="Type..." />
                <div className="h-4"></div>
                <div className="flex items-center justify-center gap-3">
                    <Button type="reset" variant="secondary" className="hover:scale-110 transition ease-in-out delay-75 bg-gray-200 font-semibold rounded-[8px] hover:bg-black hover:text-white duration-200 p-2">
                        Cancel
                    </Button>
                    <Button size="sm" className="hover:scale-110 transition ease-in-out delay-75 bg-[#d34848] text-white font-semibold rounded-[8px] hover:bg-black duration-200 p-3" disabled={createNotebook.isPending}>
                        {createNotebook.isPending && (
                            <Loader2 className="animate-spin w-4 h-4 mr-2" />
                        )}
                        Create
                    </Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default CreateNote