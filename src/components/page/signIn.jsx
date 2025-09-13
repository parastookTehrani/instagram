
import instagram from "../../assets/insta logo.svg";
export function SignIn(username, password) {
  return (
    <main>
      <div>
        <img src={instagram} alt="" />
      </div>
      <form action="">
        <input type="text" />
        <input type="password" />
        <button>Log in</button>
        <p>Don’t have an account?<span>Sign up</span></p>

      </form>
    </main>
  );
}
