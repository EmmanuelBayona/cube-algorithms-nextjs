"use client";
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stats } from '@react-three/drei'
import { Cube } from './cube'
import { Suspense } from 'react';
import { Card } from '@/components/ui/card';

export const Scene = () => {

    return (
        <Card
            className='w-96 h-96 mb-10'
        >
            <Canvas className='inset-0'
                camera={{ position: [3, 3, 3] }}
            >

                <Suspense>
                    <Environment preset='sunset' />
                </Suspense>

                <Cube />
                <OrbitControls target={[0, 0, 0]} />
                <Stats />

            </Canvas>
        </Card>
    )

}
