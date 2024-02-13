'use client'

import React from 'react'
import Typewriter from "typewriter-effect"

type Props = {};

const TypeWriterTitle = (props: Props) => {
  return (
    <Typewriter 
        options={{
            loop: true,
        }}
        onInit={(typewriter) => {
          typewriter.typeString("🤖AI powered")
          .pauseFor(1000)
          .deleteAll()
          .typeString("📝Efficient Note Taker")
          .start();
        }}
    />
  );
};

export default TypeWriterTitle