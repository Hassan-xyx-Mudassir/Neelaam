import { useState } from "react";
// import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

export function SignupForm() {
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
        "http://localhost:3000/auth/register",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Signup successful:", response.data);
    } catch (err) {
      console.error("Error during Signup:", err);
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
        <CardTitle className="text-white text-2xl">Signup</CardTitle>
        <CardDescription>
          Enter your information to create an account
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
            />
          </div>
          <div className="grid gap-2">
            <Label
              className="text-white font-semibold text-base"
              htmlFor="password"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            variant="outline"
            type="submit"
            className="w-full font-semibold hover:bg-neutral-300"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Signup"}
          </Button>
          {error && <p className="text-1x1 self-center">{error}</p>}
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{""}
          {/* <Link to="/login" className="underline">
            Login
          </Link> */}
        </div>
      </CardContent>
    </Card>
  );
}
