import { FC } from 'react'

import { DashboardTemplate } from '@/components/templates/DashboardTemplate/DashboardTemplate'
import { getRandomInt } from '@/lib/utils'

export const DashboardPage: FC = () => {
  const userMock = {
    name: 'Eric',
    lastName: 'Muñoz',
    quota: 2,
  }

  const mockModules = [
    {
      name: 'Prepaid flights',
      description:
        'Prepaid package of flight credits used for travel with certain restrictions (destinations and/or travel period).',
      active: !!getRandomInt(2),
    },
    {
      name: 'Discount club',
      description:
        'Membership program that gives access to a set of discounts over fares, ancillaries and/or specific services (seat selection, priority boarding or extra baggage).',
      active: !!getRandomInt(2),
    },
    {
      name: 'Ancillary bundles membership',
      description:
        'Membership program for a well-defined set of ancillaries (seat selection, priority boarding and extra baggage) to be included for free upon booking creation.',
      active: !!getRandomInt(2),
    },
    {
      name: 'Flight subscription',
      description:
        'Simple Flight Subscription that gives access to a limited number of free (or heavily discounted) flights with certain restrictions such as destinations and/or travel period.',
      active: !!getRandomInt(2),
    },
    {
      name: 'Unlimited travel',
      description:
        'Unlimited Flight Subscription that gives access to unlimited travel at a 0 fare (e.g., only paying taxes).',
      active: !!getRandomInt(2),
    },
  ]

  return <DashboardTemplate user={userMock} modules={mockModules} />
}
