import React from 'react';
import Layout from '../../Layout';
import Collapse from '../../components/UI/Collapse';

function Faq() {
  const items = [
    {
      key: 1,
      title: 'NFT? ERC-721 Tokens?',
      collapsed: true,
      children:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia\n' +
        '          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      key: 2,
      title: 'What is NFT History?',
      collapsed: false,
      children:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia\n' +
        '          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      key: 3,
      title: 'How do we turn Dates to NFT?',
      collapsed: false,
      children:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia\n' +
        '          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      key: 4,
      title: 'What is the purpose?',
      collapsed: false,
      children:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia\n' +
        '          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      key: 5,
      title: 'How does it work?',
      collapsed: false,
      children:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia\n' +
        '          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      key: 6,
      title: 'What is HSY?',
      collapsed: false,
      children:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia\n' +
        '          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      key: 7,
      title: 'How do I get HSY?',
      collapsed: false,
      children:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia\n' +
        '          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      key: 8,
      title: 'How can i burn a date?',
      collapsed: false,
      children:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia\n' +
        '          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      key: 9,
      title: 'What is NFT History?',
      collapsed: false,
      children:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia\n' +
        '          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];

  return (
    <Layout>
      <div className="text-white text-20">Need Some Faq ?</div>
      <div className="text-white text-14 font-light mt-2.5">
        “I don’t know. But, I’ll find out for you.”
      </div>
      <div className="mt-7">
        {items.map((i) => (
          <Collapse key={i.key} title={i.title} collapsed={i.collapsed}>
            <p className="text-white text-opacity-75 mt-3">{i.children}</p>
          </Collapse>
        ))}
      </div>
    </Layout>
  );
}

export default Faq;
