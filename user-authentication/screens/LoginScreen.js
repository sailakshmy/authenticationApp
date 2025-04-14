import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from "../utils/auth";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function loginHandler({ email, password }) {
    try {
      setIsAuthenticating(true);
      await loginUser(email, password);
      setIsAuthenticating(false);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not authenticate user. Please check your input."
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
