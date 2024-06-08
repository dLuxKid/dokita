import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="p-[5%] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <h3 className="text-black">Subscribe to our newsletter</h3>
        <form className="flex items-center justify-center gap-6 w-full">
          <Input
            className="rounded-full w-full max-w-xl border-none pl-6"
            placeholder="Enter your email"
          />
          <Badge className="h-[66px] flex items-center justify-center">
            Subscribe
          </Badge>
        </form>
      </div>
    </section>
  );
}
