import type { Preview } from '@storybook/react-vite'
import { createElement, type ReactNode, useEffect } from 'react'

import '../src/styles/global.css'

type ThemeName = 'light' | 'dark'

function StoryTheme({ children, theme }: Readonly<{ children?: ReactNode; theme: ThemeName }>) {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
  }, [theme])

  return createElement('div', { className: 'bg-background text-foreground' }, children)
}

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story, context) =>
      createElement(
        StoryTheme,
        { theme: context.globals.theme === 'light' ? 'light' : 'dark' },
        createElement(Story),
      ),
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'dark',
      toolbar: {
        dynamicTitle: true,
        icon: 'circlehollow',
        items: ['light', 'dark'],
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
  },
  parameters: {
    layout: 'centered',
    a11y: { test: 'todo' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
