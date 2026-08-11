/*
 * Copyright 2025 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { render, screen } from '@testing-library/react';
import { TestContext } from '../../../../test';
import { DetailsGridContext } from '../../../DetailsViewSection/detailsViewSectionSlice';
import { MainInfoSection } from './MainInfoSection';

describe('MainInfoSection', () => {
  it('shows the back link by default', () => {
    render(
      <TestContext>
        <MainInfoSection resource={null} backLink="" />
      </TestContext>
    );

    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
  });

  it('hides the back link in a details panel', () => {
    render(
      <TestContext>
        <DetailsGridContext.Provider value={{ isInPanel: true }}>
          <MainInfoSection resource={null} backLink="" />
        </DetailsGridContext.Provider>
      </TestContext>
    );

    expect(screen.queryByRole('button', { name: 'Back' })).not.toBeInTheDocument();
  });
});
