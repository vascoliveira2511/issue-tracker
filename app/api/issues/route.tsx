import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "@/app/validationSchemas";
import { auth } from "@/auth";

export const POST = auth(async function POST(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const validation = issueSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const newIssue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
});
