import { Button } from "@/components/ui/button";
import { ArrowLeft, Code2, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1117] text-white p-4">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-purple-500">404</h1>
          <h2 className="text-3xl font-semibold">Page Not Found</h2>
        </div>
        <p className="text-lg text-gray-400">
          Oops! It looks like you’ve entered unknown code territory.
        </p>
        <div className="flex justify-center space-x-4">
          <Code2 className="text-purple-500 w-12 h-12 animate-pulse" />
          <Zap className="text-purple-500 w-12 h-12 animate-bounce" />
        </div>
        <div className="bg-[#1c2128] p-6 rounded-lg shadow-lg">
          <p className="text-purple-400 font-mono">
            &lt;error&gt;
            <br />
            &nbsp;&nbsp;404_PAGE_NOT_FOUND
            <br />
            &lt;/error&gt;
          </p>
        </div>
        <Button
          asChild
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Link to="/" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
