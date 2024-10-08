'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Markdown from 'react-markdown';
import Dropdown from '@/components/app/Post/Dropdown';
import LikeButton from '@/components/app/Post/LikeButton';
import CommentButton from '@/components/app/Post/CommentButton';
import UserInfo from '@/components/app/User/Info';
import DateTooltip from '@/components/app/Tooltip/Date';

export default function Post({ post: initialPost, onDelete, onNewComment }) {
  const [post, setPost] = useState(initialPost);
  const pathname = usePathname();

  return (
    <div className='p-5 bg-zinc-900 rounded-lg'>
      <div className='flex items-center justify-between mb-3'>
        <UserInfo user={post.author} />
        <Dropdown post={post} setPost={setPost} onDelete={onDelete} />
      </div>
      <div className='relative'>
        <Markdown className='md'>
          {pathname.includes('/app/posts/') || post.content.length <= 200
            ? post.content
            : post.content.slice(0, 200) + '...'}
        </Markdown>
        {!pathname.includes('/app/posts/') && post.content.length > 200 && (
          <div className='absolute bottom-0 right-0 bg-gradient-to-b from-transparent to-zinc-900 w-full h-full'></div>
        )}
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <div className='flex gap-2'>
          <LikeButton post={post} setPost={setPost} />
          <CommentButton
            post={post}
            setPost={setPost}
            onNewComment={onNewComment}
          />
        </div>
        <DateTooltip created_at={post.created_at} updated_at={post.updated_at} />
      </div>
    </div>
  );
}
