import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();

  const { addPost } = useContext(PostList);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userIdElement = userId.current.value;
    const postTitleElement = postTitle.current.value;
    const postBodyElement = postBody.current.value;
    const reactionsElement = reactions.current.value;
    const tagsElement = tags.current.value.split(" ");

    userId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";

    addPost(
      userIdElement,
      postTitleElement,
      postBodyElement,
      reactionsElement,
      tagsElement
    );
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userId}
          className="form-control"
          id="userId"
          placeholder="Enter your user id here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitle}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          ref={postBody}
          className="form-control"
          id="body"
          placeholder="Tell me more about it."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactions}
          className="form-control"
          id="reactions"
          placeholder="How many poeple reacted for this post..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tags}
          className="form-control"
          id="tags"
          placeholder="Please enter hashtags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
