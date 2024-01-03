import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import BookService from "../services/book.service";
import Book, { InputCreateBook } from "../entities/book.entity";
import { MyContext } from "..";
import { error } from "console";

@Resolver()
export default class BookResolver {
@Authorized()
@Query(() => [Book])
async books() {
  return await new BookService().listBooks();
}

@Mutation(() => Book)
  async createBook(@Arg("infos") infos: InputCreateBook) {
    const newBook = await new BookService().createBook(infos);
    return newBook;
  }
}
