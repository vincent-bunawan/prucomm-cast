import connectDB from "../../../utils/connectDB";
import Users from "../../../models/userModel";
import valid from "../../../utils/valid";
import bcrypt from "bcrypt";

connectDB();
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  // console.log(`auth.register req ${req}`);
  // console.log(`auth.register res ${res}`);

  try {
    const { name, email, password, cf_password } = req.body;

    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(cf_password);

    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return res.status(400).json({ err: errMsg });

    const user = await Users.findOne({ email });
    if (user)
      return res.status(400).json({ err: "This email already exists." });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new Users({
      name,
      email,
      password: passwordHash,
      // cf_password,
    });

    await newUser.save();
    return res.status(200).json({ msg: "Register Success!" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
