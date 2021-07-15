import { overrideTailwindClasses } from 'tailwind-override';

export const twOverride = (initialTw, overrideTw) =>
  overrideTailwindClasses(`${initialTw} ${overrideTw}`);
