import { BaseSyntheticEvent, useState } from 'react';
import { LoginReqType } from '../../type/request/loginReqType.ts';
import { login } from '../../query/queries.ts';
import { useMutation } from '@tanstack/react-query';

export const Login = () => {

  const onNaverLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/naver"
  }
  const onGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google"
  }

  const [loginRequest, setLoginRequest] = useState<LoginReqType>({
    id: '',
    password: '',
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: data => {
      console.log('Login successful:', data);
    },
    onError: error => {
      console.error('Login failed:', error);
    },
  });

  function handleLoginSubmit(event: React.FormEvent) {
    if (event) {
      event.preventDefault();
      console.log('login');
      mutation.mutate(loginRequest); // loginRequest는 로그인 요청에 필요한 데이터를 담고 있어야 합니다.
    }
  }

  function handleForm(event: BaseSyntheticEvent) {
    const { name, value } = event.target;

    setLoginRequest(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div>
      <form method={'post'} onSubmit={handleLoginSubmit}>
        <input type="text" name="id" value={loginRequest.id} onChange={handleForm} placeholder="ID" />
        <input
          type="password"
          name="password"
          value={loginRequest.password}
          onChange={handleForm}
          placeholder="Password"
        />
        <button type={'submit'}>login</button>
      </form>
      <div>
        <button onClick={onNaverLogin}>NAVER LOGIN</button>
      </div>
      <div>
        <button onClick={onGoogleLogin}>GOOGLE LOGIN</button>
      </div>
    </div>
  );
};
