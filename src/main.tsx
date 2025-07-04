import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ThemeProvider } from './provider/theme-provider.tsx'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'

import router from './routs/index.tsx'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}> 
          <RouterProvider router={router} />
       </Provider>
    </ThemeProvider>
  </StrictMode>,
)
