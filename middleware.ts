import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from "@/auth";
 
export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/discounts/create')) {
        const session = await auth();
        if(!session){
            return NextResponse.redirect(new URL('/api/auth/signin', request.url))
        }
    }
}