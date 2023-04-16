import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Stringer"
          description="Stringer is the best string manipulation website."
        />
      }
    >
      <h1 className="font-bold">Stringer</h1>
    </Main>
  );
};

export default Index;
