export default function truncateText(
    text: string,
    startChars: number,
    endChars: number = 0,
    separator: string = "..."
  ) {
    const { length } = text
  
    return length <= startChars + endChars
      ? text
      : `${text.substring(0, startChars)}${separator}${text.substring(
          length - (typeof endChars === "number" ? endChars : length)
        )}`
  }
  