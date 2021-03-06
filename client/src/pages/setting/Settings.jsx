import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">update your account</span>
        </div>
        <form className="settingsForm">
          <label>profile picture</label>
          <div className="settingsPP">
            <img
              src="https://steemitimages.com/0x0/https://steemitimages.com/DQmaqkEZZpvCytYVUi6e3UkUj1CankKPz1MsUyuAxKuyoS7/8816995.gif"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="">username</label>
          <input type="text" placeholder="Okey" />
          <label htmlFor="">email</label>
          <input type="email" placeholder="okey222k@gmail.com" />
          <label htmlFor="">password</label>
          <input type="password" />
          <button className="settingsSubmitButton">update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
