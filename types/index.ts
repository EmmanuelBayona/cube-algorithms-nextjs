import { Prisma } from "@prisma/client";

export type Status = 'success' | 'error' | 'loading' | 'idle';

export type Cubes = '2x2' | '3x3' | '4x4' | 'square-1';
export type Methods = 'F2L' | 'OLL' | 'PLL';

export interface Method {
    method: string;
    name: string;
    description: string;
}

// export interface DBCubes {
//     id: number;
//     name: string;
//     description: string;
// }[]

// export interface DBMethods {
//     id: number;
//     name: string;
//     description: string;
//     cubeId: number;
//     svgView: string;
// }[]

// export interface DBCases {
//     id: number;
//     name: string;
//     colors: JsonValue;
//     methodId: number;
// }[]

export interface DBAlgs {
    id: number;
    algorithm: string;
    createdAt: Date;
    caseId: number;
    userId: string;
}[]

export type DBCubes = Prisma.CubeGetPayload<{}>
export type DBMethods = Prisma.MethodGetPayload<{}>
export type DBCases = Prisma.CaseGetPayload<{}>
export type DBCasesWithMethodAndCube = Prisma.CaseGetPayload<{
    include: {
        method: {
            include: {
                cube: true
            }
        }
    }
}>
