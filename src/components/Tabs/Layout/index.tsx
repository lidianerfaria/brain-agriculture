import { useState } from "react";
import { ITabsLayout } from "../data";
import { TabTitle } from "../../TabTitle";

import S from "./styles";

export const Tabs = ({ children, ...props }: ITabsLayout) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <S.Container {...props}>
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            index={index}
            setSelectedTab={setSelectedTab}
            title={item.props.title}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </S.Container>
  );
};
