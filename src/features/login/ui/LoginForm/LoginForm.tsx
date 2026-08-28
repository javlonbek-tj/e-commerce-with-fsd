import { AuthMethod } from '@/shared/config';
import { Input, Tabs } from '@/shared/ui';

export const LoginForm = () => {
  return (
    <form>
      <Tabs defaultValue={AuthMethod.EMAIL}>
        <Tabs.List>
          <Tabs.Trigger value={AuthMethod.EMAIL}>
            {AuthMethod.EMAIL}
          </Tabs.Trigger>
          <Tabs.Trigger value={AuthMethod.PHONE}>
            {AuthMethod.PHONE}
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={AuthMethod.EMAIL}>
          <Input />
        </Tabs.Content>
      </Tabs>
    </form>
  );
};
