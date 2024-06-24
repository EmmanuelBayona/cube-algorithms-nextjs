import { Cubelet } from "./cubelet";

export const Cube = () => {

    return (
        <group>
            {
                Array.from(Array(3).keys()).map((x) =>
                    Array.from(Array(3).keys()).map((y) =>
                        Array.from(Array(3).keys()).map((z) =>
                            <Cubelet
                                position={[x - 1, y - 1, z - 1]}
                                key={x + y * 3 + z * 9} />
                        )
                    )
                )
            }
        </group>
    )

}
