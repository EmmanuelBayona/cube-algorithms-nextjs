type Face = string[][];

interface CubeFaces {
    cube_white_face?: Face;
    cube_green_face?: Face;
    cube_red_face?: Face;
    cube_blue_face?: Face;
    cube_yellow_face?: Face;
    cube_orange_face?: Face;
}

const rotateFaceClockwise = (face: Face): Face => {
    const newFace: Face = [
        [face[2][0], face[1][0], face[0][0]],
        [face[2][1], face[1][1], face[0][1]],
        [face[2][2], face[1][2], face[0][2]]
    ];
    return newFace;
}

const rotateFaceCounterClockwise = (face: Face): Face => {
    const newFace: Face = [
        [face[0][2], face[1][2], face[2][2]],
        [face[0][1], face[1][1], face[2][1]],
        [face[0][0], face[1][0], face[2][0]]
    ];
    return newFace;
}

const R_move = ({
    cube_white_face,
    cube_green_face,
    cube_red_face,
    cube_blue_face,
    cube_yellow_face
}: CubeFaces) => {

    if (!cube_green_face || !cube_red_face || !cube_blue_face || !cube_yellow_face || !cube_white_face) {
        return;
    }

    const temp = [cube_green_face[0][2], cube_green_face[1][2], cube_green_face[2][2]];

    [cube_green_face[0][2], cube_green_face[1][2], cube_green_face[2][2]] =
        [cube_yellow_face[0][2], cube_yellow_face[1][2], cube_yellow_face[2][2]];

    [cube_yellow_face[0][2], cube_yellow_face[1][2], cube_yellow_face[2][2]] =
        [cube_blue_face[2][0], cube_blue_face[1][0], cube_blue_face[0][0]];

    [cube_blue_face[0][0], cube_blue_face[1][0], cube_blue_face[2][0]] =
        [cube_white_face[2][2], cube_white_face[1][2], cube_white_face[0][2]];

    [cube_white_face[0][2], cube_white_face[1][2], cube_white_face[2][2]] = temp;

    const newRedFace = rotateFaceClockwise(cube_red_face);
    cube_red_face[0] = newRedFace[0];
    cube_red_face[1] = newRedFace[1];
    cube_red_face[2] = newRedFace[2];
}

const R_move_prime = ({
    cube_white_face,
    cube_green_face,
    cube_red_face,
    cube_blue_face,
    cube_yellow_face
}: CubeFaces) => {

    if (!cube_green_face || !cube_red_face || !cube_blue_face || !cube_yellow_face || !cube_white_face) {
        return;
    }

    const temp = [cube_green_face[0][2], cube_green_face[1][2], cube_green_face[2][2]];

    [cube_green_face[0][2], cube_green_face[1][2], cube_green_face[2][2]] =
        [cube_white_face[0][2], cube_white_face[1][2], cube_white_face[2][2]];

    [cube_white_face[0][2], cube_white_face[1][2], cube_white_face[2][2]] =
        [cube_blue_face[2][0], cube_blue_face[1][0], cube_blue_face[0][0]];

    [cube_blue_face[0][0], cube_blue_face[1][0], cube_blue_face[2][0]] =
        [cube_yellow_face[2][2], cube_yellow_face[1][2], cube_yellow_face[0][2]];

    [cube_yellow_face[0][2], cube_yellow_face[1][2], cube_yellow_face[2][2]] = temp;

    const newRedFace = rotateFaceCounterClockwise(cube_red_face);
    cube_red_face[0] = newRedFace[0];
    cube_red_face[1] = newRedFace[1];
    cube_red_face[2] = newRedFace[2];
}

