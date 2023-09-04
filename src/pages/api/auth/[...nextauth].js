import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import routes from '@/utils/routes';
import users from '@/utils/mock/users';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'domain account',
      credentials: {
        email: { label: 'Email', type: 'email', required: true },
        password: { label: 'Пароль', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) return null;

        const currentUser = users.find(
          (user) => user.email === credentials.email,
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { name } = currentUser;

          return { name };
        }

        return null;
      },
    }),
  ],

  session: {
    jwt: true,
  },

  pages: {
    signIn: routes.base,
  },
};
export default NextAuth(authOptions);
