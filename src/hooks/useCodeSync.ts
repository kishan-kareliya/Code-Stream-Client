import { useState, useEffect, useRef } from "react";
import socket from "../lib/Socket";
import { debounce } from "lodash";

export const useCodeSync = (
  roomId: string | undefined,
  name: string | null
) => {
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    socket.emit("join-room", { roomId, name });

    socket.on("reflect-code", (newCode) => {
      setCode(newCode);
    });

    return () => {
      socket.off("reflect-code");
    };
  }, [roomId]);

  useEffect(() => {
    socket.on("reflect-output-code", (newOutput) => {
      setOutput(newOutput);
    });

    return () => {
      socket.off("reflect-output-code");
    };
  }, [roomId]);

  const handleCodeChange = debounce((newCode: string) => {
    setCode(newCode);
    socket.emit("change-code", newCode);
    handleTyping(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      handleTyping(false);
    }, 1000);
  }, 50);

  const handleTyping = (isTyping: boolean) => {
    socket.emit("user-typing", { roomId, name, typing: isTyping });
  };

  return { code, setCode, output, setOutput, handleCodeChange };
};
