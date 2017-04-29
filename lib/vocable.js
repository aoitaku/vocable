"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path='../typings/index.d.ts' />
const _ = require("lodash");
class SyllableComponent {
    constructor(entity) {
        this.entity = entity;
    }
    toString() {
        return this.entity;
    }
}
exports.SyllableComponent = SyllableComponent;
class Syllable {
    static generate(onset, nucleus, coda) {
        return new this(onset, nucleus, coda);
    }
    constructor(onset, nucleus, coda) {
        this.onset = new SyllableComponent(onset);
        this.nucleus = new SyllableComponent(nucleus);
        this.coda = new SyllableComponent(coda);
    }
    toString() {
        return this.onset.toString() + this.nucleus.toString() + this.coda.toString();
    }
}
exports.Syllable = Syllable;
class Vocable {
    static generate({ numOfSyllables, onsets, nuclea, codas }) {
        return new this(_.times(numOfSyllables, (n) => {
            return Syllable.generate(_.sample(onsets), _.sample(nuclea), _.sample(codas));
        }));
    }
    constructor(syllables) {
        this.syllables = syllables;
    }
    toString() {
        return _.map(this.syllables, (syllable) => syllable.toString()).join('');
    }
}
exports.default = Vocable;
