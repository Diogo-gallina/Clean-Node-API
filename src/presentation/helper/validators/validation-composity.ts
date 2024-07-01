import { Validation } from './validation'

export class ValidationComposity implements Validation {
  constructor(private readonly validations: Validation[]) {
    this.validations = validations
  }

  validate(input: any): Error {
    for (const validation of this.validations) {
      const error = validation.validate(input)
      if (error) return error
    }
  }
}
