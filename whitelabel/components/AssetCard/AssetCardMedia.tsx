import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { clsxm } from "../../lib/clsxm";
import { ClassValue } from 'clsx';
type Props = {
    tokenAddress?: string;
    tokenId?: string;
    isNextjs:boolean;
    imageUrl: string;
    bootstrapStyle?:any;
    classes?: ClassValue;
}
export const imagePlaceholder =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIACYAJgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAwIBBv/EABgQAQEBAQEAAAAAAAAAAAAAAAABAiER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2VTta1eJa0qKSlqU016DlGbQFtXiG71bSOoDkrXrkjtgM2hQF6nQAhQBigA//2Q==";

const AssetCardMedia = (props:Props) => {
    
  return (
    <div>
        <div className={clsxm("relative aspect-square w-full", props?.classes)}>
          {props?.isNextjs ? 
          
        <Link href={`/asset/${props.tokenAddress}/${props.tokenId}`}>
          <a>
            <Image
              layout="fill"
              src={`https://res.cloudinary.com/fr0ntier-x/image/fetch/${props.imageUrl}`}
              className="h-full w-full object-cover object-center"
              placeholder="blur"
              blurDataURL={imagePlaceholder}
            />
          </a>
        </Link> :
        <a href={`/asset/${props.tokenAddress}/${props.tokenId}`}>
          <img src={`https://res.cloudinary.com/fr0ntier-x/image/fetch/${props.imageUrl}`}  className="h-full w-full object-cover object-center"/>
        </a>
        }
      </div>
    </div>
  )
}

export default AssetCardMedia