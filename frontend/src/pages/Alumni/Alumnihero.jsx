import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import png1 from "../../assets/alumni/15.png";
import png2 from "../../assets/alumni/16.png";
import png3 from "../../assets/alumni/17.png";
import png4 from "../../assets/alumni/18.png";
import png5 from "../../assets/alumni/19.png";

const Hero = () => {
  const cubeRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    if (cubeRef.current) {
      cubeRef.current.appendChild(renderer.domElement);
    }

    const loadTexture = (url) => {
      return new Promise((resolve, reject) => {
        new THREE.TextureLoader().load(url, resolve, undefined, reject);
      });
    };

    const createMaterials = async () => {
      const imageUrls = [
        png1,
        png2,
        png3,
        png4,
        png5,
        png1
      ];

      const textures = await Promise.all(imageUrls.map(loadTexture));

      return textures.map(texture => new THREE.MeshStandardMaterial({ 
        map: texture, 
        side: THREE.DoubleSide 
      }));
    };

    const setupScene = async () => {
      const materials = await createMaterials();
      const cube = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 15), materials);
      scene.add(cube);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(10, 10, 10);
      scene.add(directionalLight);

      camera.position.z = 25;

      const sequences = [
        { rotationX: 0, rotationY: Math.PI / 2 },    // Right
        { rotationX: -Math.PI / 2, rotationY: 0 },   // Top
        { rotationX: 0, rotationY: -Math.PI / 2 },   // Left
        { rotationX: Math.PI / 2, rotationY: 0 },    // Bottom
        { rotationX: 0, rotationY: Math.PI },        // Back
        { rotationX: 0, rotationY: 0 }              // Front
      ];

      let currentSequence = 0;
      let animationTime = 0;  
      const ROTATION_INTERVAL = 3; // 3 second total rotation cycle
      const ZOOM_IN_START = 0;
      const ZOOM_IN_DURATION = 0.5; // Faster initial zoom in
      const ZOOM_OUT_START = 0.5;
      const ZOOM_OUT_DURATION = 0.5; // Faster zoom out
      const ROTATION_START = 1; // Earlier rotation start
      const INITIAL_SCALE = 1;
      const ZOOMED_SCALE = 1.3;

      const animate = () => {
        requestAnimationFrame(animate);
        
        animationTime += 0.016; // Approximately 60fps

        if (animationTime >= ROTATION_INTERVAL) {
          animationTime = 0;
          currentSequence = (currentSequence + 1) % sequences.length;
        }

        // Zoom in effect
        if (animationTime >= ZOOM_IN_START && animationTime < ZOOM_IN_START + ZOOM_IN_DURATION) {
          const zoomProgress = (animationTime - ZOOM_IN_START) / ZOOM_IN_DURATION;
          const scale = THREE.MathUtils.lerp(INITIAL_SCALE, ZOOMED_SCALE, Math.min(zoomProgress, 1));
          cube.scale.set(scale, scale, scale);
        }
        // Zoom out effect
        else if (animationTime >= ZOOM_OUT_START && animationTime < ZOOM_OUT_START + ZOOM_OUT_DURATION) {
          const zoomProgress = (animationTime - ZOOM_OUT_START) / ZOOM_OUT_DURATION;
          const scale = THREE.MathUtils.lerp(ZOOMED_SCALE, INITIAL_SCALE, Math.min(zoomProgress, 1));
          cube.scale.set(scale, scale, scale);
        }

        // Calculate rotation progress after zoom out
        if (animationTime >= ROTATION_START && animationTime < ROTATION_START + (ROTATION_INTERVAL - ROTATION_START)) {
          const progress = (animationTime - ROTATION_START) / (ROTATION_INTERVAL - ROTATION_START);
          const prevSequence = (currentSequence - 1 + sequences.length) % sequences.length;
          
          // Smooth transition using lerp
          cube.rotation.x = THREE.MathUtils.lerp(
            sequences[prevSequence].rotationX,
            sequences[currentSequence].rotationX,
            progress
          );
          
          cube.rotation.y = THREE.MathUtils.lerp(
            sequences[prevSequence].rotationY,
            sequences[currentSequence].rotationY,
            progress
          );
        }

        renderer.render(scene, camera);
      };
      animate();
    };

    setupScene();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);

      if (cubeRef.current) {
        cubeRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-x-hidden relative">
      <div className="absolute w-full text-center z-0">
        <marquee className="text-white text-8xl font-bold" scrollamount="10">
          
          Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to the Alumni Network - Welcome Back to
        </marquee>
      </div>
      <div className="w-full h-full z-10 relative" ref={cubeRef} aria-hidden="true"></div>
    </div>
  );
};

export default Hero;