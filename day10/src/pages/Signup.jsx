// Signup.jsx

import Article from "../atom/Article";
import Button from "../atom/Button";
import Input from "../atom/Input";
import Label from "../atom/Label";

const Signup = () => {
  return (
    <div className="container">
      <Article>
        <form>
          <Label htmlFor="name">name</Label>
          <Input id="name" required />
          <Label htmlFor="password">password</Label>
          <Input id="password" required />
          <hr className="m-4" />
          <Button>submit</Button>
        </form>
      </Article>
    </div>
  );
};

export default Signup;
