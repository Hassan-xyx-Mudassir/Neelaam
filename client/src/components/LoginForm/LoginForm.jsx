import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { token, uid } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("uid", uid);

      console.log("Login successful");

      // Put redirect code here
    } catch (err) {
      console.error("Error during login:", err);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-zinc-950 border-0 max-w-sm">
      <CardHeader>
        <CardTitle className="text-white text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label
              className="text-white font-semibold text-base"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-white"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label
                className="text-white font-semibold text-base"
                htmlFor="password"
              >
                Password
              </Label>
              {/* <Link
                to="/signup"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link> */}
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-white"
            />
          </div>
          <Button
            variant="outline"
            type="submit"
            className="w-full font-semibold hover:bg-neutral-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
          {error && <p className="text-1xl self-center ">{error}</p>}
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{""}
          {/* <Link to="/signup" className="underline">
            Sign up
          </Link> */}
        </div>
      </CardContent>
    </Card>
  );
}
