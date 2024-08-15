import { NextResponse } from 'next/server';
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/prisma/client";

export async function GET() {
  try {
    const clerkUser = await currentUser();
    if (!clerkUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const email = clerkUser.emailAddresses[0].emailAddress as string;

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { email, name: clerkUser?.firstName },
      });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}