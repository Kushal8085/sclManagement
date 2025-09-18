import { createContext, useState,useEffect } from "react";
import axios from "axios";

export const UserDataContext = createContext();

function UserContext({ children }) {
  const serverUrl = "http://localhost:8000";
  const [user, setUser] = useState(null); // store login info, role, etc.
  const [userDetail, setUserDetail] = useState(null);
  const [userEmail,setUserEmail]=useState("")
  const [collapsed, setCollapsed] = useState(false);

  // const handleCurrentUser = async () => {
  //   try {
  //     console.log('userCurrent')
  //     const result = await axios.get(`${serverUrl}/api/auth/v1/current`,{withCredentials: true})
  //     setUserDetail(result.data)
  //     console.log(result.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  //  useEffect(()=>{
  //   handleCurrentUser()
  // },[])
  return (
    <UserDataContext.Provider value={{ user, setUser, serverUrl,userEmail,setUserEmail,userDetail,setUserDetail,collapsed, setCollapsed }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;