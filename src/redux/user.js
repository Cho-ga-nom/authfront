import { createAction, handleActions } from "redux-actions";
import axios from 'axios';
import Swal from "sweetalert2";

const LOG_IN = "LOG_IN"; //로그인
const LOG_OUT = "LOG_OUT"; //로그아웃
const LOGIN_CHECK = "LOGIN_CHECK"; //로그인 유지
const GET_AUTHNUM = "GET_AUTHNUM"; // 인증번호 받아오기
const VALIDATE_EMAIL = "VALIDATE_EMAIL"; //이메일 인증 확인
const FIND_PWD = "FIND_PWD"; //비밀번호 찾기
const USER_INFO = "USER_INFO"; //유저정보 계속 유지하기

const logIn = createAction(LOG_IN, (user) => ({ user }));
const loginCheck = createAction(LOGIN_CHECK, (cookie) => ({ cookie }));
const validateEmail = createAction(VALIDATE_EMAIL, (user) => ({ user })); //이메일 인증
const findPwd = createAction(FIND_PWD, (email) => ({ email }));
const UserInfo = createAction(USER_INFO, (user) => ({ user }));

const initialState = {
  user: {},
  is_email_validate: "",
  email: "",
};

const loginAPI = (email, pwd) => {
  return function(dispatch, getState, { history }) {
    axios({
      method: "POST",
      url: 'http://localhost:3000/login',
      data: {
        email: email,
        password: pwd,
      },
    })
    .then((res) => {
      if(res.data.msg === "success") {
        const jwtToken = res.data.token;
        const user_data = {
          email: res.data.email,
          nickname: res.data.nickname,
          token: res.data.token,
        };

        dispatch(logIn(user_data));
        history.push("/");
      }
      else {
        Swal.fire({
          title: "로그인에 실패했습니다!",
          confirmButtonColor: "#00adb5",
          confirmButtonText: "확인",
        });
      }
    }).catch((err) => {
      console.log("loginAPI에서 오류 발생", err);
    });
  };
}

const signupAPI = (email, nickname, pwd) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "POST",
      url: 'http://localhost:3000/signup',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        email: email,
        nickname: nickname,
        password: pwd,
      },
    })
    .then((res) => {
      Swal.fire({
        title: "회원가입 성공",
        text: "축하합니다. 어떤 이야기가 기다리고 있을까요?",
        confirmButtonColor: "#00adb5",
      });
      history.push("/login");
    })
    .catch((err) => {
      console.log("signupAPI에서 오류발생", err);
    });
  };
}

const actionCreators = {
  loginAPI, 
  signupAPI
}

export { actionCreators };