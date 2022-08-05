import { motion } from "framer-motion";
import { FC } from "react";
import { getListPopInProps } from "../../../assets/constants/motionProps";
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
          <div>Major libraries/tools used:</div>
          <div className="list-items">
            {list.map(({ icon, link, title }, idx) => (
              <motion.div
                {...getListPopInProps(idx)}
                className="item"
                key={idx}
              >
                <img className="icon" src={icon} alt={title} />
                <div className="title">{title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </LibrariesUsedContainer>
  );
};

export default LibrariesUsed;
