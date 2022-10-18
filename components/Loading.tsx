import Image from 'next/image'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div
    style={{
      width: "100%",
      textAlign: "center",
      height: "100vh",
      backgroundColor: "#F7F7F9",
      backgroundImage:"url(https://i.pinimg.com/originals/8a/4a/72/8a4a7213b43f4ec4f99db406be655f9e.gif)",
      backgroundPosition:"top",
      backgroundSize:"contain",
      backgroundRepeat:"no-repeat"
    }}
  />
  )
}

export default Loading