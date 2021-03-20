import React from "react"
import { useState } from "react"

export default function HidableImage({ src, alt, title }) {
  const [imageState, setImageState] = useState(true)
  return (
    <>
      <h2 style={{ display: !imageState ? "unset" : "none" }}>{title}</h2>
      <img
        style={{ width: 300, display: imageState ? "unset" : "none" }}
        src={src}
        alt={alt}
      />
      <p className="centered">
        <button onClick={() => setImageState(!imageState)}>
          {imageState ? "Hide" : "Show"} picture
        </button>
      </p>
    </>
  )
}
