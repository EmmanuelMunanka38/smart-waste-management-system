import { afterEach, describe, expect, it } from 'vitest'
import { mockApiFetch, resetMockData } from './mockApi.js'

const request = (path, options = {}) => mockApiFetch(path, options)

afterEach(() => {
  resetMockData()
})

describe('mock demo API', () => {
  it('authenticates the seeded demo resident without a backend', async () => {
    const response = await request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: 'resident@smartwaste.lk', password: 'Resident@123' }),
    })

    expect(response.ok).toBe(true)
    expect(await response.json()).toMatchObject({
      user: { id: 'demo-resident', role: 'resident', name: 'Nimali Perera' },
    })
  })

  it('keeps route optimization and collection updates in mock state', async () => {
    const optimized = await request('/api/ops/routes/optimize', {
      method: 'POST',
      body: JSON.stringify({ city: 'Colombo' }),
    })
    const plan = await optimized.json()
    expect(plan.stops.length).toBeGreaterThan(0)

    await request('/api/ops/collections', {
      method: 'POST',
      body: JSON.stringify({ binId: plan.stops[0].binId, truckId: plan.truckId }),
    })
    const currentPlan = await request('/api/ops/routes/by-city?city=Colombo')

    expect((await currentPlan.json()).stops[0].visited).toBe(true)
  })

  it('supports booking a pickup and loading the resident request list', async () => {
    await request('/api/schedules/special/confirm', {
      method: 'POST',
      body: JSON.stringify({
        userId: 'demo-resident',
        itemType: 'furniture',
        quantity: 1,
        approxWeight: 18,
        preferredDateTime: '2026-10-10T08:00:00.000Z',
        slotId: '2026-10-10-0800',
      }),
    })
    const response = await request('/api/schedules/special/my?userId=demo-resident')
    const result = await response.json()

    expect(result.requests.some(entry => entry.itemType === 'furniture')).toBe(true)
  })

  it('returns a report dataset using the requested analytics filters', async () => {
    const response = await request('/api/analytics/report', {
      method: 'POST',
      body: JSON.stringify({
        criteria: {
          dateRange: { from: '2026-09-01', to: '2026-10-02' },
          regions: ['Colombo'],
          wasteTypes: ['Organic'],
          billingModels: [],
        },
      }),
    })
    const { data } = await response.json()

    expect(data.criteria.regions).toEqual(['Colombo'])
    expect(data.tables.households.length).toBeGreaterThan(0)
    expect(data.totals.totalWeightKg).toBeGreaterThan(0)
  })
})
