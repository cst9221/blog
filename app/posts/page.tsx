import {db} from "@/app/_modules/firebase"
import {addDoc, collection, getDocs, getDoc, doc} from "firebase/firestore"

const PostsPage = async () => {
  const posts = await getDocs(collection(db, "posts"))

  return (
    <div>
      {posts.docs.map((doc) => {
        const key = doc.id
        const {id, tags, created_at} = doc.data()
        return key
      })}
    </div>
  )
}

export default PostsPage
