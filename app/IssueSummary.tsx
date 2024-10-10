import { Status } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  closed: number;
  in_progress: number;
}

const IssueSummary = ({ open, closed, in_progress }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    {
      label: "Open Issues",
      value: open,
      status: Status.OPEN,
    },
    {
      label: "Closed Issues",
      value: closed,
      status: Status.CLOSED,
    },
    {
      label: "In Progress Issues",
      value: in_progress,
      status: Status.IN_PROGRESS,
    },
  ];

  return (
    <Flex gap={"4"}>
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction={"column"} gap={"1"}>
            <Link
              className="text-sm font-medium"
              href={`/issues?status=${container.status}`}
            >
              {container.label}
            </Link>
            <Text size={"5"} className="font-bold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
