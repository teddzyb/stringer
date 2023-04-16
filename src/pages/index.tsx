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
      <div className="font-bold">Stringer</div>
    </Main>
  );
};

export default Index;
