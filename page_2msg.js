import React, { Component } from "react";
import TextInput from "./component/TextInput.js";
import Btn from "./component/Btn.js";
import Counter from "./component/counter.js";

class Page2msg extends Component {
  handleClick() {
    const msgGet = "123456";
    const msgInput = document.getElementById("msg").value;
    if (msgInput === msgGet) {
      window.location.href = "/Page4Done";
    } else {
      let error = document.getElementById("msgerror");
      error.innerHTML = "簡訊驗證碼錯誤";
    }
  }
  render() {
    global.infoVerify = [false];

    const usePhone = window.location.pathname.substring(10);

    //const string = window.location.pathname.substring(10);
    //var NArray = string.split(",");
    //console.log(NArray);
    return (
      <div className="wid100 fx fx_center fx_wrap">
        <div className="main_container wid90 fx fx_center fx_wrap">
          <div className="main_table fx fx_wrap">
            <div className="mainTitle wid100 fx fx_center">簡訊驗證</div>
            <div className="table_td lh30px wid100 fx fx_center fx_wrap">
              <div className="wid100 fx fx_center fx_wrap">
                簡訊驗證碼已發送至門號 {usePhone}
              </div>
              <div className="wid100 fx fx_center fx_wrap">
                請於
                <Counter sec="60" />
                秒內驗證，或重新填寫申請資料 。
              </div>
            </div>
            <div className="fx wid100 fx_wrap  fx_center">
              <TextInput
                name="簡訊驗證碼"
                type="text"
                id="msg"
                verify="none"
                require="*"
                pos="0"
              />
            </div>
          </div>
        </div>
        <div className="wid90 fx fx_center">
          <Btn btnType="href" link="/">
            重新填寫
          </Btn>
          <button className="btn" onClick={() => this.handleClick()}>
            驗證
          </button>
        </div>
      </div>
    );
  }
}

export default Page2msg;
