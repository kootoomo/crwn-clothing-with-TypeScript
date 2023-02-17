import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainer, FormWrapper } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <FormWrapper>
        <SignInForm />
      </FormWrapper>
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
