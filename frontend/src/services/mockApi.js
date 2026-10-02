const cities = [
  {
    name: 'Colombo',
    depot: { lat: 6.9147, lon: 79.8733 },
    bbox: [[6.9, 79.86], [6.94, 79.91]],
    areaSqKm: 9.4,
    population: 118000,
    lastCollectionAt: '2026-10-02T04:00:00.000Z',
  },
  {
    name: 'Homagama',
    depot: { lat: 6.8442, lon: 80.0031 },
    bbox: [[6.82, 79.95], [6.9, 80.04]],
    areaSqKm: 13.6,
    population: 91000,
    lastCollectionAt: '2026-10-01T04:30:00.000Z',
  },
  {
    name: 'Rajagiriya',
    depot: { lat: 6.9105, lon: 79.8875 },
    bbox: [[6.895, 79.87], [6.94, 79.92]],
    areaSqKm: 7.8,
    population: 76000,
    lastCollectionAt: '2026-10-02T05:00:00.000Z',
  },
]

const cityBins = {
  Colombo: [
    { binId: 'BIN-001', city: 'Colombo', area: 'Borella', fillLevel: 92, lat: 6.914, lon: 79.877 },
    { binId: 'BIN-002', city: 'Colombo', area: 'Cinnamon Gardens', fillLevel: 78, lat: 6.91, lon: 79.866 },
    { binId: 'BIN-003', city: 'Colombo', area: 'Maradana', fillLevel: 64, lat: 6.928, lon: 79.866 },
    { binId: 'BIN-004', city: 'Colombo', area: 'Dematagoda', fillLevel: 88, lat: 6.934, lon: 79.879 },
    { binId: 'BIN-005', city: 'Colombo', area: 'Borella', fillLevel: 52, lat: 6.919, lon: 79.884 },
    { binId: 'BIN-006', city: 'Colombo', area: 'Colombo 07', fillLevel: 96, lat: 6.902, lon: 79.87 },
  ],
  Homagama: [
    { binId: 'BIN-021', city: 'Homagama', area: 'Town Centre', fillLevel: 86, lat: 6.844, lon: 80.003 },
    { binId: 'BIN-022', city: 'Homagama', area: 'Pitipana', fillLevel: 71, lat: 6.829, lon: 80.018 },
    { binId: 'BIN-023', city: 'Homagama', area: 'Kiriwattuduwa', fillLevel: 58, lat: 6.816, lon: 80.039 },
    { binId: 'BIN-024', city: 'Homagama', area: 'Makumbura', fillLevel: 94, lat: 6.856, lon: 79.989 },
  ],
  Rajagiriya: [
    { binId: 'BIN-031', city: 'Rajagiriya', area: 'Nawala', fillLevel: 83, lat: 6.9, lon: 79.89 },
    { binId: 'BIN-032', city: 'Rajagiriya', area: 'Welikada', fillLevel: 69, lat: 6.916, lon: 79.895 },
    { binId: 'BIN-033', city: 'Rajagiriya', area: 'Obesekarapura', fillLevel: 91, lat: 6.909, lon: 79.892 },
  ],
}

const routeStops = [
  { binId: 'BIN-001', visited: true, estKg: 210, lat: 6.914, lon: 79.877 },
  { binId: 'BIN-002', visited: false, estKg: 260, lat: 6.91, lon: 79.866 },
  { binId: 'BIN-003', visited: false, estKg: 280, lat: 6.928, lon: 79.866 },
  { binId: 'BIN-004', visited: false, estKg: 190, lat: 6.934, lon: 79.879 },
  { binId: 'BIN-005', visited: false, estKg: 230, lat: 6.919, lon: 79.884 },
]

const initialPlans = {
  Colombo: {
    truckId: 'TRUCK-01',
    loadKg: 1170,
    distanceKm: 18.6,
    summary: { threshold: 0.58, consideredBins: 48, highPriorityBins: 4, baselineDistanceKm: 27.2, truckCapacityKg: 3000 },
    stops: routeStops,
    updatedAt: '2026-10-02T05:30:00.000Z',
    depot: cities[0].depot,
  },
}

