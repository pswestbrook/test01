import React from "react"
// import { useState } from "react"
import HidableImage from "../components/hidableImage"

export default function Home() {
  return (
    <>
      <h1>This is another heading</h1>
      <HidableImage
        src="20180513_102911.jpg"
        alt="My friend the millipede"
        title="Arthro Pic"
      />
      <HidableImage
        src="20180520_162848.jpg"
        alt="Nice shot"
        title="What a nice 001 shot"
      />
      <p className="indented">
        This is what Arthro was doing on the wood-like place.
      </p>
    </>
  )
}
