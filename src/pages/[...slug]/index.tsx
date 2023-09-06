import { useRouter } from 'next/router';
import { Slug } from '@/components/slug/slug';

const SlugPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (Array.isArray(slug)) {
    switch (slug.length) {
      case 1:
        return <Slug category={slug[0]} />;
      case 2:
        return <Slug category={slug[0]} page={slug[1]} />;
      default:
        return <h1>Недопустимый адрес</h1>;
    }
  }

  return <h1>Недопустимый адрес</h1>;
};

export default SlugPage;
