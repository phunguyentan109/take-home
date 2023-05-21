export const alias = {
  title: 'short_title',
  status: 'status',
}

export const titleOptions = [
  'vc',
  'product',
  'data',
  'data2',
  'data3',
  'scrum',
  'product2',
  'growth',
].map((v) => ({ value: v, label: v }))

export const statusOptions = ['OFFERING', 'RUNNING', 'OFFBOARDING'].map(
  (v) => ({ value: v, label: v })
)

export const DEFAULT_VALUES = {
  [alias.title]: '',
  [alias.status]: '',
}
