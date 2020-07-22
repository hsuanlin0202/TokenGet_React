import React from "react";
import Btn from "./component/Btn.js";

const Page3Timeout = () => {
  return (
    <div className="wid100 fx fx_center fx_wrap">
      <div className="main_container wid90 fx fx_center fx_wrap">
        <div className="main_table fx fx_wrap">
          <div className="table_td wid100 fx fx_center fx_nowrap">
            您的簡訊驗證碼已逾時，請重新填寫申請資料。
          </div>
        </div>
      </div>
      <div className="wid90 fx fx_center">
        <Btn btnType="href" link="/">
          重填申請資料
        </Btn>
      </div>
    </div>
  );
};

export default Page3Timeout;
