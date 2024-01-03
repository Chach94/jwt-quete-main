import { Ctx, Query, Resolver } from "type-graphql";
import BookService from "../services/book.service";
import Book from "../entities/book.entity";
import { MyContext } from "..";
import { error } from "console";

@Resolver()
export default class BookResolver {
  @Query(() => [Book])
  async books(@Ctx() ctx: MyContext) {
    if(!ctx.user){
      throw new Error(
        "Connectez-vous pour accéder à la la liste de livres"
      )
    }
    return await new BookService().listBooks();
  }
}
