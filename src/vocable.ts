/// <reference path='../typings/index.d.ts' />
import * as _ from 'lodash'

export interface IVocableGenerationConfig {
  numOfSyllables: number
  onsets: string[]
  nuclea: string[]
  codas: string[]
}

export class SyllableComponent {
  private entity: string

  constructor (entity: string) {
    this.entity = entity
  }

  public toString () {
    return this.entity
  }
}

export class Syllable {
  public static generate (onset: string, nucleus: string, coda: string) {
    return new this(onset, nucleus, coda)
  }

  public onset: SyllableComponent
  public nucleus: SyllableComponent
  public coda: SyllableComponent

  constructor (onset: string, nucleus: string, coda: string) {
    this.onset = new SyllableComponent(onset)
    this.nucleus = new SyllableComponent(nucleus)
    this.coda = new SyllableComponent(coda)
  }

  public toString () {
    return this.onset.toString() + this.nucleus.toString() + this.coda.toString()
  }
}

export default class Vocable {
  public static generate ({ numOfSyllables, onsets, nuclea, codas }: IVocableGenerationConfig) {
    return new this(_.times(numOfSyllables, (n) => {
      return Syllable.generate(_.sample([...onsets, '']), _.sample(nuclea), _.sample([...codas, '']))
    }))
  }

  private syllables: Syllable[]

  constructor (syllables: Syllable[]) {
    this.syllables = syllables
    this.normalize()
  }

  public normalize () {
    _.reduce(this.syllables, (prev: Syllable, current: Syllable, index) => {
      if (prev) {
        const coda = prev.coda.toString()
        if (coda.length > 1 && current.onset.toString().startsWith(coda.slice(-1))) {
          prev.coda = new SyllableComponent(prev.coda.toString().slice(0, -1))
        }
      }
      return current
    }, null)
  }

  public toString () {
    return _.map(this.syllables, (syllable) => syllable.toString()).join('')
  }
}
