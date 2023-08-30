import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import MailLockSharpIcon from "@mui/icons-material/MailLockSharp";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import PhoneLockedRoundedIcon from "@mui/icons-material/PhoneLockedRounded";

import { useState } from "react";
function Sign() {
  const [fullname, setFullname] = useState("");
  const [visiblePass, setVisiblePass] = useState(false);
  console.log("the fullname value", fullname);
  const [phonenumber, setPhonenumber] = useState("");
  console.log("the value is", phonenumber);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  console.log("the password is", password);
  const passVisibleBtn = () => {
    console.log("JadhBuddhi Suhshama hai");
    setVisiblePass(!visiblePass);
  };
  const inputStyle = {
    padding: "10px",
    borderRadius: "7px",
    border: "none",
    fontSize: "16px",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#CECFCF",
          width: "450px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          rowGap: "0.5rem",
          boxShadow: "4px 5px 8px grey",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Sign In</h2>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            rowGap: "0.5rem",
          }}
        >
          <label>Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            style={inputStyle}
            type="text"
            placeholder="Full Name"
          />
          <AdminPanelSettingsRoundedIcon
            style={{ position: "absolute", left: "400px", top: "40px" }}
          />
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            rowGap: "0.5rem",
          }}
        >
          <label>Phone </label>
          <input
            onChangeCapture={(e) => setPhonenumber(e.target.value)}
            style={inputStyle}
            type="number"
            placeholder="Phone Number"
          />
          <PhoneLockedRoundedIcon
            style={{ position: "absolute", left: "400px", top: "40px" }}
          />
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            rowGap: "0.5rem",
          }}
        >
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            type="email"
            placeholder="Email"
          />
          <MailLockSharpIcon
            style={{ position: "absolute", left: "400px", top: "40px" }}
          />
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            rowGap: "0.5rem",
          }}
        >
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            // defaultValue={ visiblePass=== true? password : 'value'}
            type={visiblePass ? "text" : "password"}
            placeholder="Password"
          />

          {visiblePass && (
            <VisibilityOutlinedIcon
              onClick={passVisibleBtn}
              style={{ position: "absolute", left: "400px", top: "40px" }}
            />
          )}

          {!visiblePass && (
            <VisibilityOffOutlinedIcon
              onClick={passVisibleBtn}
              style={{ position: "absolute", left: "400px", top: "40px" }}
            />
          )}
        </div>

        <button
          onClick={{}}
          style={{
            backgroundColor: "#FFFFFF",
            border: "none",
            padding: "10px 70px 10px 70px",
            borderRadius: "7px",
            marginTop: "10px",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
export default Sign;
