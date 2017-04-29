/// <reference path="../typings/index.d.ts" />
export interface IVocableGenerationConfig {
    numOfSyllables: number;
    onsets: string[];
    nuclea: string[];
    codas: string[];
}
export declare class SyllableComponent {
    private entity;
    constructor(entity: string);
    toString(): string;
}
export declare class Syllable {
    static generate(onset: string, nucleus: string, coda: string): Syllable;
    onset: SyllableComponent;
    nucleus: SyllableComponent;
    coda: SyllableComponent;
    constructor(onset: string, nucleus: string, coda: string);
    toString(): string;
}
export default class Vocable {
    static generate({numOfSyllables, onsets, nuclea, codas}: IVocableGenerationConfig): Vocable;
    private syllables;
    constructor(syllables: Syllable[]);
    normalize(): void;
    toString(): string;
}
