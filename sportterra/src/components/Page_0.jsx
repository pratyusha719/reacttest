import React, { useState } from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPill from 'terra-icon/lib/icon/IconPill';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';
import Placeholder from 'terra-doc-template/lib/Placeholder';
//import ExampleWrapper from './ExampleWrapper';
import ApplicationNavigation from 'terra-application-navigation';
const titleConfig = {
  title: 'Test Title',
};
const userConfig = {
  name: 'Test Name',
  initials: 'TN',
};
const extensionItems = [
  {
    icon: <IconSearch />,
    key: 'item-a',
    text: 'Item A',
    metaData: {
      test: 'a',
    },
  }, {
    icon: <IconPill />,
    key: 'item-b',
    text: 'Item B',
    metaData: {
      test: 'b',
    },
  }, {
    icon: <IconVisualization />,
    key: 'item-c',
    text: 'Item C',
    metaData: {
      test: 'c',
    },
  }, {
    icon: <IconLightbulb />,
    key: 'item-d',
    text: 'Item D',
    metaData: {
      test: 'd',
    },
  },
];
const navigationItems = [
  {
    key: '/page_1',
    text: 'Page 1',
    metaData: {
      display: 'Page 1',
    },
  }, 
];
const utilityItems = [
  {
    icon: <IconSearch />,
    key: 'item-a',
    text: 'Item A',
    metaData: {
      test: 'a',
    },
  }, {
    icon: <IconPill />,
    key: 'item-b',
    text: 'Item B',
    metaData: {
      test: 'b',
    },
  }, {
    icon: <IconVisualization />,
    key: 'item-c',
    text: 'Item C',
    metaData: {
      test: 'c',
    },
  }, {
    icon: <IconLightbulb />,
    key: 'item-d',
    text: 'Item D',
    metaData: {
      test: 'd',
    },
  },
];
const ExampleApplication = ({ onAction }) => {
  const [activeKey, setActiveKey] = useState(navigationItems[0].key);
  return (
    <ApplicationBase locale="en-US">
      <ApplicationNavigation
        titleConfig={titleConfig}
        userConfig={userConfig}
        extensionItems={extensionItems}
        onSelectExtensionItem={onAction}
        navigationItems={navigationItems}
        activeNavigationItemKey={activeKey}
        onSelectNavigationItem={key => setActiveKey(key)}
        utilityItems={utilityItems}
        onSelectUtilityItem={onAction}
        onSelectSettings={() => onAction('settings')} // eslint-disable-line no-alert
        onSelectHelp={() => onAction('help')} // eslint-disable-line no-alert
        onSelectLogout={() => onAction('logout')} // eslint-disable-line no-alert
      >
        <Placeholder title={activeKey} />
      </ApplicationNavigation>
    </ApplicationBase>
  );
};

export default ExampleApplication;
