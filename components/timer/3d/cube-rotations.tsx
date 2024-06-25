import { useTimerContext } from "@/context/timer-context";
import { useEffect, useRef } from "react";

function resetCubeGroup(cubeGroup, rotationGroup) {
    rotationGroup?.children
        .slice()
        .reverse()
        .forEach(function(c) {
            cubeGroup.attach(c)
        })
    rotationGroup.quaternion.set(0, 0, 0, 1)
}

function attachToRotationGroup(cubeGroup, rotationGroup, axis, limit) {
    cubeGroup?.children
        .slice()
        .reverse()
        .filter(function(c) {
            return limit < 0 ? c.position[axis] < limit : c.position[axis] > limit
        })
        .forEach(function(c) {
            rotationGroup.attach(c)
        })
}

// function animateRotationGroup(rotationGroup, axis, multiplier) {
//     new TWEEN.Tween(rotationGroup.rotation)
//         .to(
//             {
//                 [axis]: rotationGroup.rotation[axis] + (Math.PI / 2) * multiplier
//             },
//             250
//         )
//         .easing(TWEEN.Easing.Cubic.InOut)
//         .start()
// }

function rotate(cubeGroup, rotationGroup, axis, limit, multiplier) {
    // if (!TWEEN.getAll().length) {
    resetCubeGroup(cubeGroup, rotationGroup)
    attachToRotationGroup(cubeGroup, rotationGroup, axis, limit)
    // animateRotationGroup(rotationGroup, axis, multiplier)
    // }
}

interface CubeRotationProps {
    cubeGroup: any;
}

export const CubeRotations = ({ cubeGroup }: CubeRotationProps) => {

    const rotationGroup = useRef();
    const { scramble } = useTimerContext();

    useEffect(() => {
        if (!scramble) return;
        scramble.split(' ').forEach(move => {
            switch (move) {
                case 'L':
                    rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, 1);
                    break;
                case 'L2':
                    rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, 1);
                    rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, 1);
                    break;
                case 'L\'':
                    rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, -1);
                    break;
                case 'R':
                    rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, -1);
                    break;
                case 'R2':
                    rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, -1);
                    rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, -1);
                    break;
                case 'R\'':
                    rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, 1);
                    break;
                case 'U':
                    rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, -1);
                    break;
                case 'U2':
                    rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, -1);
                    rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, -1);
                    break;
                case 'U\'':
                    rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, 1);
                    break;
                case 'D':
                    rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, 1);
                    break;
                case 'D2':
                    rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, 1);
                    rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, 1);
                    break;
                case 'D\'':
                    rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, -1);
                    break;
                case 'F':
                    rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, -1);
                    break;
                case 'F2':
                    rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, -1);
                    rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, -1);
                    break;
                case 'F\'':
                    rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, 1);
                    break;
                case 'B':
                    rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, 1);
                    break;
                case 'B2':
                    rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, 1);
                    rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, 1);
                    break;
                case 'B\'':
                    rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, -1);
                    break;
                default:
                    break;
            }
        })
    }, [scramble, cubeGroup])

    return (
        <group ref={rotationGroup} />
    )
}
