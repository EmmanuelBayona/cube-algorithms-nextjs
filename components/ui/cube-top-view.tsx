import { CUBES_FACES_3X3_TOP_VIEW, CUBE_COLORS } from "@/lib/cubes-constants";
import { cn } from "@/lib/utils";

interface CubeSvgProps {
    size?: number;
    background?: string;
    className?: string;
    colors?: Record<number, keyof typeof CUBE_COLORS>;
    clickableFaces?: boolean;
    onClickFace?: (face: number) => void;
}

/**
 * Cube top view SVG, the cube is represented as a 3x3 square with the top face in the middle and the other faces around it.
 * To assign colors to the faces, use the `colors` prop`, the key is a number that represents the face and the value is the color.
 *
 * If you want to make the faces clickable, use the `clickableFaces` prop and the `onClickFace` prop to handle the click event.
 * The use of `clickableFaces` will add the `cursor-pointer` class to the faces, but is also needed for RSC. RSC cannot
 * have a `onClick` so if the `clickableFaces` is `true` the `onClick` will be added to the faces if not it will be `undefined`,
 * so it can be used as a RSC.
 */
export const CubeTopView = ({
    size = 150,
    background = "#232323",
    className,
    colors = {},
    clickableFaces = false,
    onClickFace,
}: CubeSvgProps) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={`${size}`}
            height={`${size}`}
            viewBox="-0.9 -0.9 1.8 1.8"
            className={cn(className)}
        >
            <rect
                fill={`${background}`}
                x="-0.9"
                y="-0.9"
                width="1.8"
                height="1.8"
            />
            <g
                style={{
                    opacity: 1,
                    strokeOpacity: 1,
                    strokeWidth: 0.02,
                    strokeLinejoin: "round",
                }}
            >
                <polygon
                    fill={CUBE_COLORS.black}
                    stroke={CUBE_COLORS.black}
                    points="-0.52222222222222,-0.52222222222222 0.52222222222222,-0.52222222222222 0.52222222222222,0.52222222222222 -0.52222222222222,0.52222222222222"
                />
            </g>
            <g
                style={{
                    opacity: 1,
                    strokeOpacity: 1,
                    strokeWidth: 0.02,
                    strokeLinejoin: "round",
                }}
            >
                {CUBES_FACES_3X3_TOP_VIEW.INNTER.map((face, i) => (
                    <polygon
                        key={i}
                        fill={
                            colors?.[i + 1]
                                ? CUBE_COLORS[colors[i + 1]]
                                : face.fill
                        }
                        stroke={face.stroke}
                        points={face.points}
                        className={cn({
                            "cursor-pointer": clickableFaces,
                        })}
                        // use onclick just if clickableFaces is true
                        onClick={
                            clickableFaces
                                ? () => onClickFace?.(i + 1)
                                : undefined
                        }
                    />
                ))}
            </g>
            <g
                style={{
                    opacity: 1,
                    strokeOpacity: 1,
                    strokeWidth: 0.02,
                    strokeLinejoin: "round",
                }}
            >
                {CUBES_FACES_3X3_TOP_VIEW.OUTER.map((face, i) => (
                    <polygon
                        key={i}
                        fill={
                            colors?.[i + 10]
                                ? CUBE_COLORS[colors[i + 10]]
                                : face.fill
                        }
                        stroke={face.stroke}
                        points={face.points}
                        className={cn({
                            "cursor-pointer": clickableFaces,
                        })}
                        // use onclick just if clickableFaces is true
                        onClick={
                            clickableFaces
                                ? () => onClickFace?.(i + 10)
                                : undefined
                        }
                    />
                ))}
            </g>
        </svg>
    );
};
