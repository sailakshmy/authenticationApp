import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { loginUser } from "../utils/auth";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);
  async function loginHandler({ email, password }) {
    try {
      setIsAuthenticating(true);
      const token = await loginUser(email, password);
      authContext.authenticate(token);
      setIsAuthenticating(false);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not authenticate user. Please check your credentials or try again later!."
      );
      setIsAuthenticating(false);
      return;
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
