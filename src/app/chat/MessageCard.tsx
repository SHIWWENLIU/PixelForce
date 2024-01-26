import React from 'react'

interface MessageCardProp{
    name:string;
    date:string;
    content:string
}

const MessageCard:React.FC<MessageCardProp> = ({name,date,content})=>{
  return (
    <div
    className={(`
      w-full 
      relative 
      flex 
      items-center 
      space-x-3 
      p-3 
      hover:bg-neutral-100
      rounded-lg
      transition
      cursor-pointer
      `
    )}
  >
    <div className="min-w-0 flex-1">
      <div className="focus:outline-none">
        <span className="absolute inset-0" aria-hidden="true" />
        <div className="flex justify-between items-center mb-1">
          <p className="text-md font-medium text-gray-900">
           {name}
          </p>
    
            <p 
              className="
                text-xs 
                text-gray-400 
                font-light
              "
            >
              {date}
            </p>
        </div>
        <p 
          className={(`
            truncate 
            text-sm
            `
          )}>
            {content}
          </p>
      </div>
    </div>
  </div>
  )
}
export default MessageCard;