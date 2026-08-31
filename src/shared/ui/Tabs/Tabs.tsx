import { createContext, useContext, useState, type ReactNode } from 'react';

import styles from './Tabs.module.scss';
import { Button } from '../Button/Button';
import { cn } from '@/shared/lib';

interface TabsContextType {
  activeTab: string;
  handleChangeActiveTab: (tab: string) => void;
}

interface TabsProps {
  children: ReactNode;
  defaultValue: string;
  className?: string;
  onChange?: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const Tabs = (props: TabsProps) => {
  const { children, defaultValue, className, onChange } = props;
  const [activeTab, setActiveTab] = useState<string>(defaultValue);

  const handleChangeActiveTab = (tab: string) => {
    setActiveTab(tab);
    if (onChange) {
      onChange(tab);
    }
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleChangeActiveTab }}>
      <div className={cn(styles.tabs, className)}> {children}</div>
    </TabsContext.Provider>
  );
};

interface TabsListProps {
  children: ReactNode;
}

const TabsList = ({ children }: TabsListProps) => {
  return <div className={styles.list}>{children}</div>;
};

interface TabsTriggerProps {
  children: ReactNode;
  value: string;
}

const TabsTrigger = ({ children, value }: TabsTriggerProps) => {
  const context = useContext(TabsContext);

  if (context === undefined) {
    throw new Error('TabsTrigger must be within Tabs');
  }

  const isActive = context.activeTab === value;

  return (
    <Button
      theme="tertiary"
      type="button"
      onClick={() => context.handleChangeActiveTab(value)}
      form="rounded"
      className={cn(styles.trigger, { [styles.active]: isActive })}
    >
      {children}
    </Button>
  );
};

interface TabsContentProps {
  children: ReactNode;
  value: string;
  className?: string;
}

const TabsContent = ({ children, value, className }: TabsContentProps) => {
  const context = useContext(TabsContext);

  if (context === undefined) {
    throw new Error('TabsContent must be within Tabs');
  }

  const isActive = context.activeTab === value;

  if (!isActive) return null;

  return <div className={cn(className)}>{children}</div>;
};

Tabs.List = TabsList;
Tabs.Content = TabsContent;
Tabs.Trigger = TabsTrigger;
