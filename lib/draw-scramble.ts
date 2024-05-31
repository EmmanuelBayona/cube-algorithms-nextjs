type Face = string[][];

interface CubeFaces {
    cube_white_face?: Face;
    cube_green_face?: Face;
    cube_red_face?: Face;
    cube_blue_face?: Face;
    cube_yellow_face?: Face;
    cube_orange_face?: Face;
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
            case 'R':
                R_move({
                    cube_white_face,
                    cube_green_face,
                    cube_red_face,
                    cube_blue_face,
                    cube_yellow_face
                });
                break;
            case 'R2':
                R_move({
                    cube_white_face,
                    cube_green_face,
                    cube_red_face,
                    cube_blue_face,
                    cube_yellow_face
                });
                R_move({
                    cube_white_face,
                    cube_green_face,
                    cube_red_face,
                    cube_blue_face,
                    cube_yellow_face
                });
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

const R_move = ({
    cube_white_face,
    cube_green_face,
    cube_red_face,
    cube_blue_face,
    cube_yellow_face
}: CubeFaces) => {

    if (!cube_white_face || !cube_green_face || !cube_red_face || !cube_blue_face || !cube_yellow_face) {
        throw new Error('Missing required faces for R move');
    }

    const greenColumn = [cube_green_face[0][2], cube_green_face[1][2], cube_green_face[2][2]];
    const newGreenColumn = [cube_yellow_face[0][2], cube_yellow_face[1][2], cube_yellow_face[2][2]];
    [cube_green_face[0][2], cube_green_face[1][2], cube_green_face[2][2]] = newGreenColumn;

    const whiteColumn = [cube_white_face[0][2], cube_white_face[1][2], cube_white_face[2][2]];
    [cube_white_face[0][2], cube_white_face[1][2], cube_white_face[2][2]] = greenColumn;

    const blueColumn = [cube_blue_face[0][0], cube_blue_face[1][0], cube_blue_face[2][0]];
    [cube_blue_face[0][0], cube_blue_face[1][0], cube_blue_face[2][0]] = whiteColumn;

    [cube_yellow_face[0][2], cube_yellow_face[1][2], cube_yellow_face[2][2]] = blueColumn;

    const firstRedFaceRow = [cube_red_face[0][0], cube_red_face[0][1], cube_red_face[0][2]];
    const secondRedFaceRow = [cube_red_face[1][0], cube_red_face[1][1], cube_red_face[1][2]];
    const thirdRedFaceRow = [cube_red_face[2][0], cube_red_face[2][1], cube_red_face[2][2]];

    cube_red_face[0][0] = thirdRedFaceRow[0];
    cube_red_face[0][1] = secondRedFaceRow[0];
    cube_red_face[0][2] = firstRedFaceRow[0];
    cube_red_face[1][0] = thirdRedFaceRow[1];
    cube_red_face[1][1] = secondRedFaceRow[1];
    cube_red_face[1][2] = firstRedFaceRow[1];
    cube_red_face[2][0] = thirdRedFaceRow[2];
    cube_red_face[2][1] = secondRedFaceRow[2];
    cube_red_face[2][2] = firstRedFaceRow[2];

}

