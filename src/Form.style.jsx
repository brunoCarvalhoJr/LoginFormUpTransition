import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #2E0909;
  max-height: 420px;
  max-width: 270px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 7px 7px 10px 3px #2E090928;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
`

export const Checkbox = styled.input`
  display: none;
`;

export const Login = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #e0dede;
  border: none;
  outline: none;
  border-radius: 4px;
`;

export const Register = styled.div`
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(20%);
  transition: 0.8s ease-in-out;

  ${Checkbox}:checked ~ & {
    transform: translateY(-65%);
  }
`;

export const RegisterLabel = styled.label`
  color: #fff;
  font-size: 2rem;
  justify-content: center;
  display: flex;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  transition: 0.5s ease-in-out;
  color: #2E0909;
  transform: scale(0.6);

  ${Checkbox}:checked ~ ${Register} & {
    transform: scale(1);
    margin: 5% 0 5%;
  }
`;

export const LoginLabel = styled.label`
  color: #fff;
  font-size: 2rem;
  justify-content: center;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transform: scale(1.2);

  ${Checkbox}:checked ~ ${Login} & {
    transform: scale(1);
    margin: 10% 0 12%;
  }
`;

export const Button  = styled.button`
  width: 85%;
  height: 40px;
  margin: 12px auto 10%;
  color: #2E0909;
  background: #cdc2c2;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background-color: white;
  }
  

  ${Checkbox}:checked ~ ${Register} & {
    color: white;
    background: #2E0909;

    &:hover {
      background-color: #7b6c6c;
    }
  }
`;