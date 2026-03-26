'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroBackground() {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x3b82f6, 1)
    pointLight1.position.set(10, 10, 20)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 1)
    pointLight2.position.set(-10, -10, 20)
    scene.add(pointLight2)

    // Particle field
    const particleCount = 500
    const particleGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100
      positions[i + 1] = (Math.random() - 0.5) * 100
      positions[i + 2] = (Math.random() - 0.5) * 100

      velocities[i] = (Math.random() - 0.5) * 0.3
      velocities[i + 1] = (Math.random() - 0.5) * 0.3
      velocities[i + 2] = (Math.random() - 0.5) * 0.3
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.3,
      color: 0x3b82f6,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Animated sphere
    const sphereGeometry = new THREE.IcosahedronGeometry(15, 4)
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.2,
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.z = -20
    scene.add(sphere)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Update particles
      const posArray = particleGeometry.attributes.position.array
      for (let i = 0; i < posArray.length; i += 3) {
        posArray[i] += velocities[i]
        posArray[i + 1] += velocities[i + 1]
        posArray[i + 2] += velocities[i + 2]

        if (posArray[i] > 50) posArray[i] = -50
        if (posArray[i] < -50) posArray[i] = 50

        if (posArray[i + 1] > 50) posArray[i + 1] = -50
        if (posArray[i + 1] < -50) posArray[i + 1] = 50

        if (posArray[i + 2] > 50) posArray[i + 2] = -50
        if (posArray[i + 2] < -50) posArray[i + 2] = 50
      }
      particleGeometry.attributes.position.needsUpdate = true

      particles.rotation.x += 0.0001
      particles.rotation.y += 0.0002

      sphere.rotation.x += 0.0002
      sphere.rotation.y += 0.0003

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      sphereGeometry.dispose()
      sphereMaterial.dispose()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 w-full h-full -z-10" />
}