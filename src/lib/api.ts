import axios from "axios";
const CODE_EXECUTION_API = import.meta.env.VITE_CODE_EXECUTION_API || "";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

interface ExecuteCodeParams {
  code: string;
  language: string;
  version: string;
}

export const executeCode = async ({
  code,
  language,
  version,
}: ExecuteCodeParams) => {
  try {
    const response = await axios.post(CODE_EXECUTION_API, {
      language,
      version,
      files: [
        {
          content: code,
        },
      ],
    });
    return response.data.run.output;
  } catch (error) {
    console.error("Error executing code:", error);
    throw error;
  }
};

interface RoomParams {
  roomId: string;
  name: string;
}

export const generateRoom = async ({ roomId, name }: RoomParams) => {
  try {
    const response = await axios.post(VITE_BACKEND_URL + "/api/generate-room", {
      roomId,
      name,
    });
    return response.data;
  } catch (error) {
    console.error(`Error in post request:`, error);
    throw error;
  }
};

export const joinRoom = async ({ roomId, name }: RoomParams) => {
  try {
    const response = await axios.post(VITE_BACKEND_URL + "/api/user-join", {
      roomId,
      name,
    });
    return response.data;
  } catch (error) {
    console.error(`Error in post request:`, error);
    throw error;
  }
};
