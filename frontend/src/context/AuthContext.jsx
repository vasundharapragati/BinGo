import React, { createContext, useContext, useMemo, useState } from "react";
import { storage } from "../utils/storage";

const AuthCtx = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(storage.getCurrent());

  const api = useMemo(
    () => ({
      user,
      signIn: ({ email, password }) => {
        const users = storage.getUsers();
        const found = users.find((u) => u.email === email && u.password === password);
        if (!found) throw new Error("Invalid email or password.");
        storage.setCurrent(found);
        setUser(found);
        return found;
      },
      signUp: ({ name, email, phone, password }) => {
        const users = storage.getUsers();
        if (users.some((u) => u.email === email)) throw new Error("Account already exists.");
        const newUser = { id: crypto.randomUUID(), name, email, phone, password, location: "Noida" };
        users.push(newUser);
        storage.setUsers(users);
        storage.setCurrent(newUser);
        setUser(newUser);
        return newUser;
      },
      signOut: () => {
        storage.signOut();
        setUser(null);
      },
    }),
    [user]
  );

  return <AuthCtx.Provider value={api}>{children}</AuthCtx.Provider>;
}

export const useAuth = () => useContext(AuthCtx);
