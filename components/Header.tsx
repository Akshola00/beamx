import { Button } from "@/components/ui/button";
import { ModeToggle } from "./toggle";

export default function Header() {
  return (
    <header className="w-full bg-none">
      <div className="mx-auto flex w-[60%] bg-background items-center justify-between mt-4 py-4 shadow-inner px-8 rounded-full">
        <h1 className="text-2xl font-bold text-foreground">BeamX</h1>
        <div className="flex items-center justify-center gap-3">
          <Button
            variant="default"
            className="bg-purple-600 text-white hover:bg-purple-700"
          >
            Connect Wallet
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
