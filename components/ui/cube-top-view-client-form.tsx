import { CUBES_FACES_3X3_TOP_VIEW, CUBE_COLORS } from "@/lib/cubes-constants";
import { cn } from "@/lib/utils";

interface CubeSvgProps {
    size?: number;
    background?: string;
    className?: string;
    colors: Record<number, keyof typeof CUBE_COLORS>;
    onClickFace: (face: number) => void;
}

export const CubeTopViewClientForm = ({
    size = 150,
    background = "#232323",
    className,
    colors = {},
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
                        className={
                            "cursor-pointer"
                        }
                        onClick={
                            () => onClickFace(i + 1)
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
                        className={
                            "cursor-pointer"
                        }
                        onClick={
                            () => onClickFace(i + 10)
                        }
                    />
                ))}
            </g>
        </svg>
    );
}
