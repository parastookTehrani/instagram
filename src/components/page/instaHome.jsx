import Post from "../Post";
import { InstaLink } from "../instlink";

export function InstaHome() {
  return (
    <div className="flex">
      <aside className="w-1/6 border-r bg-white">
        <InstaLink />
      </aside>
      <main className="flex-1 flex justify-center">
        <div className="max-w-xl w-full">
          <Post />
        </div>
      </main>
    </div>
  );
}
