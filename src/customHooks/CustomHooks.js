import { useState, useCallback } from 'react';
// import { database } from '../config/firebase';

export function useModalState(defaultValue = false) {
    const [isOpen, setIsOpen] = useState(defaultValue);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    return { isOpen, open, close };
}