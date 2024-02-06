// src/mocks/browser.js
import { setupWorker } from 'msw/browser'
import { tempApi } from './tempApi'

// This configures a Service Worker with the given request tempApi.
export const worker = setupWorker(...tempApi)
