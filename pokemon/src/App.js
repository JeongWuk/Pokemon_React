import React, { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import "./App.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function App() {
  const [shouldRenderDelayedComponent, setShouldRenderDelayedComponent] =
    useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRenderDelayedComponent(true);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
      camera.position.y = 1.5;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      document.body.appendChild(renderer.domElement);

      const gltfLoader = new GLTFLoader();
      gltfLoader.load("Reshiram/scene.gltf", (gltfScene) => {
        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight1.position.set(1, 1, 1);
        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight2.position.set(-1, -1, -1);
        const pointLight = new THREE.PointLight(0xffffff, 50);
        pointLight.position.set(0, 0, 0);
        scene.add(pointLight);
        scene.add(directionalLight1);
        scene.add(directionalLight2);
        scene.add(gltfScene.scene);

        const animate = () => {
          gltfScene.scene.rotation.y += 0.001;
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        requestAnimationFrame(animate);

        window.addEventListener("resize", () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });
      });
    }, 12500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Welcome />
      {shouldRenderDelayedComponent && <Header />}
    </>
  );
}

export default App;