const initialRequests = [
  {
    _id: 'REQ-1001',
    userId: 'demo-resident',
    itemType: 'furniture',
    quantity: 1,
    totalWeightKg: 24,
    createdAt: '2026-09-26T08:00:00.000Z',
    slot: { start: '2026-10-05T08:00:00.000Z', end: '2026-10-05T10:00:00.000Z' },
    status: 'scheduled',
    paymentStatus: 'success',
    paymentAmount: 515,
    paymentCurrency: 'LKR',
    paymentReference: 'DEMO-PAY-1001',
    paymentRequired: true,
    residentName: 'Nimali Perera',
    ownerName: 'Nimali Perera',
    address: '24 Flower Road, Colombo 07',
    district: 'Colombo',
    email: 'resident@smartwaste.lk',
    phone: '077 123 4567',
    approxWeight: 24,
    billingId: 'BILL-1001',
  },
  {
    _id: 'REQ-1002',
    userId: 'demo-resident',
    itemType: 'electronic-waste',
    quantity: 2,
    totalWeightKg: 12,
    createdAt: '2026-09-18T07:15:00.000Z',
    slot: { start: '2026-09-20T13:00:00.000Z', end: '2026-09-20T15:00:00.000Z' },
    status: 'scheduled',
    paymentStatus: 'success',
    paymentAmount: 350,
    paymentCurrency: 'LKR',
    paymentReference: 'DEMO-PAY-1002',
    paymentRequired: true,
    residentName: 'Nimali Perera',
    ownerName: 'Nimali Perera',
    address: '24 Flower Road, Colombo 07',
    district: 'Colombo',
    email: 'resident@smartwaste.lk',
    phone: '077 123 4567',
    approxWeight: 6,
    billingId: 'BILL-1002',
  },
]

const initialBills = {
  outstanding: [
    { _id: 'BILL-2026-1042', invoiceNumber: 'SW-2026-1042', amount: 2450, currency: 'LKR', dueDate: '2026-10-15T00:00:00.000Z', description: 'September household collection service' },
    { _id: 'BILL-2026-1088', invoiceNumber: 'SW-2026-1088', amount: 780, currency: 'LKR', dueDate: '2026-10-20T00:00:00.000Z', description: 'Special collection service' },
  ],
  paid: [
    { _id: 'BILL-2026-0912', invoiceNumber: 'SW-2026-0912', amount: 2200, currency: 'LKR', paidAt: '2026-09-01T11:20:00.000Z', latestTransaction: { _id: 'TX-9001', receiptUrl: null, paymentMethod: 'card' } },
  ],
}

const DEMO_STATE_KEY = 'smart-waste-demo-state'
let memoryState

function freshState() {
  return {
    plans: structuredClone(initialPlans),
    requests: structuredClone(initialRequests),
    bills: structuredClone(initialBills),
    users: [],
    checkoutSessions: {},
  }
}

function readState() {
  if (memoryState) return memoryState
  if (typeof window !== 'undefined') {
    try {
      const stored = window.localStorage.getItem(DEMO_STATE_KEY)
      if (stored) {
        memoryState = { ...freshState(), ...JSON.parse(stored) }
        return memoryState
      }
    } catch (error) {
      console.warn('Unable to load saved demo data', error)
    }
  }
  memoryState = freshState()
  return memoryState
}

function saveState() {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(DEMO_STATE_KEY, JSON.stringify(memoryState))
  } catch (error) {
    console.warn('Unable to save demo data', error)
  }
}

export function resetMockData() {
  memoryState = freshState()
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(DEMO_STATE_KEY)
  }
}

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function pdfResponse(text) {
  return new Response(new Blob([`%PDF-1.4\n${text}\n%%EOF`], { type: 'application/pdf' }), {
    status: 200,
    headers: { 'Content-Type': 'application/pdf' },
  })
}

