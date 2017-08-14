import { Injectable } from '@angular/core'

import { genData } from './gen.data'

@Injectable()
export class GenDataService {
  private data: object

  constructor() {
    const storage = window.localStorage
    const storing = typeof(Storage) !== 'undefined'
    if (storing) {
      if (storage.getItem('gen-data')) {
        this.data = JSON.parse(storage.getItem('gen-data'))
      } else {
        this.data = genData
        storage.setItem('gen-data', JSON.stringify(this.data))
      }
    }
  }

  getData(): object {
    return this.data
  }
}