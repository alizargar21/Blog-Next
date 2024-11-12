import ButtonIcon from '@/ui/ButtonIcon'
import { toPersianDigits } from '@/utils/NumberFormatter'
import { BookmarkIcon, ChatBubbleLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import React from 'react'

function PostInteraction({commentsCount}) {
  return (
    <div className='flex items-center gap-x-4'>
          <ButtonIcon variant="secondary">
                    <ChatBubbleLeftEllipsisIcon />
                    <span>{toPersianDigits(commentsCount)}</span>
          </ButtonIcon>
          <ButtonIcon variant="red">
                    <HeartIcon />
          </ButtonIcon>
          <ButtonIcon variant="primary">
                    <BookmarkIcon />
          </ButtonIcon>
    </div>
  )
}

export default PostInteraction