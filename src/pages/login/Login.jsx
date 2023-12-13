//Komponent
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            adipisci maiores atque sit numquam. Eaque, asperiores! Quis dolorem
            nisi, iusto optio fugit perferendis et ullam, asperiores error
            quibusdam qui possimus.
          </p>
          <span>Don't you have an account?</span>
          <button>Register</button>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
