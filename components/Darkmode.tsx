import * as React from 'react'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Darkmode: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  return (
    <div className={styles.footer}>
      <div className={styles.settings}>
        <a
          className={styles.toggleDarkMode}
          onClick={toggleDarkModeCb}
          title='Toggle dark mode'
        >
          {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
        </a>
      </div>
    </div>
  )
}
