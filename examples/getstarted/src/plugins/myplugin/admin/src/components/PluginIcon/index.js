/**
 *
 * PluginIcon
 *
 */

import React from 'react';
import { Icon } from '@strapi/design-system/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PluginIcon = () => <Icon as={() => <FontAwesomeIcon icon="plug" />} width="16px" />;

export default PluginIcon;
