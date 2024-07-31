import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

import { Button } from '@/components/atoms/Button/Button'

interface ICounterProps {
  count: number
  onIncrement: (event: React.MouseEvent) => void
  onDecrement: (event: React.MouseEvent) => void
  title?: string
}

export const Counter: FC<ICounterProps> = ({
  count,
  onIncrement,
  onDecrement,
  title,
}) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="pb-2 font-semibold">{title}</p>
        <div className="flex flex-row">
          <Button
            onClick={onDecrement}
            className="rounded-full w-8 h-8 flex items-center justify-center"
            disabled={count === 0}
          >
            <FontAwesomeIcon icon={faMinus} size="xs" />
          </Button>
          <span className="mx-4">{count}</span>
          <Button
            onClick={onIncrement}
            className="rounded-full w-8 h-8 flex items-center justify-center"
            disabled={count > 3}
          >
            <FontAwesomeIcon icon={faPlus} size="xs" />
          </Button>
        </div>
      </div>
    </div>
  )
}
