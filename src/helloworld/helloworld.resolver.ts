import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
  @Query(() => String, {
    description: 'Hola mundo es lo que retorna',
    name: 'Hello',
  })
  helloWorld(): string {
    return 'Hola Mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomNumberFromZeroTo',
    description: 'From zero to argument TO (default 6)',
  })
  getRandomFromZeroTo(@Args('to', { nullable: true, type: () => Int }) to: number = 6): number {
    return Math.floor(Math.random() * to);
  }
}
