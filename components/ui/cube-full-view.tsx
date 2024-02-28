import { CUBE_COLORS, CUBE_FACES_3X3 } from "@/lib/cubes-constants";
import { cn } from "@/lib/utils";

interface CubeSvgProps {
    size?: number;
    background?: string;
    className?: string;
    colors?: Record<number, keyof typeof CUBE_COLORS>;
    clickableFaces?: boolean;
    onClickFace?: (face: number) => void;
}

export const CubeFullView = ({
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
                    strokeWidth: 0.1,
                    strokeLinejoin: "round",
                    opacity: 1,
                }}
            >
                <polygon
                    fill={`${CUBE_COLORS.black}`}
                    stroke="#000000"
                    points="-4.9165444344952E-17,-0.71734170954349 0.70405037145575,-0.41272706360467 6.3108540577985E-17,-0.021725090572532 -0.70405037145575,-0.41272706360467"
                />
                <polygon
                    fill={`${CUBE_COLORS.black}`}
                    stroke="#000000"
                    points="6.3108540577985E-17,-0.021725090572532 0.70405037145575,-0.41272706360467 0.62948028357061,0.36901272915735 5.5589468959362E-17,0.81107056444244"
                />
                <polygon
                    fill={`${CUBE_COLORS.black}`}
                    stroke="#000000"
                    points="-0.70405037145575,-0.41272706360467 6.3108540577985E-17,-0.021725090572532 5.5589468959362E-17,0.81107056444244 -0.62948028357061,0.36901272915735"
                />
            </g>
            <g
                style={{
                    opacity: 1,
                    strokeOpacity: 0.5,
                    strokeWidth: 0,
                    strokeLinejoin: "round",
                }}
            >
                {CUBE_FACES_3X3.map((face, i) => (
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
        </svg>
    );
};
