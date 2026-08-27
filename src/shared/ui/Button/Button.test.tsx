import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  test('render', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('calls onClick', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>test</Button>);
    await user.click(screen.getByText('test'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  test('applies disabled', () => {
    render(<Button disabled>test</Button>);
    expect(screen.getByText('test')).toBeDisabled();
  });
});
