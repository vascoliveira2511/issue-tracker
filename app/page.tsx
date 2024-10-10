import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";

export default async function Home() {
  const issueCounts = await Promise.all([
    prisma.issue.count({ where: { status: "OPEN" } }),
    prisma.issue.count({ where: { status: "CLOSED" } }),
    prisma.issue.count({ where: { status: "IN_PROGRESS" } }),
  ]);

  const [open, closed, inProgress] = issueCounts;

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary open={open} closed={closed} in_progress={inProgress} />
        <IssueChart open={open} closed={closed} in_progress={inProgress} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}
