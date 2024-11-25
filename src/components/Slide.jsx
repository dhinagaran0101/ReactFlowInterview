import { Remark } from 'react-remark';
 
export const SLIDE_WIDTH = 200;
export const SLIDE_HEIGHT = 200;
 
const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
};
 
export function Slide({ data }) {
  return (
    <article className="slide nodrag" style={style}>
      <Remark>{data.source}</Remark>
    </article>
  );
}