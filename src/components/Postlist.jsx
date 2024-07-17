import Post from "./Post";
import { useContext, useEffect } from "react";
import { Postlist as postdata } from "../store/Post-list-store";
import Welcomemsg from "./Welcomemsg";
function Postlist() {
  const {postlist,Addserverposts} = useContext(postdata);
  const onpostclicked = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data) => 
    {Addserverposts(data.posts)}
  );
    


}
  return (
    <>
      <div className="postcont">
        {(postlist.length === 0) && <Welcomemsg onpostclicked = {onpostclicked}/> }

        { postlist.map((post) => (
           <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </>
  );
}
export default Postlist;
