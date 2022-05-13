import React from "react";

import Button from "../../components/Button/index";

import { ButtonGuideContainer } from "./styled";

const StyleGuide = () => {
  return (
    <div>
      <ButtonGuideContainer>
        <Button $size="sm">Primary sm</Button>
        <Button disabled>Primary base</Button>
        <Button $size="lg">Primary lg</Button>
      </ButtonGuideContainer>
      <br />

      <ButtonGuideContainer>
        <Button $type="secondary" $size="sm">
          Secondary sm
        </Button>
        <Button $type="secondary">Secondary base</Button>
        <Button $type="secondary" $size="lg" disabled>
          Secondary lg
        </Button>
      </ButtonGuideContainer>
      <br />
      <ButtonGuideContainer>
        <Button $type="gray" $size="sm">
          Gray sm
        </Button>
        <Button $type="gray">Gray base</Button>
        <Button $type="gray" $size="lg" disabled>
          Gray lg
        </Button>
      </ButtonGuideContainer>

      <br></br>
      <Button $type="secondary" $size="lg" width="100%" margin={0}>
        Secondary width 100%
      </Button>
    </div>
  );
};

export default StyleGuide;
