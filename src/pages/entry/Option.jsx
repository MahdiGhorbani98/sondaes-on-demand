import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

export default function Option({ optionType }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItem(res.data))
      .catch((err) => {
        //Handle Error
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItem = item.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <div>{optionItem}</div>;
}
