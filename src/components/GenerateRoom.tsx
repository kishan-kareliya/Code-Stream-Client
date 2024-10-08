import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyIcon, CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { generateRoom } from "@/lib/api";
import { LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GenerateRoom: React.FC = () => {
  const [roomId, setRoomId] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    generateRoomId();
  }, []);

  const generateRoomId = () => {
    const newRoomId = Math.random().toString(36).substring(2, 25).toUpperCase();
    setRoomId(newRoomId);
  };

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await generateRoom({ roomId, name });
      if (response) {
        const token = response.token;
        if (sessionStorage.getItem("token")) {
          sessionStorage.removeItem("token");
        }
        sessionStorage.setItem("token", token);
        console.log(response);
        navigate(`/editor/${roomId}`);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Failed to generate the room. Please try again.",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name-generate" className="text-white">
          Your Name
        </Label>
        <Input
          type="text"
          id="name-generate"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          className="bg-gray-700 text-white border-gray-600"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="roomId-generate" className="text-white">
          Room ID
        </Label>
        <div className="flex space-x-2">
          <Input
            type="text"
            id="roomId-generate"
            value={roomId}
            readOnly
            className="flex-grow bg-gray-700 text-white border-gray-600"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={copyRoomId}
            className="bg-gray-700 border-gray-600 hover:bg-gray-600"
          >
            {isCopied ? (
              <CheckIcon className="h-4 w-4 text-green-500" />
            ) : (
              <CopyIcon className="h-4 w-4 text-white" />
            )}
          </Button>
        </div>
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] text-white"
      >
        {loading ? <LoaderCircle className="animate-spin" /> : "Create Room"}
      </Button>
    </form>
  );
};

export default GenerateRoom;
