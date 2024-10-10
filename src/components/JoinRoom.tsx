import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { joinRoom } from "@/lib/api";
import { LoaderCircle } from "lucide-react";

const JoinRoom: React.FC = () => {
  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await joinRoom({ roomId, name });
      if (response) {
        const token = response.token;
        if (sessionStorage.getItem("token")) {
          sessionStorage.removeItem("token");
        }
        sessionStorage.setItem("token", token);
        navigate(`/editor/${roomId}`);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Failed to join the room. Please try again.",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name-join" className="text-white">
          Your Name
        </Label>
        <Input
          type="text"
          id="name-join"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          className="bg-gray-700 text-white border-gray-600"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="roomId-join" className="text-white">
          Room ID
        </Label>
        <Input
          type="text"
          id="roomId-join"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Enter Room ID"
          required
          className="bg-gray-700 text-white border-gray-600"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] text-white"
        disabled={loading} // Disable button during loading
      >
        {loading ? <LoaderCircle className="animate-spin" /> : "Join Room"}
      </Button>
    </form>
  );
};

export default JoinRoom;
