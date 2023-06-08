import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { randomBytes } from 'crypto';

const comments: Record<string, Array<unknown | number>> = {};

@Controller('comment')
export class CommentController {
  @Get('/post/:id')
  getcommentByPostId(@Param('id') id: string): unknown {
    return comments[id] || {};
  }

  @Post('/post/:id')
  createCommentForPost(
    @Param('id') id: string,
    @Body('content') content: string,
  ): Array<unknown> {
    const commentId = randomBytes(4).toString('hex');
    const newComment = { commentId, content };
    const comment = comments[id] || [];
    comment.push(newComment);
    comments[id] = comment;
    return comments[id];
  }
}
