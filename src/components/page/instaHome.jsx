import Post from "../Post";
import { InstaLink } from "../instlink";

export function InstaHome() {
  return (
    <div className="flex">
      <InstaLink />
      <Post />
    </div>
  );
}
