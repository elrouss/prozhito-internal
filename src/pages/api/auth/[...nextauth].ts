import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import routes from '@/utils/routes';
import users from '@/utils/mock/users';

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', required: true },
        password: { label: 'Пароль', type: 'password', required: true },
      },

      // @ts-ignore (because of mock data)
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) return null;

        const currentUser = users.find((user) => user.email === email);

        if (currentUser && currentUser.password === password) {
          const { name } = currentUser;

          return { email, name };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async session({ session, token }) {
      const { iat, exp, jti } = token;

      return {
        ...session,
        user: { ...session.user, accessToken: { iat, exp, jti } },
      };
    },
  },

  pages: {
    signIn: routes.base,
  },
});
