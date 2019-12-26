import React from 'react';

import { storiesOf } from '@storybook/react';
import ResultModal from '..';

storiesOf('molecules/ResultModal', module)
  .add('Lost', () => <ResultModal open header="You Lost!" description="負けました。" />)
  .add('Won', () => <ResultModal open header="Congratulation!" description="勝利しました！" />);