const L_move = ({
    cube_green_face,
    cube_white_face,
    cube_yellow_face,
    cube_blue_face,
    cube_orange_face
}: CubeFaces) => {

    if (!cube_green_face || !cube_orange_face || !cube_blue_face || !cube_yellow_face || !cube_white_face) {
        return;
    }

    const temp = [cube_green_face[0][0], cube_green_face[1][0], cube_green_face[2][0]];

    [cube_green_face[0][0], cube_green_face[1][0], cube_green_face[2][0]] =
        [cube_white_face[0][0], cube_white_face[1][0], cube_white_face[2][0]];

    [cube_white_face[0][0], cube_white_face[1][0], cube_white_face[2][0]] =
        [cube_blue_face[2][2], cube_blue_face[1][2], cube_blue_face[0][2]];

    [cube_blue_face[0][2], cube_blue_face[1][2], cube_blue_face[2][2]] =
        [cube_yellow_face[2][0], cube_yellow_face[1][0], cube_yellow_face[0][0]];

    [cube_yellow_face[0][0], cube_yellow_face[1][0], cube_yellow_face[2][0]] = temp;

    const newOrangeFace = rotateFaceClockwise(cube_orange_face);
    cube_orange_face[0] = newOrangeFace[0];
    cube_orange_face[1] = newOrangeFace[1];
    cube_orange_face[2] = newOrangeFace[2];

}

const L_move_prime = ({
    cube_green_face,
    cube_white_face,
    cube_yellow_face,
    cube_blue_face,
    cube_orange_face
}: CubeFaces) => {

    if (!cube_green_face || !cube_orange_face || !cube_blue_face || !cube_yellow_face || !cube_white_face) {
        return;
    }

    const temp = [cube_green_face[0][0], cube_green_face[1][0], cube_green_face[2][0]];

    [cube_green_face[0][0], cube_green_face[1][0], cube_green_face[2][0]] =
        [cube_yellow_face[0][0], cube_yellow_face[1][0], cube_yellow_face[2][0]];

    [cube_yellow_face[0][0], cube_yellow_face[1][0], cube_yellow_face[2][0]] =
        [cube_blue_face[2][2], cube_blue_face[1][2], cube_blue_face[0][2]];

    [cube_blue_face[0][2], cube_blue_face[1][2], cube_blue_face[2][2]] =
        [cube_white_face[2][0], cube_white_face[1][0], cube_white_face[0][0]];

    [cube_white_face[0][0], cube_white_face[1][0], cube_white_face[2][0]] = temp;

    const newOrangeFace = rotateFaceCounterClockwise(cube_orange_face);
    cube_orange_face[0] = newOrangeFace[0];
    cube_orange_face[1] = newOrangeFace[1];
    cube_orange_face[2] = newOrangeFace[2];

}

const U_move = ({
    cube_white_face,
    cube_orange_face,
    cube_green_face,
    cube_red_face,
    cube_blue_face
}: CubeFaces) => {

    if (!cube_white_face || !cube_orange_face || !cube_green_face || !cube_red_face || !cube_blue_face) {
        return;
    }

    const temp = [cube_green_face[0][0], cube_green_face[0][1], cube_green_face[0][2]];

    cube_green_face[0] = cube_red_face[0];
    cube_red_face[0] = cube_blue_face[0];
    cube_blue_face[0] = cube_orange_face[0];
    cube_orange_face[0] = temp;

    const newWhiteFace = rotateFaceClockwise(cube_white_face);
    cube_white_face[0] = newWhiteFace[0];
    cube_white_face[1] = newWhiteFace[1];
    cube_white_face[2] = newWhiteFace[2];

};

const U_move_prime = ({
    cube_white_face,
    cube_orange_face,
    cube_green_face,
    cube_red_face,
    cube_blue_face
}: CubeFaces) => {

    if (!cube_white_face || !cube_orange_face || !cube_green_face || !cube_red_face || !cube_blue_face) {
        return;
    }

    const temp = [cube_green_face[0][0], cube_green_face[0][1], cube_green_face[0][2]];

    cube_green_face[0] = cube_orange_face[0];
    cube_orange_face[0] = cube_blue_face[0];
    cube_blue_face[0] = cube_red_face[0];
    cube_red_face[0] = temp;

    const newWhiteFace = rotateFaceCounterClockwise(cube_white_face);
    cube_white_face[0] = newWhiteFace[0];
    cube_white_face[1] = newWhiteFace[1];
    cube_white_face[2] = newWhiteFace[2];

}

