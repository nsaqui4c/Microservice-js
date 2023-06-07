import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomBytes } from 'crypto';

const posts = {};
class post {
  title: string;
}
@Controller('post')
export class PostController {
  @Get('/')
  getPost(): unknown {
    console.log(' GET - ', posts);
    return { posts };
  }

  @Post('/')
  createPost(@Body() body: post): unknown {
    const id = randomBytes(4).toString('hex');
    const title = body.title;

    posts[id] = { id, title };
    console.log('Post - ', posts);
    return posts;
  }
}
