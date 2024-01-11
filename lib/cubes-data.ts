import { Cubes, Method } from "@/types";

export const METHODS: Record<Cubes, Method[]> = {
    '2x2': [
        { method: 'EG1', name: 'EG-1', description: 'Edge Group 1' },
    ],
    '3x3': [
        { method: 'F2L', name: 'F2L', description: 'First 2 Layers' },
        { method: 'OLL', name: 'OLL', description: 'Orientation of Last Layer' },
        { method: 'PLL', name: 'PLL', description: 'Permutation of Last Layer' },
        { method: 'OHPLL', name: 'OH PLL', description: 'One Handed Permutation of Last Layer' },
        { method: 'OHOLL', name: 'OH OLL', description: 'One Handed Orientation of Last Layer' },
    ],
    '4x4': [
        { method: 'F2L', name: 'F2L', description: 'First 2 Layers' },
    ],
    'square-1': [
        { method: 'WCA', name: 'WCA', description: 'WCA Method' },
    ]
}