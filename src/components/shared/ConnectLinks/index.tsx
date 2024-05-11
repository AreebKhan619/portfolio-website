import {
  getOnClickAnimationProps,
  getSlideInProps,
} from "../../../assets/constants/motionProps";
import { motion } from "framer-motion";
import { LinksContainerStyled } from "./styled";
import { gql, useQuery } from "@apollo/client";
import { CONNECT_WITH_ME } from "@/connections/contentfulGraphQlLiterals";
import { TConnectCollectionResponse } from "@/ts/connectionModels/response";

interface IConnectLinksProps {
  PrefixComponent?: JSX.Element;
}

const ConnectLinks: React.FC<IConnectLinksProps> = ({ PrefixComponent }) => {
  const { loading, data } = useQuery<TConnectCollectionResponse>(
    gql(CONNECT_WITH_ME)
  );

  if (loading || !data?.connectCollection?.items?.[0])
    return <div>Loading...</div>;

  const socialsItems = data.connectCollection.items[0].socialsCollection.items;

  return (
    <LinksContainerStyled
      as={motion.div}
      {...getSlideInProps()}
      className="links-container"
    >
      {PrefixComponent}
      {socialsItems.map((socials) => {
        return (
          <motion.div key={socials?.sys?.id} {...getOnClickAnimationProps()}>
            <a
              className="link"
              href={socials.url}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                window.analytics.track?.(
                  `Visited social media profile: ` + socials.label
                )
              }
            >
              <img
                style={{ width: 45 }}
                src={socials.icon.url}
                alt={socials.label}
              />
            </a>
          </motion.div>
        );
      })}
    </LinksContainerStyled>
  );
};

export default ConnectLinks;
