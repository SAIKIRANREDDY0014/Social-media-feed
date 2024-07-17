import { useContext, useRef } from "react";
import { Postlist } from "../store/Post-list-store";

function Createpost() {
  const { addpost } = useContext(Postlist);
  const titleelement = useRef();
  const descelement = useRef();
  const reactionelement = useRef();
  const useridelement = useRef();
  const hashtagselement = useRef();

  function createaction(event) {
    event.preventDefault();
    const title = titleelement.current.value;
    const description = descelement.current.value;
    const reaction = reactionelement.current.value;
    const userid = useridelement.current.value;
    const hashtags = hashtagselement.current.value;

    addpost(title, description, reaction, userid, hashtags);
    titleelement.current.value = "";
    descelement.current.value = "";
    reactionelement.current.value = "";
    useridelement.current.value = "";
    hashtagselement.current.value = "";
  }

  return (
    <form
      style={{ width: "400px" }}
      className="formstyle"
      onSubmit={createaction}
    >
      <div className="mb-3">
        <label for="cardtitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          ref={titleelement}
          placeholder="enter your post title"
          id="cardtitle"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="desc" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          ref={descelement}
          rows="4"
          id="desc"
          placeholder="Enter your context here "
        ></textarea>
      </div>
      <div className="mb-3">
        <label for="reaction" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          ref={reactionelement}
          placeholder="How many reactions for this post"
          id="reaction id"
        />
      </div>
      <div className="mb-3">
        <label for="userid" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          ref={useridelement}
          placeholder="enter your ID"
          id="user id"
        />
      </div>
      <div className="mb-3">
        <label for="hashtags" className="form-label">
          Hashtags
        </label>
        <input
          type="text"
          className="form-control"
          ref={hashtagselement}
          placeholder="Enter your hashtags using space"
          id="hashtags id"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
export default Createpost;
