// app/components/LanguageSwitcher.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n, type Locale } from '@/i18n-config'
import styles from './LanguageSwitcher.module.css'
import { BsGlobe2, BsChevronDown } from 'react-icons/bs'

export default function LanguageSwitcher() {
  const pathName = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const switcherRef = useRef<HTMLDivElement>(null)

  const currentLocale = pathName.split('/')[1] as Locale || i18n.defaultLocale;

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  // Effect to handle clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    // Add event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className={styles.switcherContainer} ref={switcherRef}>
      <button className={styles.triggerButton} onClick={() => setIsOpen(!isOpen)}>
        <BsGlobe2 className={styles.icon} />
        <span className={styles.currentLocale}>{currentLocale.toUpperCase()}</span>
        <BsChevronDown className={`${styles.arrowIcon} ${isOpen ? styles.open : ''}`} />
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {i18n.locales.map((locale) => {
            const isActive = locale === currentLocale;
            return (
              <li key={locale}>
                <Link
                  href={redirectedPathName(locale)}
                  className={`${styles.localeLink} ${isActive ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)} // Close dropdown on click
                >
                  {locale.toUpperCase()}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}