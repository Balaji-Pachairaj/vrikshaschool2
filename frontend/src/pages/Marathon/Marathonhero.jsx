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
    // Increase renderer size to better fit the larger cube
    renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);
    cubeRef.current.appendChild(renderer.domElement);

    const createTextTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024; // Increased canvas size for higher resolution
      canvas.height = 1024;
      const context = canvas.getContext('2d');
      context.fillStyle = '#FFFFFF';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = 'bold 96px Arial'; // Increased font size
      context.fillStyle = '#000000';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      
      context.fillText('U', canvas.width / 2, 400);
      context.fillText('DIGITAL', canvas.width / 2, 512);
      context.fillText('STUDIO', canvas.width / 2, 624);
      
      return new THREE.CanvasTexture(canvas);
    };

    const materials = Array(6).fill(null).map(() => 
      new THREE.MeshStandardMaterial({ 
        map: createTextTexture(),
        side: THREE.DoubleSide
      })
    );

    // Increase the cube size
    const cube = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), materials);
    scene.add(cube);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 10); // Adjusted light position for larger cube
    scene.add(directionalLight);

    // Adjust camera position to fit the larger cube
    camera.position.z = 15;

    const sequences = [
      { rotationX: 0, rotationY: 0, duration: 2 },
      { rotationX: 0, rotationY: Math.PI / 2, duration: 2 },
      { rotationX: Math.PI / 4, rotationY: Math.PI / 4, duration: 2 }
    ];

    let currentSequence = 0;
    let sequenceTime = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      
      sequenceTime += 0.016;

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
      // Update renderer size on resize
      renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);
    };

    animate();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cubeRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Increased container height for better cube display */}
      <div className="w-full h-[500px] lg:h-[600px]" ref={cubeRef} aria-hidden="true"></div>
    </div>
  );
};

export default Hero;