const F_move = ({
    cube_white_face,
    cube_orange_face,
    cube_yellow_face,
    cube_red_face,
    cube_green_face
}: CubeFaces) => {

    if (!cube_white_face || !cube_orange_face || !cube_yellow_face || !cube_red_face || !cube_green_face) {
        return;
    }

    const temp = [cube_white_face[2][0], cube_white_face[2][1], cube_white_face[2][2]];

    [cube_white_face[2][0], cube_white_face[2][1], cube_white_face[2][2]] =
        [cube_orange_face[2][2], cube_orange_face[1][2], cube_orange_face[0][2]];

    [cube_orange_face[0][2], cube_orange_face[1][2], cube_orange_face[2][2]] =
        [cube_yellow_face[0][0], cube_yellow_face[0][1], cube_yellow_face[0][2]];

    [cube_yellow_face[0][0], cube_yellow_face[0][1], cube_yellow_face[0][2]] =
        [cube_red_face[2][0], cube_red_face[1][0], cube_red_face[0][0]];

    [cube_red_face[0][0], cube_red_face[1][0], cube_red_face[2][0]] = temp;

    const newGreenFace = rotateFaceClockwise(cube_green_face);
    cube_green_face[0] = newGreenFace[0];
    cube_green_face[1] = newGreenFace[1];
    cube_green_face[2] = newGreenFace[2];

}

const F_move_prime = ({
    cube_white_face,
    cube_orange_face,
    cube_yellow_face,
    cube_red_face,
    cube_green_face

}: CubeFaces) => {

    if (!cube_white_face || !cube_orange_face || !cube_yellow_face || !cube_red_face || !cube_green_face) {
        return;
    }

    const temp = [cube_white_face[2][0], cube_white_face[2][1], cube_white_face[2][2]];

    [cube_white_face[2][0], cube_white_face[2][1], cube_white_face[2][2]] =
        [cube_red_face[0][0], cube_red_face[1][0], cube_red_face[2][0]];

    [cube_red_face[0][0], cube_red_face[1][0], cube_red_face[2][0]] =
        [cube_yellow_face[0][2], cube_yellow_face[0][1], cube_yellow_face[0][0]];

    [cube_yellow_face[0][0], cube_yellow_face[0][1], cube_yellow_face[0][2]] =
        [cube_orange_face[0][2], cube_orange_face[1][2], cube_orange_face[2][2]];

    [cube_orange_face[2][2], cube_orange_face[1][2], cube_orange_face[0][2]] = temp;

    const newGreenFace = rotateFaceCounterClockwise(cube_green_face);
    cube_green_face[0] = newGreenFace[0];
    cube_green_face[1] = newGreenFace[1];
    cube_green_face[2] = newGreenFace[2];

}

const D_move = ({
    cube_yellow_face,
    cube_orange_face,
    cube_green_face,
    cube_red_face,
    cube_blue_face
}: CubeFaces) => {

    if (!cube_yellow_face || !cube_orange_face || !cube_green_face || !cube_red_face || !cube_blue_face) {
        return;
    }

    const temp = [cube_green_face[2][0], cube_green_face[2][1], cube_green_face[2][2]];

    cube_green_face[2] = cube_orange_face[2];
    cube_orange_face[2] = cube_blue_face[2];
    cube_blue_face[2] = cube_red_face[2];
    cube_red_face[2] = temp;

    const newYellowFace = rotateFaceClockwise(cube_yellow_face);
    cube_yellow_face[0] = newYellowFace[0];
    cube_yellow_face[1] = newYellowFace[1];
    cube_yellow_face[2] = newYellowFace[2];

}

