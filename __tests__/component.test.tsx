import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledTimes
import userEvent from '@testing-library/user-event';
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user interactions correctly', async () => {
    const mockUseExternalData = (useExternalData as jest.Mock).mockImplementation(() => ({
      data: { id: '123', content: 'Sample Content' },
      error: null,
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/click me/i));
    await waitFor(() => expect(mockUseExternalData).toHaveBeenCalled());
  });

  test('handles errors gracefully', async () => {
    const mockUseExternalData = (useExternalData as jest.Mock).mockImplementation(() => ({
      data: null,
      error: new Error('Failed to fetch'),
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching', async () => {
    const mockUseExternalData = (useExternalData as jest.Mock).mockImplementation(() => ({
      data: null,
      error: null,
      isLoading: true,
    }));

    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented', () => {
    const mockUseExternalData = (useExternalData as jest.Mock).mockImplementation(() => ({
      data: { id: '123', content: 'Sample Content' },
      error: null,
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    userEvent.tab(); // simulate tabbing
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', /click me/i);
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toHaveBeenCalledTimes
import userEvent from '@testing-library/user-event';
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user interactions correctly', async () => {
    const mockUseExternalData = (useExternalData as jest.Mock).mockImplementation(() => ({
      data: { id: '123', content: 'Sample Content' },
      error: null,
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/click me/i));
    await waitFor(() => expect(mockUseExternalData).toHaveBeenCalled());
  });

  test('handles errors gracefully', async () => {
    const mockUseExternalData = (useExternalData as jest.Mock).mockImplementation(() => ({
      data: null,
      error: new Error('Failed to fetch'),
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching', async () => {
    const mockUseExternalData = (useExternalData as jest.Mock).mockImplementation(() => ({
      data: null,
      error: null,
      isLoading: true,
    }));

    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented', () => {
    const mockUseExternalData = (useExternalData as jest.Mock).mockImplementation(() => ({
      data: { id: '123', content: 'Sample Content' },
      error: null,
      isLoading: false,
    }));

    render(<CoreFunctionalityComponent />);
    
    userEvent.tab(); // simulate tabbing
    const button = screen.getByRole('button');
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', /click me/i);
  });
});