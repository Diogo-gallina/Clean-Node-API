import { ValidationComposite } from '../../presentation/helper/validators/validation-composite'

export const makeSignUpValidation = (): ValidationComposite => {
  return new ValidationComposite([])
}
