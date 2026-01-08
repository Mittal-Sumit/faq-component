import FaqItem from "./FaqItem";

const data = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

const Faq = () => {
  return (
    <div className=" text-center min-h-screen bg-[#000080]">
      <div className=" text-5xl text-white font-bold pt-3">Frequently Asked Questions</div>
      <div>
        {data.map((faq, index) => {
          return <FaqItem key={index} faq={faq} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
