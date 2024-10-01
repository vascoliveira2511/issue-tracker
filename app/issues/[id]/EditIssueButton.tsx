import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Link href={`/issues/${issueId}/edit`} passHref legacyBehavior>
      <Button asChild style={{ display: "inline-flex", alignItems: "center" }}>
        <a>
          <Pencil2Icon />
          Edit Issue
        </a>
      </Button>
    </Link>
  );
};

export default EditIssueButton;
