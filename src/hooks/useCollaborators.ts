import { useState, useEffect } from "react";
import socket from "../lib/Socket";

interface User {
  name: string;
  image: string;
  typing: boolean;
}

export const useCollaborators = () => {
  const [userlist, setUserList] = useState<User[]>([]);

  useEffect(() => {
    socket.on("update-users", (updatedUsers: User[]) => {
      setUserList(updatedUsers);
    });

    socket.on(
      "user-typing",
      (userTypingData: { name: string; typing: boolean }) => {
        setUserList((prevUsers) =>
          prevUsers.map((user) =>
            user.name === userTypingData.name
              ? { ...user, typing: userTypingData.typing }
              : user
          )
        );
      }
    );

    return () => {
      socket.off("update-users");
      socket.off("user-typing");
    };
  }, []);

  return { userlist };
};
