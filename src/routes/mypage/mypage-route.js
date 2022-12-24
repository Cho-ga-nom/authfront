import { useState } from 'react';
import Swal from 'sweetalert2';

function MyPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePwd = (e) => {
    setPwd(e.target.value);
  };

  const onLogin = () => {
    if(email === "" || pwd === "") {
      Swal.fire({
        title: "입력되지 않은 부분이 있습니다!",
        text: "이메일과 비밀번호를 입력해주세요!",
        icon: 'error'
      });
      return;
    }
    console.log(email, pwd);
  };

  return (
    <div style={{ 
      display: 'flex', justifyContent: 'center', alignItems: 'center', 
      width: '100%', height: '100vh'
      }}>
      <form style={{ display: 'flex', flexDirection: 'column'}}
      onSubmit={onLogin}>
          <label>Email</label>
          <input type='email' value={email} onChange={onChangeEmail}/>
          <label>Password</label>
          <input type='password' value={pwd} onChange={onChangePwd}/>
          <br />
          <button type="submit">로그인</button>
          <br />
        <div className="signup">
          <a href="/signup">
            <span>회원가입</span>
          </a>
        </div>
      </form>
  </div>
  );
};

export default MyPage;