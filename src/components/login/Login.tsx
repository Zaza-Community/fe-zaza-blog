
interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const Login = ({ isOpen, onClose, onLoginSuccess }: LoginProps) => {

  const onNaverLogin = () => {
    // window.location.href = "http://localhost:9000/oauth2/authorization/naver"
    onLoginSuccess();
  }
  const onGoogleLogin = () => {
    // window.location.href = "http://localhost:9000/oauth2/authorization/google"
    onLoginSuccess();
  }

  // const [loginRequest, setLoginRequest] = useState<LoginReqType>({
  //   id: '',
  //   password: '',
  // });

  // const mutation = useMutation({
  //   mutationFn: login,
  //   onSuccess: data => {
  //     console.log('Login successful:', data);
  //     onLoginSuccess();
  //   },
  //   onError: error => {
  //     console.error('Login failed:', error);
  //   },
  // });

  // function handleLoginSubmit(event: React.FormEvent) {
  //   if (event) {
  //     event.preventDefault();
  //     console.log('login');
  //     mutation.mutate(loginRequest); // loginRequest는 로그인 요청에 필요한 데이터를 담고 있어야 합니다.
  //   }
  // }

  // function handleForm(event: BaseSyntheticEvent) {
  //   const { name, value } = event.target;

  //   setLoginRequest(prevState => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // }

  return isOpen ? (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#004444] p-8 rounded-lg shadow-xl w-96 relative border border-[#00ffff]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#00ffff] hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl mb-6 text-center text-[#00ffff] font-bold title">Choose Login</h2>

        <div className="space-y-4">
          <button 
            onClick={onNaverLogin}
            className="w-full bg-black/30 text-[#00ffff] py-3 rounded 
                     border border-[#00ffff] hover:bg-black/50 transition-colors
                     flex items-center justify-center gap-2 content" 
          >
            Naver Login
          </button>
          
          <button 
            onClick={onGoogleLogin}
            className="w-full bg-black/30 text-[#00ffff] py-3 rounded 
                     border border-[#00ffff] hover:bg-black/50 transition-colors
                     flex items-center justify-center gap-2 content"
          >
            Google Login
          </button>
        </div>

        <div className="mt-6 text-center text-[#00ffff]/70 text-sm content">
          Sign in easily with your social account
        </div>
      </div>
    </div>
  ) : null;
};
