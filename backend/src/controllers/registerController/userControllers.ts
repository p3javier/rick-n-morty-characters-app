import User from "../../models/user.model";
const registerController: (
  name: string,
  email: string,
  password: string
) => Promise<{
  status: "ok" | "error";
  description?: string;
}> = async (name, email, password) => {
  try {
    await User.create({
      name: name,
      email: email,
      password: password,
    });
    return { status: "ok" };
  } catch (error) {
    return { status: "error", description: JSON.stringify(error) };
  }
};

const loginController = async (email: string, password: string) => {
  const user = await User.findOne({
    email: email,
    password: password,
  });

  if (user) return true;
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
