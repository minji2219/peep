import {AgreementBox} from '@components/features/signup/AgreementBox';
import {SignupBox} from '@components/features/signup/SignupBox';
import styled from '@emotion/styled';
import {useState} from 'react';

const Signup = () => {
  const [isAgree, setIsAgree] = useState(true);

  return <Wrapper>{isAgree ? <AgreementBox setIsAgree={setIsAgree} /> : <SignupBox />}</Wrapper>;
};

export default Signup;

const Wrapper = styled.div`
  width: 100%;
`;
