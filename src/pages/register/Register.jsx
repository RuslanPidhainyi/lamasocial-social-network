import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            adipisci maiores atque sit numquam. Eaque, asperiores! Quis dolorem
            nisi, iusto optio fugit perferendis et ullam, asperiores error
            quibusdam qui possimus.
          </p>
          <span>Do you have an account?</span>
          <button>Login</button>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
