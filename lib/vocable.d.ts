/// <reference path="../typings/index.d.ts" />
export interface IVocableGenerationConfig {
    numOfSyllables: number
    onsets: string[]
    nuclea: string[]
    codas: string[]
}
export declare class SyllableComponent {
    private entity
    constructor (entity: string);
    public toString (): string
}
export declare class Syllable {
    public static generate (onset: string, nucleus: string, coda: string): Syllable
    public onset: SyllableComponent
    public nucleus: SyllableComponent
    public coda: SyllableComponent
    constructor (onset: string, nucleus: string, coda: string);
    public toString (): string
}
export default class Vocable {
    public static generate ({numOfSyllables, onsets, nuclea, codas}: IVocableGenerationConfig): Vocable
    private syllables
    constructor (syllables: Syllable[]);
    public toString (): string
}
