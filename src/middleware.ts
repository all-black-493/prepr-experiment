import { NextRequest } from 'next/server'
import createPreprMiddleware from '@preprio/prepr-nextjs/middleware'
 
export async function middleware(request: NextRequest) {
    return createPreprMiddleware(request, { preview: true })
}