function readBody(options) {
  if (!options?.body) return {}
  try {
    return JSON.parse(options.body)
  } catch {
    return {}
  }
}

function directionsForPlan(plan) {
  return {
    distanceKm: plan.distanceKm,
    durationMin: Math.round(plan.distanceKm * 7.1),
    line: plan.stops.map(stop => [stop.lon, stop.lat]),
  }
}

function buildReport(criteria) {
  const regions = criteria.regions?.length ? criteria.regions : ['Colombo', 'Homagama', 'Rajagiriya']
  const wasteTypes = criteria.wasteTypes?.length ? criteria.wasteTypes : ['Organic', 'Recyclable', 'General waste']
  const regionWeights = [4620, 3180, 2760]
  const totalWeightKg = regionWeights.slice(0, regions.length).reduce((total, amount) => total + amount, 0)
  const recyclableWeightKg = Math.round(totalWeightKg * 0.36)
  const nonRecyclableWeightKg = totalWeightKg - recyclableWeightKg
  const householdRows = [
    ['HH-CO-0182', 'Colombo', 'Monthly', 18, 182],
    ['HH-CO-0241', 'Colombo', 'Monthly', 16, 164],
    ['HH-HO-0097', 'Homagama', 'Pay as you throw', 14, 139],
    ['HH-RA-0134', 'Rajagiriya', 'Monthly', 12, 126],
    ['HH-CO-0316', 'Colombo', 'Pay as you throw', 11, 118],
  ].map(([householdId, region, billingModel, pickups, totalKg]) => ({ householdId, region, billingModel, pickups, totalKg }))
  const from = new Date(criteria.dateRange?.from || '2026-09-01')
  const timeSeries = Array.from({ length: 7 }, (_, index) => {
    const day = new Date(from)
    day.setDate(day.getDate() + index)
    return { day: day.toISOString().slice(0, 10), totalKg: [1480, 1620, 1390, 1810, 1740, 2050, 1890][index] }
  })

  return {
    criteria,
    totals: { records: 146, totalWeightKg, recyclableWeightKg, nonRecyclableWeightKg },
    charts: {
      regionSummary: regions.map((region, index) => ({ region, totalKg: regionWeights[index] ?? 1850 })),
      wasteSummary: wasteTypes.map((wasteType, index) => ({ wasteType, totalKg: Math.round(totalWeightKg * [0.42, 0.36, 0.22][index % 3]) })),
      timeSeries,
    },
    tables: { households: householdRows, regions: regions.map((region, index) => ({ region, totalKg: regionWeights[index] ?? 1850 })), wasteTypes: wasteTypes.map((wasteType, index) => ({ wasteType, totalKg: Math.round(totalWeightKg * [0.42, 0.36, 0.22][index % 3]) })) },
  }
}

