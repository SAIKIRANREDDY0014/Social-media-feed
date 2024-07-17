import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Postlist as pl } from "../store/Post-list-store";

function Post({ post }) {
  const { deletepost } = useContext(pl);

  return (
    <div className="card cardstyle" style={{ width: "280px" }}>
      <div className="card-body">
        <h5 className="card-title">{post.cardtitle}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletepost(post.id)}
        >
          <MdDelete />
        </span>

        <p className="card-text ">{post.desc}</p>
        {post.hashtags.map((tag) => (
          <span className="badge text-bg-primary inputstyle" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-secondary reactionsstyle" role="alert">
          There are {post.reaction} reactions for this post
        </div>
      </div>
    </div>
  );
}
export default Post;
