import User from "../../models/user.model";
import bcrypt from "bcryptjs";

const registerController: (
  name: string,
  email: string,
  password: string
) => Promise<{
  status: "ok" | "error";
  description?: string;
}> = async (name, email, password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    return { status: "ok" };
  } catch (error) {
    return { status: "error", description: JSON.stringify(error) };
  }
};

const loginController = async (email: string, password: string) => {
  const user = await User.findOne({
    email: email,
  });

  if (user) {
    if (user.password) {
      return bcrypt.compareSync(password, user.password);
    }
    console.error(
      "Something went worng, there is no password for this user. Probably this is a bug!"
    );
    return false;
  }
  console.error("User doesn't exists in the database.");
  return false;
};

const findUserController = async (email: string) => {
  const user = await User.findOne({
    email: email,
  });

  if (user) return true;
  return false;
};

export { registerController, loginController, findUserController };
