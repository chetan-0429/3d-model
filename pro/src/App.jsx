// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// // import React, { Suspense, useEffect, useState } from "react";
// // import { Canvas } from "@react-three/fiber";
// // import { OrbitControls, useGLTF } from "@react-three/drei";
// // import axios from "axios";

// // const ModelViewer = ({ modelUrl }) => {
// //   const { scene } = useGLTF(modelUrl);
// //   return <primitive object={scene} scale={1} />;
// // };

// // const App = () => {
// //   const [models, setModels] = useState([]);
// //   const [search, setSearch] = useState("");

// //   useEffect(() => {
// //     axios.get("http://localhost:3000/models").then((res) => {
// //       setModels(res.data);
// //     });
// //   }, []);

// //   return (
// //     <div className="flex flex-col items-center p-4">
// //       <input
// //         type="text"
// //         placeholder="Search models..."
// //         className="border p-2 rounded-md mb-4"
// //         onChange={(e) => setSearch(e.target.value)}
// //       />
// //       <div className="grid grid-cols-3 gap-4">
// //         {models
// //           .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
// //           .map((model) => (
// //             <div key={model.id} className="border p-4">
// //               <h3>{model.name}</h3>
// //               <Canvas style={{ width: "200px", height: "200px" }}>
// //                 <Suspense fallback={null}>
// //                   <ModelViewer modelUrl={model.url} />
// //                   <OrbitControls />
// //                 </Suspense>
// //               </Canvas>
// //             </div>
// //           ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// // src/Scene.js
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useRef } from "react";

// function ImageIn3D() {
//   const imageRef = useRef();
//   const textureUrl = "https://in.images.search.yahoo.com/images/view;_ylt=Awr1QhVNosZnyzAC1yG9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzJkZGY1ZWMxZTVlZjhiYWEyYzQ5Yjc0ZjQ1ZGQyZTJiBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dnike%2Bshoes%2Bimage%26type%3DE210IN826G91843%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=3840&h=2160&imgurl=www.hdwallpapers.in%2Fdownload%2Fred_nike_shoe_in_black_background_4k_hd_nike-HD.jpg&rurl=https%3A%2F%2Fwww.hdwallpapers.in%2Fred_nike_shoe_in_black_background_4k_hd_nike-wallpapers.html&size=306KB&p=nike+shoes+image&oid=2ddf5ec1e5ef8baa2c49b74f45dd2e2b&fr2=piv-web&fr=mcafee&tt=Red+Nike+Shoe+In+Black+Background+4K+HD+Nike+Wallpapers+%7C+HD+Wallpapers+...&b=0&ni=21&no=1&ts=&tab=organic&sigr=rEkWuHKJHDWQ&sigb=15N9Iqrwyvao&sigi=ubTUa4kkUxW7&sigt=eZi7Ug2ulcqW&.crumb=s4UDc3kIScT&fr=mcafee&fr2=piv-web&type=E210IN826G91843"; // replace with your image URL

//   return (
//     <mesh ref={imageRef} position={[0, 0, 0]}>
//       <planeGeometry args={[5, 5]} /> {/* Adjust size of the image */}
//       <meshStandardMaterial map={new THREE.TextureLoader().load(textureUrl)} />
//     </mesh>
//   );
// }

// export default function Scene() {
//   return (
//     <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <ImageIn3D />
//       <OrbitControls />
//     </Canvas>
//   );
// }
// src/App.js
import React from 'react';
import Scene from './Scene';

function App() {
  return (
    <>
    <div style={{ height: "100vh" }}>
    {/* <img src="https://in.images.search.yahoo.com/images/view;_ylt=Awr1QhVNosZnyzAC1yG9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzJkZGY1ZWMxZTVlZjhiYWEyYzQ5Yjc0ZjQ1ZGQyZTJiBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dnike%2Bshoes%2Bimage%26type%3DE210IN826G91843%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=3840&h=2160&imgurl=www.hdwallpapers.in%2Fdownload%2Fred_nike_shoe_in_black_background_4k_hd_nike-HD.jpg&rurl=https%3A%2F%2Fwww.hdwallpapers.in%2Fred_nike_shoe_in_black_background_4k_hd_nike-wallpapers.html&size=306KB&p=nike+shoes+image&oid=2ddf5ec1e5ef8baa2c49b74f45dd2e2b&fr2=piv-web&fr=mcafee&tt=Red+Nike+Shoe+In+Black+Background+4K+HD+Nike+Wallpapers+%7C+HD+Wallpapers+...&b=0&ni=21&no=1&ts=&tab=organic&sigr=rEkWuHKJHDWQ&sigb=15N9Iqrwyvao&sigi=ubTUa4kkUxW7&sigt=eZi7Ug2ulcqW&.crumb=s4UDc3kIScT&fr=mcafee&fr2=piv-web&type=E210IN826G91843" /> */}
    3-d model:
      <Scene />
<img src="https://tse1.mm.bing.net/th?id=OIP.7UaM0_ayvUPsbV5vAiqjuwHaEK&pid=Api&P=0&h=180" />
    </div>
    </>
  );
}

export default App;
