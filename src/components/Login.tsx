import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { googleProvider, auth } from "../configs/firebase";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    localStorage.setItem(
      "auth",
      JSON.stringify({
        userId: result.user.uid,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        isAuth: true,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};