const D_move_prime = ({
    cube_yellow_face,
    cube_orange_face,
    cube_green_face,
    cube_red_face,
    cube_blue_face
}: CubeFaces) => {

    if (!cube_yellow_face || !cube_orange_face || !cube_green_face || !cube_red_face || !cube_blue_face) {
        return;
    }

    const temp = [cube_green_face[2][0], cube_green_face[2][1], cube_green_face[2][2]];

    cube_green_face[2] = cube_red_face[2];
    cube_red_face[2] = cube_blue_face[2];
    cube_blue_face[2] = cube_orange_face[2];
    cube_orange_face[2] = temp;

    const newYellowFace = rotateFaceCounterClockwise(cube_yellow_face);
    cube_yellow_face[0] = newYellowFace[0];
    cube_yellow_face[1] = newYellowFace[1];
    cube_yellow_face[2] = newYellowFace[2];

}

const B_move = ({
    cube_white_face,
    cube_red_face,
    cube_yellow_face,
    cube_orange_face,
    cube_blue_face,
}: CubeFaces) => {

    if (!cube_white_face || !cube_orange_face || !cube_yellow_face || !cube_red_face || !cube_blue_face) {
        return;
    }

    const temp = [cube_white_face[0][0], cube_white_face[0][1], cube_white_face[0][2]];

    cube_white_face[0] = [cube_red_face[0][2], cube_red_face[1][2], cube_red_face[2][2]];

    [cube_red_face[0][2], cube_red_face[1][2], cube_red_face[2][2]] = 
        [cube_yellow_face[2][2], cube_yellow_face[2][1], cube_yellow_face[2][0]];

    [cube_yellow_face[2][2], cube_yellow_face[2][1], cube_yellow_face[2][0]] = 
        [cube_orange_face[2][0], cube_orange_face[1][0], cube_orange_face[0][0]];

    [cube_orange_face[2][0], cube_orange_face[1][0], cube_orange_face[0][0]] = temp;

    const newBlueFace = rotateFaceClockwise(cube_blue_face);
    cube_blue_face[0] = newBlueFace[0];
    cube_blue_face[1] = newBlueFace[1];
    cube_blue_face[2] = newBlueFace[2];

}

const B_move_prime = ({
    cube_white_face,
    cube_red_face,
    cube_yellow_face,
    cube_orange_face,
    cube_blue_face
}: CubeFaces) => {

    if (!cube_white_face || !cube_orange_face || !cube_yellow_face || !cube_red_face || !cube_blue_face) {
        return;
    }

    const temp = [cube_white_face[0][0], cube_white_face[0][1], cube_white_face[0][2]];

    cube_white_face[0] = [cube_orange_face[2][0], cube_orange_face[1][0], cube_orange_face[0][0]];

    [cube_orange_face[0][0], cube_orange_face[1][0], cube_orange_face[2][0]] =
        [cube_yellow_face[2][0], cube_yellow_face[2][1], cube_yellow_face[2][2]];

    [cube_yellow_face[2][0], cube_yellow_face[2][1], cube_yellow_face[2][2]] =
        [cube_red_face[2][2], cube_red_face[1][2], cube_red_face[0][2]];

    [cube_red_face[0][2], cube_red_face[1][2], cube_red_face[2][2]] = temp;

    const newBlueFace = rotateFaceCounterClockwise(cube_blue_face);
    cube_blue_face[0] = newBlueFace[0];
    cube_blue_face[1] = newBlueFace[1];
    cube_blue_face[2] = newBlueFace[2];

}

