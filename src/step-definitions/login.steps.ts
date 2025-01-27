import { When, Then } from '../setup/world'
import LoginPage from 'pages/LoginPage'

When(
  'I sign in with the credentials {string} {string}',
  async function (email: string, password: string) {
    this.state.email = email
    this.state.password = password

    const loginPage = new LoginPage(this.page)
    await loginPage.goto()
    await loginPage.verifyPageContent()
    await loginPage.login(email, password)
  }
)

Then('I should be signed in', async function () {
  const loginPage = new LoginPage(this.page)
  await loginPage.verifySignin()
})

Then('I should not be signed in', async function () {
  const loginPage = new LoginPage(this.page)
  await loginPage.verifyInvalidLogin()
})
