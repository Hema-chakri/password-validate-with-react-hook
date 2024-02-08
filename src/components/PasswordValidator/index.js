// Write your code here
import {useState} from 'react'
import {
  PasswordValidateContainer,
  PasswordContainer,
  Heading,
  CheckPasswordText,
  PasswordLabel,
  PasswordInput,
} from './styledComponents'

const PasswordValidator = () => {
  const [validatePassword, setValidatePassword] = useState('')

  const onChangePassword = event => {
    setValidatePassword(event.target.value)
  }

  return (
    <PasswordValidateContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <CheckPasswordText>
          Check how strong and secure is your password
        </CheckPasswordText>
        <PasswordInput
          type="password"
          value={validatePassword}
          onChange={onChangePassword}
        />
        <PasswordLabel>
          {validatePassword.length >= 8
            ? ''
            : 'Your password must be at least 8 characters'}
        </PasswordLabel>
      </PasswordContainer>
    </PasswordValidateContainer>
  )
}

export default PasswordValidator
