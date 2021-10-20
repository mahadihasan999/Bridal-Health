import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // hooks
    const AllContexts = useFirebase();



    const data = {
        AllContexts
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
