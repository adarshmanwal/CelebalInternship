import { collection, getDocs } from "firebase/firestore";
import { db } from "../Components/firebase";
import { toast } from "react-toastify";

export default async function loadBoards() {
  try {
    const boardsCollection = collection(db, 'Boards');
    const data = await getDocs(boardsCollection);
    const boardsList = data.docs.map(doc => ({ ...doc.data() }));
    return boardsList
  } catch (error) {
    console.log(`There was an error fetching the data in firestore: ${error}`);
    toast.error("error while fetching the tasks")
  }
}
