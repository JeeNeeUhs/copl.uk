import Link from 'next/link';
import { CalendarFold } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';

export default function Hover({ user }) {
  return (
    <HoverCard>
      <HoverCardTrigger className='text-sm hover:underline flex items-center gap-2'>
        <Link href={`/app/users/${user.username}`}>{user.display_name}</Link>
        {user.role === 'admin' && (
          <Badge className='rounded-sm py-[1px] px-1 pointer-events-none'>
            admin
          </Badge>
        )}
      </HoverCardTrigger>
      {/* TODO: set z-index to make the hover card appear on top */}
      <HoverCardContent className='flex flex-col w-fit' align='start'>
        <div className='flex items-start'>
          <div className='mr-3 w-10 h-10 rounded-lg bg-zinc-800'></div>
          <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <div className='text-sm'>{user.display_name}</div>
              {user.role === 'admin' && (
                <Badge className='rounded-sm py-[1px] px-1 pointer-events-none'>
                  admin
                </Badge>
              )}
            </div>
            <div className='text-xs text-zinc-400'>@{user.username}</div>
          </div>
        </div>
        <div className='mt-3'>
          <div className='text-sm mb-2'>{user.about}</div>
          <div className='text-xs'>
            <div className='text-zinc-400 flex items-center mb-0.5'>
              <CalendarFold className='w-4 h-4 mr-1' />
              {new Date(user.created_at.T * 1000).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
