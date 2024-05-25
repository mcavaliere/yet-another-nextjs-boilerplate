import { Heading } from "@/components/Heading";
import { TestButton } from "./TestButton";

export default function AdminDashboard() {
  return (
    <div className="w-full p-4 md:px-10">
      <Heading size="h1" tagName="h1">
        Admin Dashboard
      </Heading>
      <p>Admin-only features can be placed here.</p>

      <hr />

      <Heading size="h2" tagName="h2">
        Transactional Email
      </Heading>

      <TestButton />
    </div>
  );
}
