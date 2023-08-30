import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
export function Welcome() {
  const inputStyle = {
    margin: "10px 5px 20px 5px",
    padding: "5px 50px 5px 50px",
    borderRadius: "10px",
    position: "relative",
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          backgroundColor: "#62646836",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          padding: "15px",
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, 50%)",
        }}
      >
       < LockOpenOutlinedIcon/>
        <div>
          <div style={{ position: "relative" }}>
            <input style={inputStyle} type="text" placeholder="Email" />
            <EmailOutlinedIcon
              style={{ position: "absolute", left: "240px", top: "12px" }}
            />
          </div>
        </div>
        <div style={{position:"relative"}}>
          <input style={inputStyle} type="text" placeholder="Password" />
          <PasswordOutlinedIcon style={{position:"absolute",right:" 25px",top:"15px"}} />
        </div>
        <div>
          <button
            style={{
              padding: "5px 120px 5px 120px",
              margin: "0px 5px 80px 5px",
              backgroundColor: "#82afe2",
              borderRadius: "10px",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
