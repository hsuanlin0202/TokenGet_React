import React, { Component } from "react";
import TextInput from "./component/TextInput.js";
import Btn from "./component/Btn.js";
import CheckBox from "./component/checkBox.js";
import { APIinfo1 } from "./component/ApiInfo.js";

class Page1info extends Component {
  handleClick() {
    let passNum = 0;
    for (let i = 0; i <= global.infoVerify.length; i++) {
      if (global.infoVerify[i] === true) {
        passNum++;
      }
    }
    if (passNum === 5) {
      //let title = document.getElementById("title").value;
      let phone = document.getElementById("phone").value;
      //let email = document.getElementById("email").value;
      //let purpose = document.getElementById("purpose").value;
      //let text = [title, phone, email, purpose];
      window.location.href = "/Page2msg/" + phone;
    } else {
      alert("請確認所有資料都已填寫，並勾選已詳細閱讀並同意接受相關權利義務");
    }
  }
  render() {
    global.infoVerify = [false, false, false, false, false];
    return (
      <div className="wid100 fx fx_center fx_wrap">
        <div className="main_container wid90 fx fx_center fx_wrap">
          <div className="main_table fx fx_wrap">
            <div className="mainTitle wid100 fx fx_center">API申請說明</div>
            <APIinfo1 />

            <div className="mainTitle wid100 fx fx_center">API申請資料</div>
            <div className="fx wid100 fx_wrap  fx_center">
              <TextInput
                name="申請人"
                id="title"
                verify="length"
                require="*"
                veryLength="1"
                veryGlobal="0"
              />
              <TextInput
                name="電話"
                type="number"
                id="phone"
                verify="phone"
                require="*"
                pattern="[0-9]*"
                veryGlobal="1"
              />
              <TextInput
                name="電子郵件"
                type="email"
                id="email"
                verify="email"
                require="*"
                veryGlobal="2"
              />
              <TextInput
                name="用途"
                type="text"
                id="purpose"
                verify="length"
                require="*"
                veryLength="1"
                veryGlobal="3"
              />
              <div className="table_td wid100 fx fx_center fx_nowrap">
                <CheckBox name="agree" veryGlobal="4">
                  我已詳細閱讀並同意接受相關權利義務
                </CheckBox>
              </div>
            </div>
          </div>
        </div>
        <div className="wid90 fx fx_center">
          <Btn btnType="refresh">重新填寫</Btn>
          <button className="btn" onClick={() => this.handleClick()}>
            資料送出
          </button>
        </div>
      </div>
    );
  }
}

export default Page1info;
