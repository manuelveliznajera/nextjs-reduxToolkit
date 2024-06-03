import { WidgetsGrid } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-w text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>

        <WidgetsGrid />
     
    </div>
  );
}