export const generateRandomNum = (greaterNumber: number, smallerNumber: number): number => {
    return Math.floor(Math.random() * (greaterNumber - smallerNumber) + 1) 
} 