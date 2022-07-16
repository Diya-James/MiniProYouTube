import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function Particle(){
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
    return (
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        {
            "fullScreen": {
                "enable": true,
                "zIndex": 1
            },
            "fpsLimit": 100,
            "particles": {
                "number": {
                    "value": 10,
                    
                },
                "color": {
                    "value": ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.1
                    
                },
                "size": {
                    "value": 300,
                    "random": {
                        "enable": true,
                        "minimumValue": 200
                    }
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "top",
                    "random": false,
                    "straight": false,
                    "outModes": {
                        "default": "out"
                    }
                }
            },
            "detectRetina": true,
            
        }
      }
    />
    )
}
export default Particle