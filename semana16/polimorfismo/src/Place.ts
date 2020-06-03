export abstract class Place {
  constructor(protected cep: string) {}

  getCep(): string {
    return  `${console.log(this.cep)}`
  }
} 