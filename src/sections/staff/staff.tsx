import SectionWrapper from "../section-wrapper";
import SectionHeader from "../section-header";
import StaffCard from "./components/staff-card";
import { Suspense } from "react";
import { ErrorBoundary } from "@/components";
import { StaffActions } from "@/actions";

async function Content() {
  try {
    const response = await StaffActions.getMockStaff();
    if (!response) {
      throw Error("Failed to get images");
    }
    return (
      <div className="flex flex-row flex-wrap w-full gap-8 xl:gap-16 justify-center h-full">
        {response.users.slice(0, 5).map((user) => (
          <StaffCard
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            title={user.company.title}
          />
        ))}
      </div>
    );
  } catch (error) {
    if (error instanceof Error) {
      return <ErrorBoundary svg="x-mark" header={error.message} />;
    }
  }
}

function Fallback() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="loading loading-spinner loading-xl text-primary" />
    </div>
  );
}

export default function StaffSection() {
  return (
    <SectionWrapper id="work" className="xl:p-16 p-8 space-y-8 xl:space-y-16">
      <SectionHeader>Staff</SectionHeader>
      <Suspense fallback={<Fallback />}>
        <Content />
      </Suspense>
    </SectionWrapper>
  );
}
