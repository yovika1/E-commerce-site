import React, { useState } from "react";
import axios from "axios";

const LoginPage = ({visible,onClose}) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState(false);
  // const [verifyOtp, setVerifyOtp] = useState(false)
  const [loading,setLoading]= useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }

  const handleOnClose = (e)=>{
    if(e.target.id === "container")
    onClose();
  }
  if(!visible)return null;
  
  const handleOTP = async () => {
    try {
      const response = await axios.post("http://localhost:8000/userdata/login", {
        Email: email,
      });
      setEnteredOtp(response?.data?.isOtpSent);
      console.log(response)
    } catch (error) {
      console.error("Error fetching OTP", error);
    }
  };

  const handleVerifyOTP = async () =>{
    try {
      const verifyResponse = await axios.post("http://localhost:8000/userdata/verify",{
        Email: email,
        OTP:otp,
      })
      
      if(verifyResponse?.status === 200){
        localStorage.setItem("token",verifyResponse?.data?.token);
        onClose();
      }
    
    } catch (error) {
      console.error("Error verifying OTP", error);
    }
  };

  return (
    <div onClick={handleOnClose} id="container" onSubmit={handleSubmit}
    className="w-screen h-screen overflow-hidden flex align-middle justify-center absolute top-0 z-30">
      <div className="flex items-center ">
        <div className="bg-blue-400 text-white w-72 h-442 p-4">
          <div className="mt-0">
            <h1 className="text-2xl font-semibold">Login</h1>
            <p className="">
              Get access to your Orders, Wishlist, and Recommendations
            </p>
          </div>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
            alt="login"
            className="object-fill  ml-12 bottom-20"
          />
        </div>
        <div className="w-96 h-442 p-4 relative bg-white">
          <div className="mt-14">
         
            {enteredOtp ? (
              
              <div>
                <input
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full text-black bg-white border-none outline-none border-b-1 border-gray-300"
                />
                <button
                  onClick={() => handleVerifyOTP()}
                  className=" mt-4 cursor-pointer bg-orange-500 border-none text-black w-full h-12 text-base hover:box-shadow-active"
                >
                  {/* {loading? `<button className=" cursor-wait">`:"Verify OTP"} */}
                  {loading? "loading..":"Verify Otp"}
                </button>
              </div>
            ) : (
              <>
              <input
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black bg-white border-none outline-none border-b-1 border-gray-300"
            />
            
             { <button
                onClick={() => handleOTP()}
                className="mt-4 w-80 cursor-pointer bg-orange-500 border-none active:bg-orange-400 text-black  hover:bg-orange-300w-full h-12 text-base hover:box-shadow-active"
              >
                Request OTP
                {/* ?"":<button className=" cursor-wait"></button> */}
              </button>}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;