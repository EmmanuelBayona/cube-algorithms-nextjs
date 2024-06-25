import { useMemo, useRef } from "react";
import { Cubelet } from "./cubelet";
import { CubeRotations } from "./cube-rotations";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry";

export const Cube = () => {

    const ref = useRef();

    const roundedBoxGeometry = useMemo(() => {
        return new RoundedBoxGeometry(1, 1, 1, 3, 0.1)
    }, [])

    return (
        <>
            <group>
                {
                    Array.from(Array(3).keys()).map((x) =>
                        Array.from(Array(3).keys()).map((y) =>
                            Array.from(Array(3).keys()).map((z) =>
                                <Cubelet
                                    key={x + y * 3 + z * 9}
                                    position={[x - 1, y - 1, z - 1]}
                                    geometry={roundedBoxGeometry}
                                />
                            )
                        )
                    )
                }
            </group>
            <CubeRotations cubeGroup={ref} />
        </>
    )

}
