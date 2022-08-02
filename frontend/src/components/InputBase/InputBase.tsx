import React from "react";
import { SetStateType } from "../../types/setStateType";

type InputType = "password" | "email" | "name";

const InputBase = ({
  setValue,
  type,
}: {
  setValue: SetStateType;
  type: InputType;
}) => {
  // eslint-disable-next-line consistent-return
  const label = (type: InputType) => {
    switch (type) {
      case "password":
        return "Password";
      case "email":
        return "Email";
      case "name":
        return "Name";
    }
  };
  return (
    <label>
      <p>{label(type)}</p>
      <input
        type={type === "name" ? "text" : type}
        onChange={(event) => setValue(event.target.value)}
        required
      />
    </label>
  );
};

export default InputBase;
