
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
    methodId: number;
}
