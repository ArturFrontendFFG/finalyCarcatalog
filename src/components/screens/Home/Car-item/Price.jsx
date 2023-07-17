import React from "react";

const Price = ({price}) => {
  return (
    <div>
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          currencyDisplay: "narrowSymbol",
        }).format(price)}
      </p>
    </div>
  );
};

export default React.memo(Price);
