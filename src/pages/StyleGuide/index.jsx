import React from "react";

import Button from "../../components/Button/index";

const StyleGuide = () => {
  return (
    <div>
      <Button size="sm">Primary sm</Button>
      <Button disabled>Primary base</Button>
      <Button size="lg">Primary lg</Button>
      <br></br>
      <Button type="secondary" size="sm">
        Secondary sm
      </Button>
      <Button type="secondary">Secondary base</Button>
      <Button type="secondary" size="lg">
        Secondary lg
      </Button>
      <br></br>
      <Button type="gray" size="sm">
        Gray
      </Button>
      <Button type="gray">Gray</Button>
      <Button type="gray" size="lg" disabled>
        Gray
      </Button>

      <br></br>
      <Button type="secondary" size="lg" width="100%" margin={0}>
        Secondary width 100%
      </Button>
    </div>
  );
};

export default StyleGuide;
