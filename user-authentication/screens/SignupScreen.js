import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { createUser } from "../utils/auth";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function signup({ email, password }) {
    try {
      setIsAuthenticating(true);
      const token = await createUser(email, password);
      authContext.authenticate(token);
      setIsAuthenticating(false);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user. Please check your input."
      );
      setIsAuthenticating(false);
      return;
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signup} />;
}

export default SignupScreen;
