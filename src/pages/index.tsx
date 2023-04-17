import { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import convertLowercase from '@/modules/conversion/lowercase';
import convertReverse from '@/modules/conversion/reverse';
import convertTitlecase from '@/modules/conversion/titlecase';
import convertUppercase from '@/modules/conversion/uppercase';
import { Main } from '@/templates/Main';

const Index = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  return (
    <Main
      meta={
        <Meta
          title="Stringer"
          description="Stringer is the best string manipulation website."
        />
      }
    >
      <h1 className="mb-2 text-2xl font-bold">Stringer</h1>
      <div className="mt-4">
        <label className="text-lg font-bold" htmlFor="input">
          Input
        </label>
        <textarea
          onChange={handleInput}
          id="input"
          className="mt-2 h-40 w-full rounded border border-gray-300 p-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-lg font-bold" htmlFor="output">
          Output
        </label>
        <textarea
          id="output"
          readOnly
          value={output}
          className="mt-2 h-40 w-full rounded border border-gray-300 p-2"
        />
      </div>
      <div className="flex gap-2 pt-6">
        <button
          onClick={() => {
            setOutput(convertUppercase(input));
          }}
          className="rounded bg-cyan-600 px-5 py-3 text-base font-bold tracking-wide text-white hover:bg-cyan-700"
        >
          Uppercase
        </button>
        <button
          onClick={() => {
            setOutput(convertLowercase(input));
          }}
          className="rounded bg-cyan-600 px-5 py-3 text-base font-bold tracking-wide text-white hover:bg-cyan-700"
        >
          Lowercase
        </button>
        <button
          onClick={() => {
            setOutput(convertTitlecase(input));
          }}
          className="rounded bg-cyan-600 px-5 py-3 text-base font-bold tracking-wide text-white hover:bg-cyan-700"
        >
          Titlecase
        </button>
        <button
          onClick={() => {
            setOutput(convertReverse(input));
          }}
          className="rounded bg-cyan-600 px-5 py-3 text-base font-bold tracking-wide text-white hover:bg-cyan-700"
        >
          Reverse
        </button>
      </div>
    </Main>
  );
};

export default Index;
