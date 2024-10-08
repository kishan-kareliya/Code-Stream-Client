import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GenerateRoom from "@/components/GenerateRoom";
import JoinRoom from "@/components/JoinRoom";

const RoomPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0A1929] to-[#0F2942]">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-purple-500">
          CodeStream
        </h2>
        <Tabs defaultValue="generate" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-700">
            <TabsTrigger
              value="generate"
              className="data-[state=active]:bg-gray-600 data-[state=active]:text-white text-gray-400"
            >
              Generate Room ID
            </TabsTrigger>
            <TabsTrigger
              value="join"
              className="data-[state=active]:bg-gray-600 data-[state=active]:text-white text-gray-400"
            >
              Join Room
            </TabsTrigger>
          </TabsList>
          <TabsContent value="generate">
            <GenerateRoom />
          </TabsContent>
          <TabsContent value="join">
            <JoinRoom />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RoomPage;
