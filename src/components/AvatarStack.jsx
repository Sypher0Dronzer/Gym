import React from "react";

const AvatarStack = ({pos}) => {
  return (
    <div className={`flex sm:scale-100 scale-80  flex-col ${pos}` }>

   

    <div className={`flex  items-center -space-x-3 ` }>
      <img
        className="stack-avatar"
        src="https://i.pravatar.cc/100?img=1"
        alt="User 1"
      />
      <img
        className="stack-avatar"
        src="https://i.pravatar.cc/100?img=2"
        alt="User 2"
      />
      <img
        className="stack-avatar"
        src="https://i.pravatar.cc/100?img=3"
        alt="User 3"
      />
      <img
        className="stack-avatar"
        src="https://i.pravatar.cc/100?img=4"
        alt="User 4"
      />

      <div className="w-10 h-10 rounded-full bg-lime ring-1 ring-white flex items-center justify-center text-sm font-medium text-gray-600">
        +1k
      </div>
    </div>
    <p className="text-text-white font-bold tracking-wide mt-1 text-lg font-zalando">Lives Changed</p>
     </div>
  );
};

export default AvatarStack;
