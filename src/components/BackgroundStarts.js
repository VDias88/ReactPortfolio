import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import {OrbitControls, Stars} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

function BackgroundStarts(props) {

    return (
      <Canvas>
      <Stars/>
      <OrbitControls />
      {/* <ambientLight intensity={0.2}/> */}
      {/* <spotLight position={[10,15,10]} angle={0.3}/> */}
   </Canvas>
    )
}
export default BackgroundStarts