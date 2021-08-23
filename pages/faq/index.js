import React from 'react';
import Layout from '../../Layout';
import Collapse from '../../components/UI/Collapse';
import { questions } from '../../constants/faqData';

function Faq() {
  return (
    <Layout>
      <div className="text-white text-20">Need Some Faq ?</div>
      <div className="text-white text-14 font-light mt-2.5">
        “I don’t know. But, I’ll find out for you.”
      </div>
      <div className="mt-7">
        {questions.map((i) => (
          <Collapse key={i.key} title={i.title} collapsed={i.collapsed}>
            <p className="text-white text-opacity-75 mt-3">{i.children}</p>
          </Collapse>
        ))}
      </div>
    </Layout>
  );
}

export default Faq;
