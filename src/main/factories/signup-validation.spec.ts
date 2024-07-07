import { ValidationComposite } from '../../presentation/helper/validators/validation-composite'
import { makeSignUpValidation } from './signup-validation'

describe('SignUpValidation Factory', () => {
  it('Should call validation composity with all validations', () => {
    makeSignUpValidation()
    expect(ValidationComposite)
  })
})
