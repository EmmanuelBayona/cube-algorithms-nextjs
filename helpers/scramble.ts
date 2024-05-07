import { getRandomInt } from "./getRandomInt"

const scrambleSize = 20;

const moves = ["F", "R", "U", "B", "L", "D", "F2", "R2", "U2", "B2", "L2", "D2", "F'", "R'", "U'", "B'", "L'", "D'"]

const getNextMove = (previousMove: string): string => {
    const nextMove = moves[getRandomInt(moves.length)];

    // if the our nextMove is forbidden, then we need to get a new moves
    if (isForbiddenMove(previousMove, nextMove)) {
        return getNextMove(previousMove)
    }

    return nextMove
}

const isForbiddenMove = (previousMove: string, nextMove: string) => {
    if (!previousMove) return false;

    const moveName = previousMove.replace(/['2]/g, ""); // Remove any ' or 2 from the move
    // generate the forbidden moves, if our previousMove was R, then we can't have R, R', or R2 as our next move
    const forbiddenMoves = [moveName, `${moveName}'`, `${moveName}2`]

    return forbiddenMoves.includes(nextMove)
}

const hasCorrectLength = (array: string[]) => array.length === scrambleSize;

export const generateScramble = (currentScramble: string[] = []): string[] => {
    const [lastMove] = [...currentScramble].reverse();
    const nextMove = getNextMove(lastMove);
    const newScramble = [...currentScramble, nextMove];

    if (!hasCorrectLength(newScramble)) {
        return generateScramble(newScramble)
    }

    return newScramble

}
