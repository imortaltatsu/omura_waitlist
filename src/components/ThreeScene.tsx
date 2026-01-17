import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Environment, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { type Mesh, MathUtils } from 'three';

function Blob() {
    const meshRef = useRef<Mesh>(null);
    const { viewport } = useThree();

    // Responsive scale: smaller on mobile devices (narrow viewports)
    // viewport.width is in 3D units at z=0
    const isMobile = viewport.width < 6;
    const scale = isMobile ? 1.4 : 2.2;

    useFrame((state) => {
        if (meshRef.current) {
            // Smoothly interpolate rotation based on mouse position
            // state.mouse.x/y are normalized coordinates (-1 to 1)
            const targetRotationX = (state.mouse.y * 0.5) + (state.clock.getElapsedTime() * 0.1);
            const targetRotationY = (state.mouse.x * 0.5) + (state.clock.getElapsedTime() * 0.15);

            meshRef.current.rotation.x = MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.1);
            meshRef.current.rotation.y = MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);
        }
    });

    return (
        <Sphere args={[1, 128, 128]} scale={scale} ref={meshRef}>
            <MeshDistortMaterial
                color="#151515"
                attach="material"
                distort={0.6}
                speed={0.5}
                roughness={0.1}
                metalness={1}
                envMapIntensity={1.5}
                clearcoat={1}
                clearcoatRoughness={0.1}
            />
        </Sphere>
    );
}

export function ThreeScene() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, #111 0%, #000 100%)' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Blob />
                <Environment preset="night" />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
