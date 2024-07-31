import { ChangeEvent, FC, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/atoms/Button/Button'
import { Select } from '@/components/atoms/Select/Select'
import { Counter } from '@/components/molecules/Counter/Counter'
import { useToast } from '@/components/ui/toaster/use-toast'
import { DashboardContext } from '@/contexts/DashboardContext'
import { saveQuota } from '@/services/quotaService'
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '../../molecules/Modal/Modal'

interface IEditFlightsModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

type Inputs = {
  quota: number
  reason: string
}

const REASON_OPTIONS_INCREASE = [
  'Subscriber canceled flight',
  'Airline canceled flight',
  'Customer compensation',
  'Other',
]

const REASON_OPTIONS_DECREASE = [
  'Flight not redeposited after a flight cancellation',
  'Subscriber had log in or password issues',
  'Subscriber had issues when booking',
  'Subscription has not renewed correctly',
  'Other',
]

export const EditFlightsModal: FC<IEditFlightsModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { quota, setQuota } = useContext(DashboardContext)
  const [flightsLeft, setFlightsLeft] = useState(quota)
  const [options, setOptions] = useState<string[]>([])
  const { register, handleSubmit, setValue, watch, reset } = useForm<Inputs>({
    defaultValues: {
      quota,
      reason: '',
    },
  })
  const { toast } = useToast()

  useEffect(() => {
    if (isOpen) {
      setFlightsLeft(quota)
    }
  }, [isOpen, quota])

  useEffect(() => {
    updateReasonOptions()
  }, [flightsLeft, quota])

  const updateReasonOptions = () => {
    if (flightsLeft > quota) {
      setOptions(REASON_OPTIONS_INCREASE)
    } else if (flightsLeft < quota) {
      setOptions(REASON_OPTIONS_DECREASE)
    } else {
      setOptions([])
      setValue('reason', '')
    }
  }

  const onSubmit = async (data: Inputs) => {
    try {
      const updatedQuota = await saveQuota(data)
      setQuota(updatedQuota.quota)
      handleClose()
      toast({
        variant: 'success',
        description: 'Flights modified correctly',
        duration: 3000,
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        description:
          'An error occurred while editing flights. Try again later.',
        duration: 3000,
      })
    }
  }

  const handleQuotaChange = (num: number) => {
    const newValue = flightsLeft + num
    setFlightsLeft(newValue)
    setValue('quota', newValue)
  }

  const handleDecrease = (event: React.MouseEvent) => {
    event.preventDefault()
    handleQuotaChange(-1)
  }

  const handleIncrease = (event: React.MouseEvent) => {
    event.preventDefault()
    handleQuotaChange(1)
  }

  const handleReasonChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue('reason', event.target.value)
  }

  const handleClose = () => {
    reset({
      quota: quota,
      reason: '',
    })
    setFlightsLeft(quota)
    onRequestClose()
  }

  return (
    <Modal open={isOpen} onOpenChange={handleClose}>
      <ModalContent className="bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            <ModalTitle>Edit flights</ModalTitle>
            <ModalDescription>
              Add or remove flights from the subscriber.
            </ModalDescription>
          </ModalHeader>
          <div className="flex items-center justify-between mt-4">
            <Counter
              title="Flights left"
              onIncrement={handleIncrease}
              onDecrement={handleDecrease}
              count={flightsLeft}
            />
            <Select
              {...register('reason', { required: true })}
              value={watch('reason')}
              onChange={handleReasonChange}
              className="ml-4 h-15"
              disabled={flightsLeft === quota}
            >
              <option value="" disabled>
                What is the motive?
              </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
          <ModalFooter>
            <Button type="submit" disabled={!watch('reason')}>
              Save Changes
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
