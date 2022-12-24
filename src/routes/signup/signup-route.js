import { useState } from 'react';
import Swal from 'sweetalert2';

function SignUP() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePwd = (e) => {
    setPwd(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  }

  const onSignup = () => {
    if(email === "" || pwd === "" || nickname === "") {
      Swal.fire({
        title: "입력되지 않은 부분이 있습니다!",
        text: "항목을 전부 입력해주세요!",
        icon: 'error'
      });
      return;
    }
    console.log(email, pwd, nickname);
  };

  return (
    <div style={{ 
      display: 'flex', justifyContent: 'center', alignItems: 'center', 
      width: '100%', height: '100vh'
      }}>
        <form style={{ display: 'flex', flexDirection: 'column'}}
        onSubmit={onSignup}>
          <label>Email</label>
          <input type='email' value={email} onChange={onChangeEmail}/>
          <label>Password</label>
          <input type='password' value={pwd} onChange={onChangePwd}/>
          <label>Nickname</label>
          <input type='text' value = {nickname} onChange={onChangeNickname}></input>
          <br />
          <button type="submit">회원가입</button>
      </form>
    </div>
  )
}

export default SignUP;