import React from 'react'
import Typewriter from "typewriter-effect"

type Props = {}

const TypeWriter = (props: Props) => {
  return (
    <Typewriter 
        options={{
            loop: true
        }}
    />
  )
}

export default TypeWriter