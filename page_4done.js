import React from "react";
import Btn from "./component/Btn.js";

const Page4Done = () => {
  return (
    <div className="wid100 fx fx_center fx_wrap">
      <div className="main_container wid90 fx fx_center fx_wrap">
        <div className="main_table fx fx_wrap">
          <div className="mainTitle wid100 fx fx_center">API資料已寄出</div>
          <div className="table_td wid100 fx fx_center fx_nowrap">
            您已完成申請，API資料已寄至您所申請的Email。
          </div>
        </div>
      </div>
      <div className="wid90 fx fx_center">
        <Btn btnType="href" link="/">
          回申請頁面
        </Btn>
      </div>
    </div>
  );
};

export default Page4Done;
