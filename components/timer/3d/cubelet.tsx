import { CUBE_COLORS, CUBE_COLORS_3D } from '@/lib/cubes-constants'

interface CubeletProps {
    position: [number, number, number];
    geometry: any;
}


export const Cubelet = ({ position, geometry }: CubeletProps) => {

    return (
        <mesh
            position={position}
            geometry={
                geometry
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
