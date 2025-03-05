import { Given, When, Then } from '../setup/world'
import BooksPage from 'pages/BooksPage'

When('I add a book to my cart', async function () {
  const booksPage = new BooksPage(this.page)
  await booksPage.goto()
  await booksPage.verifyPageContent()
  await booksPage.addToCart()
})

Then('The cart should have a book in it', async function () {
  const booksPage = new BooksPage(this.page)
  await booksPage.verifyAddedToCart()
})

Then('The cart should have the correct book in it', async function () {
  const booksPage = new BooksPage(this.page)
  await booksPage.verifyCorrectBook
})
