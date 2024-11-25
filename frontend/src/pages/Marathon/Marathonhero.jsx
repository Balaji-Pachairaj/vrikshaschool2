import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

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

    const createTextTexture = (text) => {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 1024;

      const context = canvas.getContext("2d");
      context.fillStyle = "#FFFFFF";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.font = "bold 48px Arial"; // Reduced font size to fit text
      context.fillStyle = "#000000";
      context.textAlign = "center";
      context.textBaseline = "middle";

      const lines = text.split('\n');
      let yOffset = canvas.height / 2 - (lines.length * 48) / 2; // Center vertically

      lines.forEach(line => {
        context.fillText(line, canvas.width / 2, yOffset);
        yOffset += 48;
      });

      return new THREE.CanvasTexture(canvas);
    };

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide }),
    ];

    const cube = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 15), materials);
    scene.add(cube);

    const text = "Vriksha Marathon V.2025\nIs Back";
    const texture = createTextTexture(text);

    materials.forEach(material => {
      material.map = texture;
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    camera.position.z = 25;

    const sequences = [
      { rotationX: 0, rotationY: 0, duration: 4 },
      { rotationX: 0, rotationY: Math.PI / 2, duration: 4 },
      { rotationX: Math.PI / 4, rotationY: Math.PI / 4, duration: 4 },
    ];

    let currentSequence = 0;
    let sequenceTime = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      sequenceTime += 0.008;

      if (sequenceTime >= sequences[currentSequence].duration) {
        sequenceTime = 0;
        currentSequence = (currentSequence + 1) % sequences.length;
      }

      const current = sequences[currentSequence];
      const next = sequences[(currentSequence + 1) % sequences.length];
      const progress = sequenceTime / current.duration;

      cube.rotation.x = THREE.MathUtils.lerp(
        current.rotationX,
        next.rotationX,
        progress
      );
      cube.rotation.y = THREE.MathUtils.lerp(
        current.rotationY,
        next.rotationY,
        progress
      );

      renderer.render(scene, camera);
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    animate();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);

      if (cubeRef.current) {
        cubeRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-x-hidden">
      <div className="w-full h-full" ref={cubeRef} aria-hidden="true"></div>
    </div>
  );
};

export default Hero;
