import { Heading } from "@/components/Heading";
import { TestButton } from "./TestButton";

export default function AdminDashboard() {
  return (
    <>
      <hr />

      <Heading size="h2" tagName="h2">
        Transactional Email
      </Heading>

      <TestButton />
    </>
  );
}
