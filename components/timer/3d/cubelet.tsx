import { CUBE_COLORS, CUBE_COLORS_3D } from '@/lib/cubes-constants'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry'

interface CubeletProps {
    position: [number, number, number]
}


export const Cubelet = ({ position }: CubeletProps) => {

    return (
        <mesh
            position={position}
            geometry={
                new RoundedBoxGeometry(1, 1, 1, 3, 0.1)
            }
        >
            {
                Array.from(Array(6).keys()).map((face) => (
                    <meshStandardMaterial attach={`material-${face}`} key={face}
                        color={
                            position[CUBE_COLORS_3D[face][0]] === CUBE_COLORS_3D[face][1]
                                ? CUBE_COLORS_3D[face][2]
                                : CUBE_COLORS.default
                        }
                    />
                ))
            }
        </mesh>
    )

}
