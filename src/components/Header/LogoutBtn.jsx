import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="    px-6 py-2
                    text-blue-400
                    bg-gray-800
                    rounded-full
                    hover:bg-blue-700
                    hover:text-white
                    transition-colors
                    duration-300"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
