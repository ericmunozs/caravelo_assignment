import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useState } from 'react'

import { Button } from '../../atoms/Button/Button'
import { EditFlightsModal } from '../../organisms/EditFlightsModal/EditFlightsModal'

interface IDashboardTemplateProps {
  user: { name: string; lastName: string; quota: number }
  modules: { name: string; description: string; active: boolean }[]
}

export const DashboardTemplate: FC<IDashboardTemplateProps> = ({
  user,
  modules,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between mb-6">
        <div className="p-4 bg-white shadow rounded-sm text-center">
          <h3 className="text-lg font-semibold">User</h3>
          <p className="text-2xl">
            {user.lastName}, {user.name}
          </p>
        </div>
        <div className="p-4 bg-white shadow rounded-sm text-center">
          <h3 className="text-lg font-semibold">Active Modules</h3>
          <p className="text-2xl">
            {modules.filter((module) => module.active).length}
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <Button onClick={openModal} className="flex items-center">
          <FontAwesomeIcon icon={faPencil} className="mr-2" />
          Edit flights
        </Button>
      </div>

      <div className="bg-white shadow rounded-sm p-4">
        <h2 className="text-xl font-semibold mb-4">Subscription Modules</h2>
        <div>
          {modules.map((module, index) => (
            <div
              key={index}
              className="p-2 flex justify-between bg-white shadow rounded-sm mb-2"
            >
              <div className="flex flex-col items-start justify-start w-[80%] ">
                <p className="text-lg font-semibold">{module.name}</p>
                <p className="text-sm text-left">{module.description}</p>
              </div>
              <div className="flex items-center">
                <span
                  className={`w-[100px] px-2 py-1 rounded-sm text-white ${module.active ? 'bg-green-500' : 'bg-red-500'}`}
                >
                  {module.active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EditFlightsModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  )
}
