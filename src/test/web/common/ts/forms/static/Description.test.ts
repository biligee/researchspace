/**
 * ResearchSpace
 * Copyright (C) 2020, © Trustees of the British Museum
 * Copyright (C) 2015-2019, metaphacts GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { createElement } from 'react';
import { expect } from 'chai';

import { Description, StaticFieldProps, normalizeFieldDefinition } from 'platform/components/forms';

import { shallow } from 'platform-tests/configuredEnzyme';
import { mockLanguagePreferences } from 'platform-tests/mocks';

import { FIELD_DEFINITION } from '../fixturies/FieldDefinition';

mockLanguagePreferences();

const PROPS: StaticFieldProps = {
  for: 'test',
  definition: normalizeFieldDefinition(FIELD_DEFINITION),
  model: undefined,
};

describe('Description', () => {
  const descriptionComponent = shallow(createElement(Description, PROPS));

  describe('render', () => {
    it('as span', () => {
      expect(descriptionComponent.find('span')).to.have.length(1);
    });

    it('with proper classname', () => {
      expect(descriptionComponent.find('.field-description')).to.have.length(1);
    });

    it('with correct inner text', () => {
      expect(descriptionComponent.text()).to.be.equal(FIELD_DEFINITION.description);
    });
  });
});
