
'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import styles from './style.module.css';

// 구름
function Cloud({
      position,
      scale = 1,
}: {
      position: [number, number, number];
      scale?: number;
}) {
      return (
            <Float speed={1} floatIntensity={0.2}>
                  <group position={position} scale={scale}>
                        {[
                              [0, 0, 0],
                              [0.2, 0.03, 0],
                              [-0.2, 0.02, 0],
                        ].map((pos, index) => (
                              <mesh
                                    key={index}
                                    position={pos as [number, number, number]}
                              >
                                    <icosahedronGeometry
                                          args={[index === 1 ? 0.25 : 0.22, 1]}
                                    />
                                    <meshStandardMaterial
                                          color="#ffffff"
                                          flatShading
                                    />
                              </mesh>
                        ))}
                  </group>
            </Float>
      );
}

// 나무
function Tree() {
      return (
            <group position={[0, 0.25, 0]}>
                  {/* 나무 줄기 */}
                  <mesh position={[0, 0.65, 0]}>
                        <cylinderGeometry args={[0.08, 0.13, 1.3, 5]} />
                        <meshStandardMaterial
                              color="#8b623b"
                              flatShading
                        />
                  </mesh>

                  {/* 왼쪽 가지 */}
                  <mesh
                        position={[-0.25, 0.9, 0]}
                        rotation={[0, 0, Math.PI / 4]}
                  >
                        <cylinderGeometry args={[0.045, 0.08, 0.75, 5]} />
                        <meshStandardMaterial
                              color="#8b623b"
                              flatShading
                        />
                  </mesh>

                  {/* 오른쪽 가지 */}
                  <mesh
                        position={[0.3, 1.05, 0]}
                        rotation={[0, 0, -Math.PI / 4]}
                  >
                        <cylinderGeometry args={[0.04, 0.07, 0.7, 5]} />
                        <meshStandardMaterial
                              color="#8b623b"
                              flatShading
                        />
                  </mesh>

                  {/* 나뭇잎 */}
                  {[
                        [-0.45, 1.35, 0],
                        [0.15, 1.65, 0],
                        [0.65, 1.35, 0],
                        [-0.05, 2.05, 0],
                        [0.45, 1.85, -0.1],
                  ].map((position, index) => (
                        <mesh
                              key={index}
                              position={position as [number, number, number]}
                        >
                              <icosahedronGeometry args={[0.55, 1]} />
                              <meshStandardMaterial
                                    color={
                                          index % 2 === 0
                                                ? '#70c83e'
                                                : '#83d84b'
                                    }
                                    flatShading
                              />
                        </mesh>
                  ))}
            </group>
      );
}

// 풀
function Grass() {
      const positions: [number, number, number][] = [
            [-1.0, 0.13, 0.4],
            [1.0, 0.13, 0.3],
            [-0.65, 0.13, -0.5],
            [0.9, 0.13, -0.6],
      ];

      return (
            <group>
                  {positions.map((position, index) => (
                        <group key={index} position={position}>
                              <mesh
                                    position={[0, 0.12, 0]}
                                    rotation={[0, 0, 0.2]}
                              >
                                    <coneGeometry args={[0.07, 0.25, 4]} />
                                    <meshStandardMaterial
                                          color="#91b85a"
                                          flatShading
                                    />
                              </mesh>

                              <mesh
                                    position={[0.1, 0.1, 0]}
                                    rotation={[0, 0, -0.3]}
                              >
                                    <coneGeometry args={[0.06, 0.2, 4]} />
                                    <meshStandardMaterial
                                          color="#6e9f4a"
                                          flatShading
                                    />
                              </mesh>
                        </group>
                  ))}
            </group>
      );
}

// 공중 섬
function Island() {
      const islandRef = useRef<THREE.Group>(null);

      useFrame((state, delta) => {
            if (!islandRef.current) return;

            const island = islandRef.current;

            // 위아래 부유 효과만 유지
            island.position.y =
                  Math.sin(state.clock.elapsedTime * 0.7) * 0.12;

            // 마우스 좌우 이동 -> 섬 좌우 회전
            const targetRotationY = state.pointer.x * 0.35;

            // 마우스 상하 이동 -> 섬 앞뒤 기울기
            const targetRotationX = -state.pointer.y * 0.22;

            // 부드럽게 마우스 방향 따라가기
            island.rotation.y = THREE.MathUtils.damp(
                  island.rotation.y,
                  targetRotationY,
                  4,
                  delta
            );

            island.rotation.x = THREE.MathUtils.damp(
                  island.rotation.x,
                  targetRotationX,
                  4,
                  delta
            );
      });

      return (
            <group ref={islandRef}>

                  {/* 섬 아래 바위 */}
                  <mesh position={[0, -0.65, 0]}>
                        <cylinderGeometry args={[1.5, 0.35, 1.3, 7, 2]} />
                        <meshStandardMaterial
                              color="#806044"
                              flatShading
                        />
                  </mesh>

                  {/* 섬 잔디 */}
                  <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[1.55, 1.55, 0.2, 9]} />
                        <meshStandardMaterial
                              color="#69a96c"
                              flatShading
                        />
                  </mesh>

                  <Tree />
                  <Grass />

            </group>
      );
}

// 메인 3D 장면
export default function FloatingIsland() {
      return (
            <div className={styles.islandContainer}>
                  <Canvas
                        camera={{
                              position: [0, 2.1, 9.5],
                              fov: 35,
                        }}
                        dpr={[1, 1.5]}
                        gl={{
                              alpha: true,
                              antialias: true,
                        }}
                        onCreated={({ camera }) => {
                              camera.lookAt(0, 0.4, 0);
                              camera.updateProjectionMatrix();
                        }}
                  >
                        <ambientLight intensity={1.5} />

                        <directionalLight
                              position={[4, 7, 5]}
                              intensity={2}
                        />

                        <Island />

                        {/* 구름 */}
                        <Cloud
                              position={[-2.2, 1.0, -0.5]}
                              scale={0.9}
                        />

                        <Cloud
                              position={[2.2, 0.8, -0.5]}
                              scale={0.8}
                        />

                        <Cloud
                              position={[0, 2.8, -1.5]}
                              scale={0.65}
                        />
                  </Canvas>
            </div>
      );
}
