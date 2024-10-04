import { issueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

// PATCH function - updates an issue by ID
export const PATCH = auth(async function PATCH(req, context: any) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const { params } = context;
  if (!params?.id) {
    return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const validation = issueSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!issue) {
      return NextResponse.json({ error: "Issue not found" }, { status: 404 });
    }

    const updatedIssue = await prisma.issue.update({
      where: { id: parseInt(params.id) },
      data: {
        title: body.title,
        description: body.description,
        status: body.status,
      },
    });

    return NextResponse.json(updatedIssue);
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
});

// DELETE function - deletes an issue by ID
export const DELETE = auth(async function DELETE(req, context: any) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const { params } = context;
  if (!params?.id) {
    return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  }

  try {
    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!issue) {
      return NextResponse.json({ error: "Issue not found" }, { status: 404 });
    }

    await prisma.issue.delete({ where: { id: parseInt(params.id) } });

    return NextResponse.json({ message: "Issue deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
});