export async function mockApiFetch(input, options = {}) {
  const url = new URL(typeof input === 'string' ? input : input.url, window.location.origin)
  const method = (options.method || 'GET').toUpperCase()
  const body = readBody(options)
  const state = readState()
  const path = url.pathname

  if (path === '/api/auth/login' && method === 'POST') {
    const users = [
      { id: 'demo-admin', name: 'Amara Jayasinghe', email: 'admin@smartwaste.lk', password: 'Admin@123', role: 'admin' },
      { id: 'demo-collector', name: 'Kasun Fernando', email: 'collector@smartwaste.lk', password: 'Collector@123', role: 'collector' },
      { id: 'demo-resident', name: 'Nimali Perera', email: 'resident@smartwaste.lk', password: 'Resident@123', role: 'resident' },
      ...state.users,
    ]
    const user = users.find(entry => entry.email.toLowerCase() === String(body.email || '').toLowerCase() && entry.password === body.password)
    if (!user) return jsonResponse({ message: 'Invalid email or password. Use one of the demo accounts shown on this page.' }, 401)
    const safeUser = { id: user.id, name: user.name, email: user.email, role: user.role }
    return jsonResponse({ message: 'Signed in successfully using the demo workspace.', user: safeUser })
  }

  if (path === '/api/auth/register' && method === 'POST') {
    if (state.users.some(user => user.email.toLowerCase() === String(body.email || '').toLowerCase())) {
      return jsonResponse({ message: 'An account with this email already exists.' }, 409)
    }
    const user = { id: `demo-user-${Date.now()}`, name: body.name, email: body.email, role: 'resident' }
    state.users.push({ ...user, password: body.password })
    saveState()
    return jsonResponse({ message: 'Demo account created. Your data is stored in this browser.', user })
  }

  if (path === '/api/ops/cities' && method === 'GET') return jsonResponse(cities)
  if (path === '/api/ops/summary' && method === 'GET') {
    return jsonResponse({ activeZones: 6, totalZones: 8, availableTrucks: 9, fleetSize: 12, engagedTrucks: 7, totalBins: 1400 })
  }
  if (path === '/api/ops/bins' && method === 'GET') return jsonResponse(cityBins[url.searchParams.get('city')] || [])

  if (path === '/api/ops/routes/optimize' && method === 'POST') {
    const city = cities.find(entry => entry.name === body.city) || cities[0]
    const bins = cityBins[city.name] || cityBins.Colombo
    const plan = {
      truckId: city.name === 'Colombo' ? 'TRUCK-01' : city.name === 'Homagama' ? 'TRUCK-04' : 'TRUCK-07',
      loadKg: bins.slice(0, 5).reduce((total, bin) => total + Math.round(bin.fillLevel * 3.2), 0),
      distanceKm: city.name === 'Colombo' ? 18.6 : 14.2,
      summary: { threshold: 0.58, consideredBins: bins.length * 8, highPriorityBins: bins.filter(bin => bin.fillLevel >= 80).length, baselineDistanceKm: 27.2, truckCapacityKg: 3000 },
      stops: bins.slice(0, 5).map((bin, index) => ({
        binId: bin.binId,
        visited: index === 0,
        estKg: Math.round(bin.fillLevel * 3.2),
        lat: bin.lat,
        lon: bin.lon,
      })),
      updatedAt: new Date().toISOString(),
      depot: city.depot,
    }
    state.plans[city.name] = plan
    saveState()
    return jsonResponse(plan)
  }

  if (path === '/api/ops/collections' && method === 'POST') {
    Object.values(state.plans).forEach(plan => {
      plan.stops = plan.stops.map(stop => stop.binId === body.binId ? { ...stop, visited: true } : stop)
    })
    saveState()
    return jsonResponse({ ok: true, message: 'Collection recorded.' })
  }

  const todayRoute = path.match(/^\/api\/ops\/routes\/([^/]+)\/today$/)
  if (todayRoute && method === 'GET') {
    const plan = state.plans.Colombo
    return jsonResponse({ stops: plan?.stops || [] })
  }
  const directionsRoute = path.match(/^\/api\/ops\/routes\/([^/]+)\/directions$/)
  if (directionsRoute && method === 'GET') {
    const plan = Object.values(state.plans).find(entry => entry.truckId === decodeURIComponent(directionsRoute[1]))
    return plan ? jsonResponse(directionsForPlan(plan)) : jsonResponse({ message: 'Route not found.' }, 404)
  }
  if (path === '/api/ops/routes/by-city' && method === 'GET') {
    const plan = state.plans[url.searchParams.get('city')]
    return plan ? jsonResponse(plan) : jsonResponse({ message: 'No route has been planned for this city.' }, 404)
  }

  if (path === '/api/analytics/config' && method === 'GET') {
    return jsonResponse({
      filters: {
        regions: ['Colombo', 'Homagama', 'Rajagiriya'],
        wasteTypes: ['Organic', 'Recyclable', 'General waste'],
        billingModels: ['Monthly', 'Pay as you throw'],
        defaultDateRange: { from: '2026-09-01', to: '2026-10-02' },
      },
    })
  }
  if (path === '/api/analytics/report' && method === 'POST') return jsonResponse({ data: buildReport(body.criteria || {}) })

  if (path === '/api/schedules/special/config' && method === 'GET') {
    return jsonResponse({
      ok: true,
      items: [
        { id: 'furniture', label: 'Furniture and bulky items', allow: true, baseFee: 500, perKg: 10 },
        { id: 'electronic-waste', label: 'Electronic waste', allow: true, baseFee: 250, perKg: 15 },
        { id: 'garden-waste', label: 'Garden waste', allow: true, baseFee: 300, perKg: 8 },
        { id: 'construction-debris', label: 'Construction debris', allow: true, baseFee: 750, perKg: 20 },
      ],
      slotConfig: { daysAhead: 30, disableWeekends: false, hours: { start: '08:00', end: '18:00' } },
    })
  }
  if (path === '/api/schedules/special/my' && method === 'GET') {
    return jsonResponse({ ok: true, requests: state.requests.filter(request => request.userId === url.searchParams.get('userId')) })
  }
  if (path === '/api/schedules/special/availability' && method === 'POST') {
    const policy = {
      furniture: { baseFee: 500, perKg: 10 },
      'electronic-waste': { baseFee: 250, perKg: 15 },
      'garden-waste': { baseFee: 300, perKg: 8 },
      'construction-debris': { baseFee: 750, perKg: 20 },
    }[body.itemType] || { baseFee: 300, perKg: 10 }
    const weight = Number(body.approxWeight || 0) * Number(body.quantity || 1)
    const subtotal = policy.baseFee + weight * policy.perKg
    const tax = Math.round(subtotal * 0.03)
    const date = new Date(body.preferredDateTime || Date.now())
    const day = date.toISOString().slice(0, 10)
    return jsonResponse({
      ok: true,
      slots: [
        { slotId: `${day}-0800`, start: `${day}T08:00:00.000Z`, end: `${day}T10:00:00.000Z`, capacityLeft: 4 },
        { slotId: `${day}-1000`, start: `${day}T10:00:00.000Z`, end: `${day}T12:00:00.000Z`, capacityLeft: 6 },
        { slotId: `${day}-1400`, start: `${day}T14:00:00.000Z`, end: `${day}T16:00:00.000Z`, capacityLeft: 3 },
      ],
      payment: {
        required: subtotal + tax > 0,
        baseCharge: policy.baseFee,
        weightCharge: weight * policy.perKg,
        taxCharge: tax,
        amount: subtotal + tax,
        currency: 'LKR',
        totalWeightKg: weight,
      },
    })
  }
  if (path === '/api/schedules/special/confirm' && method === 'POST') {
    const slotStart = body.preferredDateTime || new Date().toISOString()
    const request = {
      ...body,
      _id: `REQ-${Date.now()}`,
      createdAt: new Date().toISOString(),
      slot: { start: slotStart, end: new Date(new Date(slotStart).getTime() + 2 * 60 * 60 * 1000).toISOString() },
      totalWeightKg: Number(body.approxWeight || 0) * Number(body.quantity || 1),
      status: body.deferPayment ? 'pending-payment' : 'scheduled',
      paymentStatus: body.deferPayment ? 'pending' : body.paymentStatus || 'success',
      paymentAmount: Number(body.approxWeight || 0) * 10 + 500,
      paymentCurrency: 'LKR',
      paymentRequired: true,
      paymentReference: body.paymentReference || `DEMO-${Date.now()}`,
    }
    state.requests.push(request)
    saveState()
    return jsonResponse({ ok: true, message: 'Your special collection has been scheduled.', request })
  }
  if (path === '/api/schedules/special/payment/checkout' && method === 'POST') {
    const sessionId = `demo_schedule_${Date.now()}`
    const request = {
      ...body,
      _id: `REQ-${Date.now()}`,
      id: `REQ-${Date.now()}`,
      userId: body.userId,
      createdAt: new Date().toISOString(),
      slot: { start: body.preferredDateTime, end: new Date(new Date(body.preferredDateTime).getTime() + 2 * 60 * 60 * 1000).toISOString() },
      totalWeightKg: Number(body.approxWeight || 0) * Number(body.quantity || 1),
      status: 'scheduled',
      paymentStatus: 'success',
      paymentAmount: Number(body.approxWeight || 0) * 10 + 500,
      paymentCurrency: 'LKR',
      paymentRequired: true,
      paymentReference: sessionId,
    }
    state.requests.push(request)
    state.checkoutSessions[sessionId] = { type: 'schedule', request, status: 'success' }
    saveState()
    return jsonResponse({ ok: true, checkoutUrl: `/schedule/payment/result?status=success&session_id=${sessionId}` })
  }
  const specialCheckout = path.match(/^\/api\/schedules\/special\/payment\/checkout\/([^/]+)$/)
  if (specialCheckout && method === 'GET') {
    const session = state.checkoutSessions[decodeURIComponent(specialCheckout[1])]
    return session?.type === 'schedule'
      ? jsonResponse({ ok: true, status: session.status, request: session.request })
      : jsonResponse({ message: 'Payment session not found.' }, 404)
  }

  const specialReceipt = path.match(/^\/api\/schedules\/special\/requests\/([^/]+)\/receipt$/)
  if (specialReceipt && method === 'GET') {
    const request = state.requests.find(entry => entry._id === decodeURIComponent(specialReceipt[1]))
    return request ? pdfResponse(`Smart Waste LK special collection receipt ${request._id}`) : jsonResponse({ message: 'Receipt not found.' }, 404)
  }

  if (path === '/api/billing/bills' && method === 'GET') {
    const paid = state.bills.paid.reduce((total, bill) => total + bill.amount, 0)
    const outstanding = state.bills.outstanding.reduce((total, bill) => total + bill.amount, 0)
    return jsonResponse({
      bills: state.bills,
      summary: { outstandingAmount: outstanding, paidAmount: paid, outstandingCount: state.bills.outstanding.length, paidCount: state.bills.paid.length },
      supportedPaymentMethods: ['card', 'link'],
    })
  }
  if (path === '/api/billing/checkout' && method === 'POST') {
    const bill = state.bills.outstanding.find(entry => entry._id === body.billId)
    if (!bill) return jsonResponse({ message: 'Bill not found.' }, 404)
    const sessionId = `demo_bill_${Date.now()}`
    state.checkoutSessions[sessionId] = { type: 'billing', bill, status: 'success' }
    state.bills.outstanding = state.bills.outstanding.filter(entry => entry._id !== bill._id)
    state.bills.paid.unshift({
      ...bill,
      paidAt: new Date().toISOString(),
      latestTransaction: { _id: `TX-${Date.now()}`, receiptUrl: null, paymentMethod: body.paymentMethods?.[0] || 'card' },
    })
    saveState()
    return jsonResponse({ checkoutUrl: `/billing/checkout?status=success&session_id=${sessionId}` })
  }
  const billCheckout = path.match(/^\/api\/billing\/checkout\/([^/]+)$/)
  if (billCheckout && method === 'GET') {
    const session = state.checkoutSessions[decodeURIComponent(billCheckout[1])]
    return session?.type === 'billing'
      ? jsonResponse({ data: { paymentStatus: session.status, currency: session.bill.currency, amountTotal: session.bill.amount * 100, bill: session.bill, receiptUrl: null } })
      : jsonResponse({ message: 'Checkout session not found.' }, 404)
  }
  const billingReceipt = path.match(/^\/api\/billing\/transactions\/([^/]+)\/receipt$/)
  if (billingReceipt && method === 'GET') {
    const bill = state.bills.paid.find(entry => entry.latestTransaction?._id === decodeURIComponent(billingReceipt[1]))
    return bill
      ? jsonResponse({ receipt: { invoiceNumber: bill.invoiceNumber, amount: bill.amount, currency: bill.currency, paidAt: bill.paidAt, transactionId: billingReceipt[1] } })
      : jsonResponse({ message: 'Receipt not found.' }, 404)
  }

  return jsonResponse({ message: `No mock response configured for ${method} ${path}` }, 404)
}
