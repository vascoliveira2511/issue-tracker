import prisma from "@/prisma/client";
import Pagination from "./components/Pagination";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";

export default async function Home() {
  const open = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });

  const closed = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });

  const in_progress = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });

  return <IssueSummary open={open} closed={closed} in_progress={in_progress} />;
}
