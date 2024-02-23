import { CUBE_COLORS } from "@/lib/cubes-constants";

export type Cubes = '2x2' | '3x3' | '4x4' | 'square-1';
export type Methods = 'F2L' | 'OLL' | 'PLL';

export interface Method {
    method: string;
    name: string;
    description: string;
}

export interface DBCubes {
    id: number;
    name: string;
    description: string;
}[]

export interface DBMethods {
    id: number;
    name: string;
    description: string;
    cubeId: number;
}[]

export interface DBCases {
    id: number;
    name: string;
    colors: { [key: number]: keyof typeof CUBE_COLORS }
    methodId: number;
}[]

export interface DBAlgs {
    id: number;
    algorithm: string;
    createdAt: Date;
    caseId: number;
    userId: string;
}[]
