import Image from "next/image";
import { clsxm } from "../../lib/clsxm";
import {ClassValue} from 'clsx'
import React from "react";
export const imagePlaceholder =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIACYAJgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAwIBBv/EABgQAQEBAQEAAAAAAAAAAAAAAAABAiER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2VTta1eJa0qKSlqU016DlGbQFtXiG71bSOoDkrXrkjtgM2hQF6nQAhQBigA//2Q==";

  interface Props {
    isNextjs:boolean;
    image_url:any;
    customStyle?: any;
    classes?:ClassValue;
  }

export default function AssetDetailNFTImage(props: Props) {
  return (
    <div style={props?.customStyle} className={clsxm("w-full",props?.classes)}>
      {
        props?.isNextjs ? 
        <Image
          src={`https://res.cloudinary.com/fr0ntier-x/image/fetch/${props?.image_url}`}
          layout="responsive"
          width={488}
          height={488}
          alt="NFT preview"
          className="rounded-[5px]"
        /> :
        <img src={`https://res.cloudinary.com/fr0ntier-x/image/fetch/${props?.image_url}`}  className="h-full w-full object-cover object-center"/>

      }
    </div>
  );
}
