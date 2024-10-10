"use client";

import { Card } from "@radix-ui/themes";
import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";

interface Props {
  open: number;
  closed: number;
  in_progress: number;
}

const IssueChart = ({ open, closed, in_progress }: Props) => {
  const data = [
    {
      label: "Open",
      value: open,
    },
    {
      label: "In Progress",
      value: in_progress,
    },
    {
      label: "Closed",
      value: closed,
    },
  ];

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            dataKey="value"
            barSize={60}
            style={{ fill: "var(--accent-9)" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
