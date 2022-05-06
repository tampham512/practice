import React from "react";

import Button from "../../components/Button/index";

const StyleGuide = () => {
  return (
    <div>
      <Button size="sm">Primary sm</Button>
      <Button disabled>Primary base</Button>
      <Button size="lg">Primary lg</Button>
      <br></br>
      <Button typeButton="secondary" size="sm">
        Secondary sm
      </Button>
      <Button typeButton="secondary">Secondary base</Button>
      <Button typeButton="secondary" size="lg">
        Secondary lg
      </Button>
      <br></br>
      <Button typeButton="gray" size="sm">
        Gray
      </Button>
      <Button typeButton="gray">Gray</Button>
      <Button typeButton="gray" size="lg" disabled>
        Gray
      </Button>

      <br></br>
      <Button typeButton="secondary" size="lg" fullWidth>
        Secondary lg
      </Button>
    </div>
  );
};

export default StyleGuide;