export const drawScramble = (scramble: string) => {

    let cube_white_face: Face = [
        ['W1', 'W2', 'W3'],
        ['W4', 'W5', 'W6'],
        ['W7', 'W8', 'W9']
    ]

    let cube_orange_face: Face = [
        ['O1', 'O2', 'O3'],
        ['O4', 'O5', 'O6'],
        ['O7', 'O8', 'O9']
    ]

    let cube_green_face: Face = [
        ['G1', 'G2', 'G3'],
        ['G4', 'G5', 'G6'],
        ['G7', 'G8', 'G9']
    ]

    let cube_red_face: Face = [
        ['R1', 'R2', 'R3'],
        ['R4', 'R5', 'R6'],
        ['R7', 'R8', 'R9']
    ]

    let cube_blue_face: Face = [
        ['B1', 'B2', 'B3'],
        ['B4', 'B5', 'B6'],
        ['B7', 'B8', 'B9']
    ]

    let cube_yellow_face: Face = [
        ['Y1', 'Y2', 'Y3'],
        ['Y4', 'Y5', 'Y6'],
        ['Y7', 'Y8', 'Y9']
    ]

    scramble.split(' ').forEach(move => {
        switch (move) {
            case "R":
                R_move({ cube_green_face, cube_white_face, cube_yellow_face, cube_blue_face, cube_red_face });
                break;
            case "R'":
                R_move_prime({ cube_green_face, cube_white_face, cube_yellow_face, cube_blue_face, cube_red_face });
                break;
            case "R2":
                R_move({ cube_green_face, cube_white_face, cube_yellow_face, cube_blue_face, cube_red_face });
                R_move({ cube_green_face, cube_white_face, cube_yellow_face, cube_blue_face, cube_red_face });
                break;
            case "L":
                L_move({ cube_green_face, cube_white_face, cube_yellow_face, cube_blue_face, cube_orange_face });
                break;
            case "L'":
                L_move_prime({ cube_green_face, cube_white_face, cube_yellow_face, cube_blue_face, cube_orange_face });
                break;
            case "L2":
                L_move({ cube_green_face, cube_white_face, cube_yellow_face, cube_blue_face, cube_orange_face });
                L_move({ cube_green_face, cube_white_face, cube_yellow_face, cube_blue_face, cube_orange_face });
                break;
            case "U":
                U_move({ cube_white_face, cube_orange_face, cube_green_face, cube_red_face, cube_blue_face });
                break;
            case "U'":
                U_move_prime({ cube_white_face, cube_orange_face, cube_green_face, cube_red_face, cube_blue_face });
                break;
            case "U2":
                U_move({ cube_white_face, cube_orange_face, cube_green_face, cube_red_face, cube_blue_face });
                U_move({ cube_white_face, cube_orange_face, cube_green_face, cube_red_face, cube_blue_face });
                break;
            case "F":
                F_move({ cube_white_face, cube_orange_face, cube_yellow_face, cube_red_face, cube_green_face });
                break;
            case "F'":
                F_move_prime({ cube_white_face, cube_orange_face, cube_yellow_face, cube_red_face, cube_green_face });
                break;
            case "F2":
                F_move({ cube_white_face, cube_orange_face, cube_yellow_face, cube_red_face, cube_green_face });
                F_move({ cube_white_face, cube_orange_face, cube_yellow_face, cube_red_face, cube_green_face });
                break;
            case "D":
                D_move({ cube_yellow_face, cube_orange_face, cube_green_face, cube_red_face, cube_blue_face });
                break;
            case "D'":
                D_move_prime({ cube_yellow_face, cube_orange_face, cube_green_face, cube_red_face, cube_blue_face });
                break;
            case "D2":
                D_move({ cube_yellow_face, cube_orange_face, cube_green_face, cube_red_face, cube_blue_face });
                D_move({ cube_yellow_face, cube_orange_face, cube_green_face, cube_red_face, cube_blue_face });
                break;
            case "B":
                B_move({ cube_white_face, cube_red_face, cube_yellow_face, cube_orange_face, cube_blue_face });
                break;
            case "B'":
                B_move_prime({ cube_white_face, cube_red_face, cube_yellow_face, cube_orange_face, cube_blue_face });
                break;
            case "B2":
                B_move({ cube_white_face, cube_red_face, cube_yellow_face, cube_orange_face, cube_blue_face });
                B_move({ cube_white_face, cube_red_face, cube_yellow_face, cube_orange_face, cube_blue_face });
                break;
            default:
                break;
        }
    })

    return {
        whiteFace: cube_white_face.flat(),
        orangeFace: cube_orange_face.flat(),
        greenFace: cube_green_face.flat(),
        redFace: cube_red_face.flat(),
        blueFace: cube_blue_face.flat(),
        yellowFace: cube_yellow_face.flat()
    }

}
