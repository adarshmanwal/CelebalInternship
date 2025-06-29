import { redirect } from "react-router-dom";
import { auth,db } from "../Components/firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    if (request.url.includes("/signup")) {
      // SIGN UP
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      if (!firstName || !lastName) {
        return { error: "First name and last name are required" };
      }
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Signup Success", userCredential);
      if(user)
      {
        await setDoc(doc(db, "Users", userCredential.user.uid), {
          email: userCredential.user.email,
          firstName: firstName,
          lastName: lastName,
          uid: userCredential.user.uid,
          createdAt: new Date().toISOString(),
        });
        console.log("User data saved to Firestore");
      }
      return redirect("/login");
    } else {
      // LOGIN
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Success", userCredential);
      return redirect("/");
    }
  } catch (error) {
    return { error: error.message };
  }
}

export async function logoutAction() {
  try {
    // Clear local storage or any authentication state
    localStorage.removeItem("token");
    localStorage.removeItem("userData");

    // Optionally, you can also clear any user-related state in your application
    // updateUserDataOutsideReact(null);

    return redirect("/auth/login");
  } catch (error) {
    console.error("Logout error:", error);
    return { error: ["An unexpected error occurred during logout"] };
  }
}

