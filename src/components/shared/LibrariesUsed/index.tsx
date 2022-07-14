import { FC } from "react";
import { LibrariesUsedContainer } from "./styled";

interface ILibrariesUsed {
  list: any[];
}
const LibrariesUsed: FC<ILibrariesUsed> = ({ list }): JSX.Element => {
  return (
    <LibrariesUsedContainer>
      <div className="list">
        <div className="bg-img"></div>
        <div className="content">
          <div>Libraries/Tools I used:</div>
          <div className="list-items">
            {list.map(({ icon, link, title }, idx) => (
              <div className="item" key={idx}>
                <img className="icon" src={icon} alt={title} />
                <div className="title">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LibrariesUsedContainer>
  );
};

export default LibrariesUsed;
