import { redirect } from "react-router-dom";
import { auth, db } from "../Components/firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        await setDoc(doc(db, "Users", userCredential.user.uid), {
          email: userCredential.user.email,
          firstName: firstName,
          lastName: lastName,
          uid: userCredential.user.uid,
          createdAt: new Date().toISOString(),
        });
        toast.success("Signup successful!");
      }
      return redirect("/");
    } else {
      // LOGIN
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Login Success", userCredential);
      toast.success("Login successful!");
      return redirect("/");
    }
  } catch (error) {
    return { error: error.message };
  }
}

export async function logoutAction() {
  console.log("Logging out user...");
  try {
    // Clear local storage or any authentication state
    await auth.signOut();
    console.log("User logged out successfully");
    toast.success("Logout successful!");
    localStorage.removeItem("user");

    return redirect("/login");
  } catch (error) {
    console.error("Logout error:", error);
    return { error: ["An unexpected error occurred during logout"] };
  }
}
