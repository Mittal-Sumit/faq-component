'use client'
import { useState, useEffect } from "react";

const FaqItem = ({ faq, index }) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        if(index == 0){
            setIsShow(true);
        }
    }, []);

    const handleClick = () => {
        setIsShow((isShow) => !isShow);
    }

  return (
    <div className=" bg-gray-50 m-2 ">
      <div className=" flex">
        <button className={ `cursor-pointer ${isShow ? "rotate-90" : ""} pl-1`} onClick={handleClick}> {`>`} </button>
        <div className=" pl-3">{faq.question}</div>
      </div>
      {isShow && <div className=" text-left pl-6">{faq.answer}</div>}
    </div>
  );
};

export default FaqItem;
