import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"



export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      console.log(user)
      return true
    },
  }

}
export default NextAuth(authOptions)