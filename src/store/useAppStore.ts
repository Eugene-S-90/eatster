import { create } from 'zustand'

type AppStep = 'idle' | 'loading' | 'train' | 'cart' | 'payment' | 'error' | 'stadium' 

type AppState = {
  step: AppStep
  setStep: (step: AppStep) => void
  isModalOpen: boolean
  setModalOpen: (open: boolean) => void
  globalError: string | null
  setGlobalError: (msg: string | null) => void
}

export const useAppStore = create<AppState>((set) => ({
  step: 'idle',
  setStep: (step) => set({ step }),
  isModalOpen: false,
  setModalOpen: (open) => set({ isModalOpen: open }),
  globalError: null,
  setGlobalError: (msg) => set({ globalError: msg }),
}))