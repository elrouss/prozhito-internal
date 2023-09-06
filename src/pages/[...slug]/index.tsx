import { useRouter } from 'next/router';
import Error from 'next/error';
import { Slug } from '@/components/slug/slug';

export const SlugPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (Array.isArray(slug)) {
    switch (slug.length) {
      case 1:
        return <Slug category={slug[0]} />;
      case 2:
        return <Slug category={slug[0]} page={slug[1]} />;
      default:
        return <Error statusCode={404} />;
    }
  }

  return <Error statusCode={404} />;
};

export default SlugPage;
